const express = require("express");
const router = express.Router();

const {
  addMonitor,
  getAllMonitors,
  deleteMonitor,
  updateMonitor,
  getMonitor,
} = require("../controllers/monitorController");

router.post("/", addMonitor);
router.get("/", getAllMonitors);
router.get("/:id", getMonitor);
router.delete("/:id", deleteMonitor);
router.patch("/:id", updateMonitor);

module.exports = router;
