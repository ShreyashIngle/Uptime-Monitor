const express = require("express");
const router = express.Router();
const { availabilityCheck } = require("../controllers/incidentController");

router.get("/", availabilityCheck);

module.exports = router;
