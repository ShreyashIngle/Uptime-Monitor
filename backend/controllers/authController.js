const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const jwtSecret = process.env.JWT_SECRET;

const register = asyncHandler(async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Please provide all fields" });
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  res.status(201).json({ message: "registration successful" });
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //Verifying the account existence
  const existingUser = await User.findOne({ email });

  if (!existingUser) {
    return res.status(400).json({ message: "User doesn't exists" });
  }

  //Verifying the password
  const isMatch = await bcrypt.compare(password, existingUser.password);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  //Generating the token
  const token = jwt.sign(
    {
      id: existingUser._id,
    },
    jwtSecret,
    { expiresIn: "1d" }
  );

  const user = {
    email: existingUser.email,
    firstName: existingUser.firstName,
    lastName: existingUser.lastName,
  };

  res.status(200).json({ user, token });
});

module.exports = {
  register,
  login,
};
