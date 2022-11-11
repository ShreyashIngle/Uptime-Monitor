const History = require("../models/downtimeModel");
const axios = require("axios");

const fetchUrlRecursively = async (sites) => {
  sites?.forEach(async (site) => {
    await axios.get(site.url).catch(async (error) => {
      await History.create({
        monitorId: site._id,
        statusCode: res.statusCode,
      });
      console.log(error);
    });
  });
};

module.exports = fetchUrlRecursively;
