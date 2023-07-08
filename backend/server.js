/**
 * This code sets up an Express server that handles various routes and uses CORS middleware to allow cross-origin requests.
 * It connects to a MongoDB database and listens on a specified port.
 */

// Import the necessary modules
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { readdirSync } = require('fs');
const dotenv = require('dotenv');

dotenv.config(); // Load the .env file

const app = express(); // Create an instance of the Express application

app.use(cors()); // Use the CORS middleware to allow cross-origin requests

// Register routes
readdirSync('./routes/').map((route) => {
    const routePath = "./routes/" + route;
    app.use("/", require(routePath));
});

// Connect to the MongoDB database
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true, // Use newUrlParser to connect to the MongoDB database
    useUnifiedTopology: true // Use useUnifiedTopology to connect to the MongoDB database
})
.then(() => { console.log("Connected to MongoDB") }) // If the connection is successful then log the success message to the console
.catch((err) => { console.log(err); }); // If the connection is not successful then log the error to the console

const port = process.env.PORT || 8000; // Set the port number

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log('Press Ctrl+C to stop the server');
});
