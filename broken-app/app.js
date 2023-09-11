const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json()); // Use the built-in JSON middleware for parsing request bodies

app.post('/', async (req, res, next) => {
  try {
    const { developers } = req.body;

    if (!developers || !Array.isArray(developers)) {
      return res.status(400).json({ error: 'Invalid input data' });
    }

    const results = await Promise.all(
      developers.map(async (d) => {
        const response = await axios.get(`https://api.github.com/users/${d}`);
        return { name: response.data.name, bio: response.data.bio };
      })
    );

    return res.json(results);
  } catch (err) {
    console.error('Error:', err.message);
    return res.status(500).json({ error: 'Server error' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
