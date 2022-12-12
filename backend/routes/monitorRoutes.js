const express = require("express");
const router = express.Router();

//Controllers
const {
  addMonitor,
  getUserMonitors,
  deleteMonitor,
  updateMonitor,
  getMonitor,
} = require("../controllers/monitorController");

//Middleware
const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, addMonitor);
router.get("/", protect, getUserMonitors);
router.get("/:id", protect, getMonitor);
router.delete("/:id", protect, deleteMonitor);
router.patch("/:id", protect, updateMonitor);

module.exports = router;
