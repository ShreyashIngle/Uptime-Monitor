const History = require("../models/historyModel");
const axios = require("axios");

const addHistoryLog = async (sites) => {
  sites?.forEach(async (site) => {
    await axios
      .get(site.url)
      .then(async (res) => {
        await History.create({
          monitorId: site._id,
          statusCode: res.statusCode,
        });
        console.log("history log created");
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

module.exports = addHistoryLog;
