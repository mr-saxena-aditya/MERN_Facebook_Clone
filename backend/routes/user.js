/*
This code defines a router that handles routes related to the '/user' endpoint.
*/

const express = require('express'); // Import the Express framework
const router = express.Router(); // Create a new router instance

// Handle GET requests to the '/user' route
router.get("/user", (req, res) => {
    res.send('User: Welcome from the server!'); // Send a response with the message "User: Welcome from the server!"
});

module.exports = router; // Export the router to be used in other modules
