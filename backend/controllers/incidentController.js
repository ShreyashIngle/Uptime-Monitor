const asyncHandler = require("express-async-handler");
const Monitor = require("../models/monitorModel");
const Incident = require("../models/incidentModel");
const testUrl = require("../utils/testUrl");

const availabilityCheck = asyncHandler(async (req, res) => {
  //Querying
  const monitors = await Monitor.find({ active: true })
    .select("url alerts userId")
    .populate({ path: "userId", select: "firstName" });

  for (const monitor of monitors) {
    await testUrl(monitor);
  }

  res.send("<div>availabilityCheck test</div>");
});

const getAllIncidents = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const allIncidents = await Incident.find({ user: userId }).populate({
    path: "monitorId",
    select: "url",
  });

  res.status(200).json(allIncidents);
});

module.exports = { availabilityCheck, getAllIncidents };
