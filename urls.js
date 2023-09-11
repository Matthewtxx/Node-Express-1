const fs = require('fs');
const http = require('http');
const https = require('https');
const urlModule = require('url');

//check if filename argument is provided
if (process.argv.length !== 3) {
    console.error('usage: node urls.js urls.txt');
    return;
}

//read filename from command line argument
const filename = process.argv[2];

//read the file with urls line by line
fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    const urls = data.split('\n').filter(Boolean);

    //process each url
    urls.forEach((url) => {
        const parsedUrl = urlModule.parse(url);
        const hostname = parsedUrl.hostname;

        //define the protocol based on url
        const httpModule = parsedUrl.protocol === 'https:' ? https : http;

        //make a get request to the url
        const request = httpModule.get(url, (response) => {
            let htmlData = '';

            response.on('data', (chunk) => {
                htmlData += chunk;
            });

            response.on('end', () => {
                const outputFilename = `${hostname}.txt`;

                fs.writeFile(outputFilename, htmlData, 'utf-8', (err) => {
                    if (err) {
                        console.error(`error writing to ${outputFilename}:`, err);
                    } else {
                        console.log(`downloaded ${url} and saved to ${outputFilename}`);
                    }
                });
            });
        });

        request.on('error', (err) => {
            console.error(`error downloading ${url}:`, err);
        });

        request.end();
    });
});