const express = require("express");
const { addMembers } = require("../controllers/teamController");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, addMembers);

module.exports = router;
