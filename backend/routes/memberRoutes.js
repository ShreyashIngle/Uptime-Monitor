const express = require("express");
const { addMembers, getAllMembers } = require("../controllers/teamController");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, addMembers);
router.get("/:teamId", protect, getAllMembers);

module.exports = router;
