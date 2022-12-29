const express = require("express");
const { getAllNotifications } = require("../controllers/notificationController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", protect, getAllNotifications);

module.exports = router;
