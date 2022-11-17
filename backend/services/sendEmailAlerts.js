const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (monitor, statusCode) => {
  //Send emails to all the recipients

  const currentDate = new Date().toJSON().slice(0, 10);
  for (const recipient of monitor.alerts.emails) {
    sgMail
      .send({
        to: {
          email: recipient,
        },
        from: {
          email: "chathuraperera007@gmail.com",
          name: "Uptime Monitor",
        },
        subject: "Monitor down",
        templateId: "d-1fd9a750ea9846b39c81bbbe6af35214",
        dynamicTemplateData: {
          monitorID: monitor._id,
          monitorURL: monitor.url,
          statusCode: statusCode,
          createdAt: currentDate,
        },
      })
      .then(() => {
        console.log("Email was sent");
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

module.exports = sendEmail;
