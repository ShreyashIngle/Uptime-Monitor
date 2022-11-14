const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (monitor, statusCode) => {
  //Send emails to all the recipients
  for (const recipient of monitor.alerts.emails) {
    const msg = {
      to: recipient,
      from: "chathuraperera007@gamil.com",
      subject: "Attention needed",
    };
    sgMail.send({
      to: {
        email: recipient,
      },
      from: {
        email: "chathuraperera007@gmail.com",
        name: "Uptime Monitor",
      },
      templateId: "d-1fd9a750ea9846b39c81bbbe6af35214",
      dynamicTemplateData: {
        monitorID: monitor._id,
        monitorURL: monitor.url,
        statusCode: statusCode,
        createdAt: new Date().toJSON().slice(0, 10),
      },
    });

    const response = await sgMail.send(msg).catch((error) => {
      console.log(error);
    });
    console.log("email response", response);
  }
};

module.exports = sendEmail;
