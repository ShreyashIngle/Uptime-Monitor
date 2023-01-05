const Notification = require("../models/notificationModel");
const asyncHandler = require("express-async-handler");

const getAllNotifications = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const notifications = await Notification.find({ receiver: userId });
  res.status(200).json(notifications);
});

module.exports = {
  getAllNotifications,
};
