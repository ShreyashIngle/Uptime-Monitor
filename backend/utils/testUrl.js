const Incident = require("../models/incidentModel");
const axios = require("axios");
const sendEmail = require("./sendEmail");

const testUrl = async (monitor) => {
  await axios.get(monitor.url).catch(async (error) => {
    //Checks if an incident is already created
    const existingIncident = await Incident.findOne({ monitorId: monitor._id });

    //Creates an incident
    if (!existingIncident) {
      await createAnIncident(monitor._id, monitor.user, error.response.status);
      await sendIncidentAlert(
        monitor._id,
        monitor?.url,
        error.response.status,
        monitor.alertEmails
      );
    }
  });
};

//Creates an incident
const createAnIncident = async (monitorId, userId, statusCode) => {
  await Incident.create({
    monitorId: monitorId,
    user: userId,
    statusCode: statusCode,
  });
  console.log("Incident created");
};

//Send email alerts for given assignees
const sendIncidentAlert = async (
  monitorID,
  monitorURL,
  statusCode,
  alertEmails
) => {
  const currentDate = new Date().toJSON().slice(0, 10);

  //Setting up data for the email template
  const dynamicData = { monitorID, monitorURL, statusCode,createdAt: currentDate};

  for (const email of alertEmails) {
    await sendEmail(
      email,
      dynamicData,
      process.env.SENDGRID_MONITOR_ALERT_TEMPLATE
    );
  }

  console.log("Emails sent");
};

module.exports = testUrl;
