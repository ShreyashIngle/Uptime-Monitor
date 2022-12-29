const express = require("express");
const { createNotification } = require("../controllers/notificationController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", protect, createNotification);

module.exports = router;
