const Incident = require("../models/incidentModel");
const axios = require("axios");
const sendEmail = require("./sendEmailAlerts");

const fetchUrl = async (site) => {
  await axios.get(site.url).catch(async (error) => {
    //Checks if an incident is already created
    const existingIncident = await Incident.findOne({ monitorId: site._id });

    //Create an incident
    if (!existingIncident) {
      await Incident.create({
        monitorId: site._id,
        statusCode: error.response.status,
      });

      //Sending email alerts
      await sendEmail(site.alerts.emails);
    }
    console.log("history log created");
  });
};

module.exports = fetchUrl;
