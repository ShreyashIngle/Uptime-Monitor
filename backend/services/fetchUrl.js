const Incident = require("../models/incidentModel");
const axios = require("axios");
const sendEmail = require("./sendEmailAlerts");

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

      //Sending email alerts
      await sendEmail(monitor, error.response.status);
    }
    console.log("history log created");
  });
};

module.exports = fetchUrl;
