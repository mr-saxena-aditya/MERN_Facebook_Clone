/*
This code defines a router that handles routes related to the '/user' endpoint.
*/

const express = require('express'); // Import the Express framework
const router = express.Router(); // Create a new router instance

const { home } = require("../controllers/user"); // Import the home function from the ../controllers/user module

// Handle GET requests to the '/user' route using the home controller
router.get("/user", home);

module.exports = router; // Export the router to be used in other modules
