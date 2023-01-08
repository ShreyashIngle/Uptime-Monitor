const User = require("../models/userModel");
const Team = require("../models/teamModel");
const Token = require("../models/tokenModel");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const generateTokens = require("../utils/generateTokens");

const jwtSecret = process.env.JWT_SECRET;
const jwtRefreshSecret = process.env.JWT_REFRESH_SECRET;

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
  const { _id: teamId } = await Team.create({
    admin: userDetails._id,
  });

  //Sending email verification
  let verificationLinkToken = crypto.randomBytes(32).toString("hex");

  await Token({
    userId: userDetails._id,
    token: verificationLinkToken,
  }).save();

  const verificationURL = `${process.env.BASE_URL}/user/verify/${userDetails._id}/${verificationLinkToken}`;

  //Sending email verification email
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
    teamId,
    token,
  });
});


//@desc   Login
//@route  POST /api/v1/login
//@access Public
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //Verifying the account existence
  const foundUser = await User.findOne({ email });
  if (!foundUser) {
    return res.status(400).json({ message: "User doesn't exists" });
  }

  //Verifying the password
  const isMatch = await bcrypt.compare(password, foundUser.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const { accessToken, refreshToken } = await generateTokens(foundUser._id);

  //Getting the user's team
  const team = await Team.findOne({ admin: foundUser._id });

  const user = {
    email: foundUser.email,
    firstName: foundUser.firstName,
    lastName: foundUser.lastName,
    userId: foundUser._id,
    teamId: team._id,
    teamName: team.name,
  };

  //Creates a secure cookie with refresh token
  res.cookie("jwt", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });

  res.status(200).json({ ...user, token: accessToken });
});

//@desc   Logout user
//@route  Get /api/v1/logout
//@access Public
const logout = asyncHandler(async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204);
  res.clearCookie("jwt", { httpOnly: true, sameSite: "none", secure: true });
  res.json({ message: "Cookie cleared" });
});

//@desc   Refresh
//@route  Get /api/v1/refresh
//@access Public
const refresh = asyncHandler(async (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) return res.status(401).json({ message: "Unauthorized" });

  const refreshToken = cookies.jwt;

  //verifying the refresh token
  jwt.verify(
    refreshToken,
    process.env.JWT_REFRESH_SECRET,
    asyncHandler(async (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: "Forbidden" });
      }

      const foundUser = await User.findOne({ _id: decoded.id });

      if (!foundUser) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const { accessToken } = await generateTokens(foundUser._id);

      res.json({ accessToken });
    })
  );
});

//@desc   User's Email verification
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
  logout,
  refresh,
  userVerification,
};
