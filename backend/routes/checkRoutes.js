const express = require("express");
const router = express.Router();

//Controllers
const { availabilityCheck } = require("../controllers/checkControllers");

router.get("/availability", availabilityCheck);

module.exports = router;
