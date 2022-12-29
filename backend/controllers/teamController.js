const Team = require("../models/teamModel");
const asyncHandler = require("express-async-handler");

const addMembers = asyncHandler(async (req, res) => {
  const { teamId, memberEmail } = req.body;
  await Team.updateOne(
    { _id: teamId },
    { $push: { members: { email: memberEmail } } }
  );
  return res.status(200).json({ message: "Member added successfully" });
});

module.exports = { addMembers };
