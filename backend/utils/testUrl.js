const Incident = require("../models/incidentModel");
const Monitor = require("../models/monitorModel");
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
  //Creates an incident
  await Incident.create({
    monitor: monitorId,
    user: userId,
    cause: `Status ${statusCode}`,
  });

  //Updates the monitor availability
  await Monitor.updateOne({ _id: monitorId }, { availability: false, lastIncidentAt: Date.now() });

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
  const dynamicData = {
    monitorID,
    monitorURL,
    statusCode,
    createdAt: currentDate,
  };

  //Sending email alerts to all the assigned members
  for (const email of alertEmails) {
    await sendEmail(
      email,
      dynamicData,
      process.env.SENDGRID_MONITOR_ALERT_TEMPLATE
    );
  }
};

module.exports = testUrl;
