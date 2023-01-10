const express = require("express");
const { getAllNotifications, batchMarkAsRead, deleteAll } = require("../controllers/notificationController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/:userId", protect, getAllNotifications);
router.post("/", protect, batchMarkAsRead);
router.post("/delete", protect, deleteAll);

module.exports = router;
