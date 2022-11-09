const express = require("express");
const router = express.Router();
const { addMonitor , updateMonitor ,  getMonitor } = require("../controllers/monitorController");

router.post("/", addMonitor);
router.get("/:id", getMonitor);
router.patch("/:id", updateMonitor);

module.exports = router;
