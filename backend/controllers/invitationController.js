const Invitation = require('../models/invitationModel');
const Team = require('../models/teamModel');
const asyncHandler = require('express-async-handler');

const invitationResponse = asyncHandler(async (req, res) => {
    const { email, invitationId, status } = req.body;
    await Invitation.findByIdAndUpdate({ _id: invitationId }, { status: status });

    await Team.updateOne({ 'members.email': email }, {
        $set: {
            'members.$.accepted': status === 'accepted' ? true : false
        }
    })

    res.status(200).json({ message: 'Invitation update' })
});


const getAllInvitations = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const allInvitations = await Invitation.find({ receiver: id })
    res.status(200).json(allInvitations);
});

module.exports = {
    getAllInvitations,
    invitationResponse
}