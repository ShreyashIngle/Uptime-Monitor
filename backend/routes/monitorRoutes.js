const express = require("express");
const router = express.Router();
const { addMonitor } = require("../controllers/monitorController");

router.post("/", addMonitor);

module.exports = router;
