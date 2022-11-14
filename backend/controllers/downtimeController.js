const axios = require("axios");
const asyncHandler = require("express-async-handler");
const Monitor = require("../models/monitorModel");
const fetchUrl = require("../services/fetchUrl");
const Downtime = require("../models/downtimeModel");

const availabilityCheck = asyncHandler(async (req, res) => {
  const sites = await Monitor.find({}).select("url");
  
  for (const site of sites) {
    await fetchUrl(site);
  }
  
  res.send("<div>availabilityCheck test</div>");
});

module.exports = { availabilityCheck };
