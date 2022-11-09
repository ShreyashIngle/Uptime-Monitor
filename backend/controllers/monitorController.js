const Monitor = require("../models/monitorModel");
const asyncHandler = require("express-async-handler");

//@desc   Add Monitor
//@route  POST /api/v1/monitor
//@access Private
const addMonitor = asyncHandler(async (req, res) => {
  const { url, userId } = req.body;

  if ((!url, !userId)) {
    return res.status(400).json({ message: "Provide all required fields" });
  }

  await Monitor.create(req.body);
  res.status(201).json({ message: "Monitor created successfully" });
});

module.exports = {
  addMonitor,
};
