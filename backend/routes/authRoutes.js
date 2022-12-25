const express = require("express");
const {
  register,
  login,
  logout,
  refresh,
  userVerification,
} = require("../controllers/authController");
const router = express.Router();

//User Registration
router.post("/register", register);

//User Login
router.post("/login", login);

//User Logout
router.post("/logout", logout);

//Refresh token
router.get("/refresh", refresh);

//Email verification
router.get("/user/verify/:userId/:token", userVerification);

module.exports = router;
