const Monitor = require("../models/monitorModel");
const Incident = require("../models/incidentModel");
const SSLCheck = require("../models/sslCheckModel");
const asyncHandler = require("express-async-handler");
const testUrl = require("../utils/testUrl");
const { checkSSLDetails } = require("../services/puppeteer");

function isValidURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
    "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
    "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
    "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}

//@desc   Get Monitor
//@route  GET /api/v1/monitor/:id
//@access Private
const getMonitor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const monitor = await Monitor.findOne({ _id: id });
  res.status(200).json(monitor);
});

//@desc   Get All Monitor
//@route  GET /api/v1/monitor
//@access Private
const getUserMonitors = asyncHandler(async (req, res) => {
  const allMonitors = await Monitor.find({ user: req.user._id });
  res.status(200).json(allMonitors);
});

//@desc   Delete Monitor
//@route  DELETE /api/v1/monitor/:id
//@access Private
const deleteMonitor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deletedMonitor = await Monitor.findOneAndDelete({ _id: id });
  await Incident.deleteMany({ monitor: id });
  res
    .status(200)
    .json({ message: "Monitor deleted successfully", id: deletedMonitor._id });
});

//@desc   Add Monitor
//@route  POST /api/v1/monitor
//@access Private
const addMonitor = asyncHandler(async (req, res) => {
  const { url, user, team, alertsTriggeredOn, notifyExpiration } = req.body;

  if (!url || !user || !team) {
    return res.status(400).json({ message: "Provide all required fields" });
  }

  if (!isValidURL(url)) {
    return res.status(400).json({ message: "Invalid URL" });
  }

  //Looking for a duplicate url
  const existingMonitor = await Monitor.find({ url, user });

  /*
   Checks if a monitor with the same URL is 
   already created for the same purpose
  */
  if (
    existingMonitor.length > 0 &&
    existingMonitor.some(
      (monitor) => monitor.alertsTriggeredOn === alertsTriggeredOn
    )
  ) {
    return res.status(409).json({ message: "Duplicate url" });
  }

  //Creates the new monitor
  const createdMonitor = await Monitor.create(req.body);

  //If the monitor is for monitoring the site availability
  if (createdMonitor.alertsTriggeredOn === "1") await testUrl(createdMonitor);

  //If the monitor is for monitoring the SSL expiration
  if (alertsTriggeredOn === "3") {

    const secDetails = await checkSSLDetails(url, notifyExpiration, createdMonitor._id, user);

  }

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
  getMonitor,
  getUserMonitors,
  deleteMonitor,
  addMonitor,
  updateMonitor,
};
