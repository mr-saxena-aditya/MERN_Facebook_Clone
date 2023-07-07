const express = require('express'); // Import the Express framework

const cors = require('cors'); // Import the CORS middleware

const app = express(); // Create an instance of the Express application

let allowed = ['http://localhost:3000', 'some other link']; // Create an array of allowed origins

app.use(cors());// Use the CORS middleware

app.get('/', (req, res) => {
    res.send('Hello World: Welcome from the server!'); // Handle GET requests to the root route
});

app.get('/about', (req, res) => {
    res.send('About : Welcome from the server!'); // Handle GET requests to the /about route
});

app.get('/contact', (req, res) => {
    res.send('Contact : Welcome from the server!'); // Handle GET requests to the /contact route
});

app.listen(8000, () => {
    console.log('Server is running on port 8000'); // Start the server and listen on port 8000
});
