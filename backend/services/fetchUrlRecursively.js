const Downtime = require("../models/downtimeModel");
const axios = require("axios");

const fetchUrlRecursively = async (sites) => {
  sites?.forEach(async (site) => {
    await axios.get(site.url).catch(async (error) => {
      // await Downtime.create({
      //   monitorId: site._id,
      //   statusCode: res.statusCode,
      // });
      console.log(error);
      console.log("Website is down");
    });
  });
};

module.exports = fetchUrlRecursively;
