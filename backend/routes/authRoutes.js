const express = require("express");
const {
  register,
  login,
  userVerification,
} = require("../controllers/authController");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/user/verify/:userId/:token", userVerification);

module.exports = router;
