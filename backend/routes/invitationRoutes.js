const express = require('express');
const router = express.Router();

const { invitationResponse, getAllInvitations, resendInvitation } = require("../controllers/invitationController");
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, invitationResponse);
router.post('/resend', protect, resendInvitation);
router.get('/:id', protect, getAllInvitations);

module.exports = router;

