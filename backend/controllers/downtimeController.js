const axios = require("axios");
const asyncHandler = require("express-async-handler");
const Monitor = require("../models/monitorModel");
const fetchUrl = require("../services/fetchUrl");
const Downtime = require("../models/downtimeModel");

const availabilityCheck = asyncHandler(async (req, res) => {
  console.log("availabilityCheck invoked");
  const sites = await Monitor.find({}).select("url");
  sites.forEach((site) => fetchUrl(site));

  await Downtime.create({
    monitorId: 1978634947967,
    statusCode: 400,
  });

  res.status(200).json(sites);
});

module.exports = { availabilityCheck };
