const Invitation = require('../models/invitationModel');
const Team = require('../models/teamModel');
const asyncHandler = require('express-async-handler');

const invitationResponse = asyncHandler(async (req, res) => {
    const { email, invitationId, status } = req.body;
    const updatedInvitation = await Invitation.findByIdAndUpdate({ _id: invitationId }, { status: status });
    console.log('updatedInvitation', updatedInvitation);
    await Team.updateOne({ _id: updatedInvitation.teamId }, {
        $set: {
            'members.$.accepted': status === 'accepted' ? true : false
        }
    })

    res.status(200).json({ message: 'Invitation update' })
})

module.exports = {
    invitationResponse
}