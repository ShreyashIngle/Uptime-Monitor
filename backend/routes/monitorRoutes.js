const express = require("express");
const router = express.Router();
const { addMonitor , updateMonitor } = require("../controllers/monitorController");

router.post("/", addMonitor);
router.patch("/:id", updateMonitor);

module.exports = router;
