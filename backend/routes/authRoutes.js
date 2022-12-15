const express = require("express");
const {
  register,
  login,
  refresh,
  userVerification,
} = require("../controllers/authController");
const router = express.Router();

//User Registration
router.post("/register", register);

//User Login
router.post("/login", login);

//Refresh token
router.post("/refresh", refresh);

//Email verification
router.get("/user/verify/:userId/:token", userVerification);

module.exports = router;
