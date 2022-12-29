const Notification = require("../models/notificationModel");
const asyncHandler = require("express-async-handler");

const createNotification = asyncHandler(async (req, res) => {
  await Notification.create(req.body);
  res.status(201).json({ message: "Notification sent" });
});

module.exports = {
  createNotification,
};
