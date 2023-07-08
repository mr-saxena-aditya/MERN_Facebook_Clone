/**
 * This code sets up an Express server that handles various routes and uses CORS middleware to allow cross-origin requests.
 */

// Import the necessary modules
const express = require('express');
const cors = require('cors');
const { readdirSync } = require('fs');
const dotenv = require('dotenv');   // Load the.env file
dotenv.config(); // Read the.env file

const app = express(); // Create an instance of the Express application

app.use(cors()); // Use the CORS middleware to allow cross-origin requests

// Read all the files in the 'routes' folder and map them to corresponding routes
readdirSync('./routes/').map((route) => {
    const routePath = "./routes/" + route;
    app.use("/", require(routePath));
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`); // Start the server and listen on the specified port
    console.log('Press Ctrl+C to stop the server');
});
