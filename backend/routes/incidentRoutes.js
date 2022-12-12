const express = require("express");
const router = express.Router();

//Controllers
const { getAllIncidents } = require("../controllers/incidentController");

//Middleware
const { protect } = require("../middleware/authMiddleware");


//Get all the incidents of a user
router.get("/all/:userId", protect, getAllIncidents);

module.exports = router;
