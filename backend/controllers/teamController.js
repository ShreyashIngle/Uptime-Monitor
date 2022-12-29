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
  await Team.updateOne(
    { _id: teamId },
    { $push: { members: { email: memberEmail } } }
  );

  await Notification.create({
    sender: senderId,
    receiver: foundUser._id,
    message: `${senderName} invites you to join ${teamId}`,
  });

  return res.status(200).json({ message: "Invitation sent successfully" });
});

module.exports = { addMembers };
