// Import the Express framework
const express = require('express');
// Create a new router instance
const router = express.Router();
// Import the home function from the ../controllers/user module
const { home } = require("../controllers/user");

// Handle GET requests to the '/user' route using the home controller
router.get("/user", home);

// Export the router to be used in other modules
module.exports = router;
