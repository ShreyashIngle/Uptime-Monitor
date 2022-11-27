const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //Get the token from headers
      token = req.headers.authorization.split(" ")[1];
      
      if (!token) {
        return res.status(401).json({ message: "Unauthorized. No token" });
      }

      //Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //Get user token from the token
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401).json({ message: "Unauthorized" });
    }
  }
});

module.exports = { protect };
