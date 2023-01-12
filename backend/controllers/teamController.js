const Team = require("../models/teamModel");
const User = require("../models/userModel");
const Notification = require("../models/notificationModel");
const Invitation = require("../models/invitationModel");
const asyncHandler = require("express-async-handler");

//@desc   Add new members
//@route  post /api/v1/member
//@access Private
const addMembers = asyncHandler(async (req, res) => {
  const { teamId, senderId, memberEmail, senderName, teamName } = req.body;

  //Verifying the user exists
  const foundUser = await User.findOne({ email: memberEmail });
  if (!foundUser) {
    return res.status(400).json({ message: "User does not exist" });
  }

  //Finding the related team
  const foundTeam = await Team.findOne({ _id: teamId }).populate({
    path: "admin",
    select: "email",
  });

  //Verifying the user is not already a member or an admin
  const isDuplicateEmail = foundTeam?.members.some(
    (user) => user.email === memberEmail
  );

  if (isDuplicateEmail || foundTeam.admin?.email === memberEmail) {
    return res.status(409).json({ message: "Member already exists" });
  }

  //Sending a notification to the invited member
  await Notification.create({
    sender: senderId,
    receiver: foundUser._id,
    message: `${senderName} invites you to join ${teamName}`,
  });

  //Sending the invitation to the member
  const invitation = await Invitation.create({
    sender: senderId,
    receiver: foundUser._id,
    teamId: teamId,
  })

  //Updating the team with the new member
  await Team.updateOne(
    { _id: teamId },
    { $push: { members: { email: memberEmail, invitation: invitation._id } } }
  );

  return res.status(200).json({ message: "Invitation sent successfully" });
});

//@desc   Get all team members 
//@route  get /api/v1/member
//@access Private
const getAllMembers = asyncHandler(async (req, res) => {
  const { teamId } = req.params;
  const allMembers = await Team.find({ _id: teamId }).select({
    members: 1,
    _id: 0,
  });
  res.status(200).json(allMembers);
});

//@desc   Delete a member along with the invitation
//@route  team /api/v1/member
//@access Private
const deleteMember = asyncHandler(async (req, res) => {
  const { teamId, memberId, invitation } = req.body;

  //Find and delete the team member
  await Team.findOne({ _id: teamId }).then(team => {
    team.members = team.members.filter(member => {
      member._id !== memberId
    })
    team.save();
  }
  )

  await Invitation.findByIdAndRemove(invitation);

  return res.status(200).json({ message: 'Member deleted successfully', memberId })
})

module.exports = { addMembers, getAllMembers, deleteMember };
