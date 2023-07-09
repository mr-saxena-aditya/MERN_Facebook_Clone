// Import the User model
const User = require("../models/User");

// Import the validateEmail helper function
const { validateEmail} = require("../helpers/validation"); 

/**
 * Registers a new user.
 * Endpoint: POST /register
 * 
 * @param {Object} req - The request object containing the user data.
 * @param {Object} res - The response object to send the result back to the client.
 */
exports.register = async (req, res) => {
  const {
    first_name,
    last_name,
    username,
    email,
    password,
    gender,
    date_of_birth,
    verified,
  } = req.body;


  if (! validateEmail(email)) {
    return res.status(400).json({ error: "Please enter a valid email address." });
  } else {
    try {
      // Create a new user instance
      const user = await new User({
        first_name,
        last_name,
        username,
        email,
        password,
        gender,
        date_of_birth,
        verified,
      }).save();
  
      // Return the user data as JSON response
      res.json(user);
    } catch (error) {
      console.error(error);
      // If an error occurs, send an error response with 500 status code
      res.status(500).json({ error: "An error occurred while registering the user." });
    }
  }
};
