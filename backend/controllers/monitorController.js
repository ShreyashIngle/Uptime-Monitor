const Monitor = require("../models/monitorModel");
const asyncHandler = require("express-async-handler");

//@desc   Add Monitor
//@route  POST /api/v1/monitor
//@access Private
const addMonitor = asyncHandler(async (req, res) => {
  res.status(200).json(req.body);
});

module.exports = {
  addMonitor,
};
