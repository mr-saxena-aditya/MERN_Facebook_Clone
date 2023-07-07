/*
This code sets up an Express server that handles various routes and uses CORS middleware to allow cross-origin requests.
*/

const express = require('express'); // Import the Express framework
const cors = require('cors'); // Import the CORS middleware
const { readdirSync } = require('fs'); // Import the file system
const app = express(); // Create an instance of the Express application
const useRoutes = require('./routes/user'); // Import the user routes

app.use(cors()); // Use the CORS middleware to allow cross-origin requests

app.use('/', useRoutes); // Use the user routes for the '/user' endpoint

app.get('/', (req, res) => {
    res.send('Hello World: Welcome from the server!'); // Handle GET requests to the root route ('/')
});

app.get('/about', (req, res) => {
    res.send('About : Welcome from the server!'); // Handle GET requests to the '/about' route
});

app.get('/contact', (req, res) => {
    res.send('Contact : Welcome from the server!'); // Handle GET requests to the '/contact' route
});

readdirSync('./routes/').map((r)=> app.use("/", require("./routes/"+r))); // Log all the files in the 'routes' folder

app.listen(8000, () => {
    console.log('Server is running on port 8000'); // Start the server and listen on port 8000
});
