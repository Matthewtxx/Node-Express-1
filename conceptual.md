### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
callback functions, promises, ascyn/await, event emmitters, generators, libraries and frameworks.

- What is a Promise?
A Promise is a built-in JavaScript object introduced to handle asynchronous operations in a more 
organized and manageable way. It represents a value that may not be available immediately but 
will be resolved or rejected in the future. 

- What are the differences between an async function and a regular function?
regular functions are synchronous and return values immediately, while async functions are asynchronous, 
return Promises, and allow you to write non-blocking code using the await keyword. Async functions are 
particularly valuable for handling asynchronous operations in a more readable and maintainable manner.

- What is the difference between Node.js and Express.js?
Node.js is the underlying runtime environment that allows you to run JavaScript on the server, 
while Express.js is a web application framework built on top of Node.js. Express.js simplifies web application 
development by providing tools and abstractions for routing, middleware, and other common web-related tasks. 

- What is the error-first callback pattern?
In the error-first callback pattern, a callback function is passed as an argument to an asynchronous function. 
This callback function is expected to have two parameters: the first parameter is reserved for an error object 
(if an error occurs), and the second parameter is reserved for the successful result or data. The convention is 
that the error parameter should be checked first, and if it is null or undefined, it indicates a successful operation. 
If the error parameter has a value, it means an error occurred, and the error details can be found in that object.

- What is middleware?
A software component or function that acts as an intermediary between different parts of a software application 
or between different software systems.

- What does the `next` function do?
Its purpose is to pass control from the current middleware function to the next middleware function in the 
chain or to the final route handler. In other words, it allows the request-response cycle to continue processing.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
It should use Promise.all to send the requests concurrently, which will make better use of available network resources and reduce the total response time.
The provided code lacks error handling. If any of the requests fail, it won't be apparent in the current implementation.
It should use meaningful variable names that reflect the data being fetched, such as elieData, joelData, and mattData.

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
