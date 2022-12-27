const asyncHandler = require("express-async-handler");
const Monitor = require("../models/monitorModel");
const Incident = require("../models/incidentModel");
const testUrl = require("../utils/testUrl");

//@desc   URL availability test 
//@route  GET /api/v1/incident
//@access Private
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

//@desc   Get all incident of a user 
//@route  GET /api/v1/incident
//@access Private
const getAllIncidents = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const allIncidents = await Incident.find({ user: userId }).populate({
    path: "monitor",
    select: "url",
  });

  res.status(200).json(allIncidents);
});

//@desc   Resolve an incident 
//@route  PATCH /api/v1/incident/resolve
//@access Private
const resolveIncident = asyncHandler(async (req, res) => {
  const { incidentId } = req.params;
  const updatedIncident = await Incident.findOneAndUpdate(
    { _id: incidentId },
    { resolved: true },
    { new: true }
  );
  res.status(200).json(updatedIncident);
});

//@desc   Acknowledge an incident 
//@route  PATCH /api/v1/incident/acknowledge
//@access Private
const acknowledgeIncident = asyncHandler(async (req, res) => {
  const { incidentId } = req.params;
  const updatedIncident = await Incident.findOneAndUpdate(
    { _id: incidentId },
    { acknowledged: true },
    { new: true }
  );
  res.status(200).json(updatedIncident);
});

module.exports = {
  resolveIncident,
  acknowledgeIncident,
  availabilityCheck,
  getAllIncidents,
};
