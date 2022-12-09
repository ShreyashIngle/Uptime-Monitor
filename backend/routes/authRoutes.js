const express = require("express");
const {
  register,
  login,
  userVerification,
} = require("../controllers/authController");
const router = express.Router();

//User Registration
router.post("/register", register);

//User Login
router.post("/login", login);

//Email verification
router.get("/user/verify/:userId/:token", userVerification);

module.exports = router;
