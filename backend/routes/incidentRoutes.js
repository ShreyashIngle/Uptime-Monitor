const express = require("express");
const router = express.Router();

//Controllers
const {
  availabilityCheck,
  getAllIncidents,
} = require("../controllers/incidentController");

//Middleware
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, availabilityCheck);
router.get("/all", protect, getAllIncidents);

module.exports = router;
