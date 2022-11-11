const axios = require("axios");
const asyncHandler = require("express-async-handler");
const Monitor = require("../models/monitorModel");
const History = require("../models/downtimeModel");
const fetchUrlRecursively = require("../services/fetchUrlRecursively");

const availabilityCheck = asyncHandler(async (req, res) => {
  console.log("availabilityCheck invoked");
  const sites = await Monitor.find({}).select("url");
  console.log("sites", sites);
  await addHistoryLog(sites);

  res.status(200).json(sites);
});

module.exports = { availabilityCheck };
