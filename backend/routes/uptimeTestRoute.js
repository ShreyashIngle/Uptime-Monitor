const express = require("express");
const router = express.Router();
const { availabilityCheck } = require("../controllers/upTimeTestController");

router.get("/", availabilityCheck);

module.exports = router;
