const User = require("../models/userModel");
const Team = require("../models/teamModel");
const Token = require("../models/tokenModel");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");

const jwtSecret = process.env.JWT_SECRET;

//@desc   Register
//@route  POST /api/v1/register
//@access Public
const register = asyncHandler(async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  //Input validations
  if (!email || !password) {
    return res.status(400).json({ message: "Please provide all fields" });
  }

  //Looking for duplicate accounts
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  //Password hashing
  const hashedPassword = await bcrypt.hash(password, 10);

  //Creating the user
  const { _doc } = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  //Extracting user details without the password
  const { password: pw, ...userDetails } = _doc;

  //Creating a team
  const { _id: teamID } = await Team.create({
    admin: userDetails._id,
  });

  //Sending email verification
  let verificationLinkToken = crypto.randomBytes(32).toString("hex");
  
  await Token({
    userId: userDetails._id,
    token: verificationLinkToken,
  }).save();

  const verificationURL = `${process.env.BASE_URL}/user/verify/${userDetails._id}/${verificationLinkToken}`;

  sendEmail(
    email,
    { verificationURL },
    process.env.SENDGRID_EMAIL_VERIFICATION_TEMPLATE
  );

  //Generating the token
  const token = jwt.sign(
    {
      id: userDetails._id,
    },
    jwtSecret,
    { expiresIn: "1d" }
  );

  res.status(201).json({
    ...userDetails,
    teamID,
    token,
  });
});

//@desc   Login
//@route  POST /api/v1/login
//@access Public
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

  const team = await Team.findOne({ admin: existingUser._id });

  const user = {
    email: existingUser.email,
    firstName: existingUser.firstName,
    lastName: existingUser.lastName,
    userId: existingUser._id,
  };

  res.status(200).json({ ...user, teamID: team._id, token });
});

//@desc   User Verification
//@route  get /api/v1/user/verify/:userId/:token
//@access Private
const userVerification = asyncHandler(async (req, res) => {
  const { userId, token } = req.params;

  const user = await User.findOne({ _id: userId });
  if (!user)
    return res
      .status(401)
      .json({ message: "Invalid link. User doesn't exists" });

  const existingToken = await Token.findOne({ userId, token });
  if (!existingToken) return res.status(401).json({ message: "Invalid link" });

  await User.findOneAndUpdate({ _id: userId }, { verified: true });
  await Token.findByIdAndRemove(existingToken._id);

  res.send("Email verified successfully");
});

module.exports = {
  register,
  login,
  userVerification,
};
