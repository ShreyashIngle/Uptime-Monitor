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

//@desc   Update Monitor
//@route  PATCH /api/v1/monitor/:id
//@access Private
const updateMonitor = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const updatedMonitor = await Monitor.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!updatedMonitor) {
    return res.status(400).json({ message: "Monitor doesn't exists" });
  } else {
    return res.status(200).json({ message: "Monitor updated successfully" });
  }
});

module.exports = {
  addMonitor,
  updateMonitor,
};
