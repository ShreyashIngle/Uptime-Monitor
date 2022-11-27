const express = require("express");
const router = express.Router();

const {
  addMonitor,
  getAllMonitors,
  deleteMonitor,
  updateMonitor,
  getMonitor,
} = require("../controllers/monitorController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, addMonitor);
router.get("/", protect, getAllMonitors);
router.get("/:id", protect, getMonitor);
router.delete("/:id", protect, deleteMonitor);
router.patch("/:id", protect, updateMonitor);

module.exports = router;
