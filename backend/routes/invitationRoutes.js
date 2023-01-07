const express = require('express');
const router = express.Router();

const { invitationResponse, getAllInvitations } = require("../controllers/invitationController");
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, invitationResponse);
router.get('/:id', protect, getAllInvitations);

module.exports = router;

