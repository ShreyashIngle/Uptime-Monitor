const asyncHandler = require("express-async-handler");
const Incident = require("../models/incidentModel");

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

//@desc   Delete an incident
//@route  DELETE /api/v1/incident
//@access Private
const deleteIncident = asyncHandler(async (req, res) => {
  const { incidentId } = req.params;
  const deletedIncident = await Incident.findOneAndDelete({ _id: incidentId });
  res.status(200).json(deletedIncident);
});

module.exports = {
  getAllIncidents,
  resolveIncident,
  acknowledgeIncident,
  deleteIncident,
};
