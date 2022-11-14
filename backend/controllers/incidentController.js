const asyncHandler = require("express-async-handler");
const Monitor = require("../models/monitorModel");
const fetchUrl = require("../services/fetchUrl");

const availabilityCheck = asyncHandler(async (req, res) => {
  const monitors = await Monitor.find({ monitored: true })
    .select("url alerts userId")
    .populate({ path: "userId", select: "firstName" });

  for (const monitor of monitors) {
    await fetchUrl(monitor);
  }

  res.send("<div>availabilityCheck test</div>");
});

module.exports = { availabilityCheck };
