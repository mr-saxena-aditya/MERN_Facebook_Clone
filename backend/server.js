const express = require('express'); // Import the Express framework

const cors = require('cors'); // Import the CORS middleware

const app = express(); // Create an instance of the Express application

let allowed = ['http://localhost:3000', 'some other link']; // Create an array of allowed origins

// Create a middleware function to handle CORS options
function option(req, res) {
    let tmp;
    let origin = req.header('Origin'); // Get the Origin header from the request
    if (allowed.indexOf(origin) !== -1) { // If the Origin header is in the list of allowed origins
        tmp = true;
        optionSuccessStatus = 200; // Set the success status for CORS options
    } else {
        tmp = {
            status: 403,
            message: 'Access Denied'
        };
    }

    res(null, tmp);

    return tmp;
}

const options = {
    origin: 'http://localhost:3000', // Specify the allowed origin
    useSuccessStatus: 200, // Allow successful CORS requests
    credentials: true // Allow credentials to be included in CORS requests
}

app.use(cors(options)); // Apply the CORS middleware to the Express app


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
