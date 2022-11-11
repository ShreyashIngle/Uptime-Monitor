const Downtime = require("../models/downtimeModel");
const axios = require("axios");

const fetchUrl = async (sites) => {
  sites.forEach(async(site) => {
    await axios.get(site.url).catch(async (error) => {
      await Downtime.create({
        monitorId: site._id,
        statusCode: error.response.status,
      });
      console.log("history log created");
    });
  })
};

module.exports = fetchUrl;
