const express = require("express");
const { addMembers, getAllMembers, deleteMember } = require("../controllers/teamController");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, addMembers);
router.get("/:teamId", protect, getAllMembers);
router.delete("/", protect, deleteMember);

module.exports = router;
