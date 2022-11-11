const express = require("express");
const router = express.Router();
const { availabilityCheck } = require("../controllers/downtimeController");

router.get("/", availabilityCheck);

module.exports = router;
