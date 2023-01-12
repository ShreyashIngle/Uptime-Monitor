const Invitation = require('../models/invitationModel');
const Team = require('../models/teamModel');
const asyncHandler = require('express-async-handler');


//@desc   Respond to the invitation
//@route  post /api/v1/invitation
//@access Private
const invitationResponse = asyncHandler(async (req, res) => {
    const { email, invitationId, status } = req.body;
    await Invitation.findByIdAndUpdate({ _id: invitationId }, { status: status });

    //Updating the invitation status
    await Team.updateOne({ 'members.email': email }, {
        $set: { 'members.$.status': status }
    })

    await Invitation.findByIdAndDelete(invitationId);

    res.status(200).json({ message: 'Invitation update' })
});

//@desc   resend rejected invitations
//@route  post /api/v1/member
//@access Private
const resendInvitation = asyncHandler(async (req, res) => {
    const { sender, receiver, teamId, memberId } = req.body;
    const newInvitation = { sender, receiver, teamId };

    const invitation = await Invitation.create(newInvitation);

    await Team.updateOne({ 'members._id': memberId }, {
        $set: { 'members.$.invitation': invitation._id }
    })

    res.status(200).json({ message: 'Invitation resent successfully' });
})

//@desc   Get all invitations
//@route  post /api/v1/invitation
//@access Private
const getAllInvitations = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const allInvitations = await Invitation.find({ receiver: id }).populate({ path: 'sender', select: "firstName" });
    res.status(200).json(allInvitations);
});

module.exports = {
    getAllInvitations,
    invitationResponse,
    resendInvitation
}