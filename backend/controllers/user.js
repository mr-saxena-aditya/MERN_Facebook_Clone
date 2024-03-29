const User = require("../models/User"); // Import the User model
const { validateEmail } = require("../helpers/validation"); // Import the validateEmail helper function

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
    email,
    password,
    gender,
    date_of_birth,
  } = req.body; // Extract the required data from the request body

  try {
    
    // Check if the email is already in use
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      console.error("The email address is already in use. Please try again with a different email.");
      return res.status(400).json({ error: "The email address is already in use. Please try again with a different email." });
    }

    // Validate the email using the helper function
    if (!validateEmail(email)) {
      console.error("Please enter a valid email address.");
      return res.status(400).json({ error: "Please enter a valid email address." });
    }

    // Validate the length of first_name and last_name
    if (first_name.length < 2 || last_name.length < 2) {
      console.error("First name and last name must be at least 2 characters long.");
      return res.status(400).json({ error: "First name and last name must be at least 2 characters long." });
    }

    // Validate the length and strength of the password
    if (password.length < 10) {
      console.error("Password must be at least 10 characters long.");
      return res.status(400).json({ error: "Password must be at least 10 characters long." });
    }

    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/;
    if (!passwordRegex.test(password)) {
      console.error("Password must contain at least one alphabet, one number, and one special character.");
      return res.status(400).json({ error: "Password must contain at least one alphabet, one number, and one special character." });
    }

    temporary_username = first_name.toLowerCase() + "_" + last_name.toLowerCase();

    // Create a new user instance with the provided data
    const user = await new User({
      first_name,
      last_name,
      username : temporary_username,
      email,
      password,
      gender,
      date_of_birth,
    }).save();

    // Return the user data as a JSON response
    res.json(user);
  } catch (error) {
    console.error(error);
    // If an error occurs while registering the user, send a 500 error response
    res.status(500).json({ error: "An error occurred while registering the user." });
  }
};