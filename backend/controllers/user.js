
const User = require("../models/User");


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

  try {
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

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while registering the user." });
  }
};
