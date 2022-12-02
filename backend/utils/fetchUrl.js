const Incident = require("../models/incidentModel");
const axios = require("axios");
const sendEmail = require("./sendEmail");

const fetchUrl = async (monitor) => {
  await axios.get(monitor.url).catch(async (error) => {
    //Checks if an incident is already created
    const existingIncident = await Incident.findOne({ monitorId: monitor._id });

    //Create an incident
    if (!existingIncident) {
      await Incident.create({
        monitorId: monitor._id,
        statusCode: error.response.status,
      });

      const currentDate = new Date().toJSON().slice(0, 10);

      const dynamicData = {
        monitorID: monitor?._id,
        monitorURL: monitor?.url,
        statusCode: error.response.status,
        createdAt: currentDate,
      };
      
      //Sending email alerts
      for (const email of alerts.emails) {
        await sendEmail(email, dynamicData);
      }
    }
    console.log("history log created");
  });
};

module.exports = fetchUrl;
