// Define the home function for handling the user home route
exports.home = (req, res) => {
    res.json({
      message: "Welcome to the API",
      status: 200,
      data: "This is the facebook API",
    });
  };
  