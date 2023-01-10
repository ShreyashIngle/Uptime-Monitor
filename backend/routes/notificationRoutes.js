const express = require("express");
const { getAllNotifications, batchMarkAsRead } = require("../controllers/notificationController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/:userId", protect, getAllNotifications);
router.post("/", protect, batchMarkAsRead);

module.exports = router;
