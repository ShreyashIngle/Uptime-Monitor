const Notification = require("../models/notificationModel");
const asyncHandler = require("express-async-handler");

//@desc   get notifications
//@route  get /api/v1/notification
//@access Private
const getAllNotifications = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const notifications = await Notification.find({ receiver: userId });
  res.status(200).json(notifications);
});

//@desc   Mark all notifications as read
//@route  post /api/v1/notification
//@access Private
const batchMarkAsRead = asyncHandler(async (req, res) => {
  const { notificationIds } = req.body;

  await Notification.updateMany({ _id: { $in: notificationIds } }, { read: true });
  res.status(200).json({ message: 'All messages read' });
})

module.exports = {
  batchMarkAsRead,
  getAllNotifications,
};
