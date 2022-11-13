const axios = require("axios");
const asyncHandler = require("express-async-handler");
const Monitor = require("../models/monitorModel");
const fetchUrl = require("../services/fetchUrl");
const Downtime = require("../models/downtimeModel");

const availabilityCheck = asyncHandler(async (req, res) => {
  console.log("availabilityCheck invoked");
  const sites = await Monitor.find({}).select("url");
  for (const site of sites) {
    await fetchUrl(site);
  }
  console.log("sites", sites);
  res.send("<div>availabilityCheck test</div>");
});

module.exports = { availabilityCheck };
