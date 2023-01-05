const express = require('express');
const router = express.Router();

const { invitationResponse } = require("../controllers/invitationController");
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, invitationResponse);

module.exports = router;

