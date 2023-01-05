const Team = require("../models/teamModel");
const User = require("../models/userModel");
const Notification = require("../models/notificationModel");
const Invitation = require("../models/invitationModel");
const asyncHandler = require("express-async-handler");

const addMembers = asyncHandler(async (req, res) => {
  const { teamId, senderId, memberEmail, senderName, teamName } = req.body;
  const foundUser = await User.findOne({ email: memberEmail });
  if (!foundUser) {
    return res.status(400).json({ message: "User does not exist" });
  }
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

  //Updating the team with the new member
  await Team.updateOne(
    { _id: teamId },
    { $push: { members: { email: memberEmail } } }
  );

  //Sending a notification to the member
  await Notification.create({
    sender: senderId,
    receiver: foundUser._id,
    message: `${senderName} invites you to join ${teamName}`,
  });

  //Sending the invitation to the member
  await Invitation.create({
    sender: senderId,
    receiver: foundUser._id,
    teamId: teamId,
  })

  return res.status(200).json({ message: "Invitation sent successfully" });
});

const getAllMembers = asyncHandler(async (req, res) => {
  const { teamId } = req.params;
  const allMembers = await Team.find({ _id: teamId }).select({
    members: 1,
    _id: 0,
  });
  res.status(200).json(allMembers);
});

module.exports = { addMembers, getAllMembers };
