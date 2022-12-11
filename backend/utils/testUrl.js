const Incident = require("../models/incidentModel");
const axios = require("axios");
const sendEmail = require("./sendEmail");

const testUrl = async (monitor) => {
  await axios.get(monitor.url).catch(async (error) => {
    //Checks if an incident is already created
    const existingIncident = await Incident.findOne({ monitorId: monitor._id });

    //Creates an incident
    if (!existingIncident) {
      await Incident.create({
        monitorId: monitor._id,
        statusCode: error.response.status,
      });

      console.log("Incident created");
      const currentDate = new Date().toJSON().slice(0, 10);

      const dynamicData = {
        monitorID: monitor?._id,
        monitorURL: monitor?.url,
        statusCode: error.response.status,
        createdAt: currentDate,
      };

      //Sending email alerts
      console.log('monitor' , monitor);
      for (const email of monitor.alerts.emails) {
        await sendEmail(
          email,
          dynamicData,
          process.env.SENDGRID_MONITOR_ALERT_TEMPLATE
        );
      }
    }
  });
};

module.exports = testUrl;
