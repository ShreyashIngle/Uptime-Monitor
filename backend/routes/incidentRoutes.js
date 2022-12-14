const express = require("express");
const router = express.Router();

//Controllers
const {
  getAllIncidents,
  resolveIncident
} = require("../controllers/incidentController");

//Middleware
const { protect } = require("../middleware/authMiddleware");

//Get all the incidents of a user
router.get("/all/:userId", protect, getAllIncidents);
router.patch("/:incidentId", protect, resolveIncident);

module.exports = router;
