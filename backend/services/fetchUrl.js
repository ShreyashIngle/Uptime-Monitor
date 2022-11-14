const Incident = require("../models/incidentModel");
const axios = require("axios");

const fetchUrl = async (site) => {
  await axios.get(site.url).catch(async (error) => {
    await Incident.create({
      monitorId: site._id,
      statusCode: error.response.status,
    });
    console.log("history log created");
  });
};

module.exports = fetchUrl;
