const Team = require("../models/teamModel");
const User = require("../models/userModel");
const Notification = require("../models/notificationModel");
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

  const isDuplicateEmail = foundTeam?.members.some(
    (user) => user.email === memberEmail
  );

  if (isDuplicateEmail || foundTeam.admin?.email === memberEmail) {
    return res.status(409).json({ message: "Member already exists" });
  }

  await Team.updateOne(
    { _id: teamId },
    { $push: { members: { email: memberEmail } } }
  );

  await Notification.create({
    sender: senderId,
    receiver: foundUser._id,
    message: `${senderName} invites you to join ${teamName}`,
  });

  return res.status(200).json({ message: "Invitation sent successfully" });
});

module.exports = { addMembers };
