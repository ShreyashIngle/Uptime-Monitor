const express = require("express");
const router = express.Router();

//Controllers
const {
  getAllIncidents,
  resolveIncident,
  acknowledgeIncident
} = require("../controllers/incidentController");

//Middleware
const { protect } = require("../middleware/authMiddleware");

//Get all the incidents of a user
router.get("/all/:userId", protect, getAllIncidents);
router.patch("/resolve/:incidentId", protect, resolveIncident);
router.patch("/acknowledge/:incidentId", protect, acknowledgeIncident);

module.exports = router;
