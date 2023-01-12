const express = require("express");
const { addMembers, getAllMembers, deleteMember } = require("../controllers/teamController");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, addMembers);
router.post("/delete", protect, deleteMember);
router.get("/:teamId", protect, getAllMembers);

module.exports = router;
