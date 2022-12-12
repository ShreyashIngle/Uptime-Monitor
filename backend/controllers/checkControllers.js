const asyncHandler = require('express-async-handler');
const Monitor = require('../models/monitorModel');
const testUrl = require("../utils/testUrl");

const availabilityCheck = asyncHandler(async (req, res) => {
  //Querying
  const monitors = await Monitor.find({ active: true })
    .select("url alerts userId")
    .populate({ path: "userId", select: "firstName" });

  for (const monitor of monitors) {
    await testUrl(monitor);
  }

  res.status(200).json({ message: "success" });
});

module.exports = { availabilityCheck };
