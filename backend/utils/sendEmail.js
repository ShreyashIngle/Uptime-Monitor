const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (
  recipient,
  dynamicData,
  templateId,) => {
    console.log('recipient',recipient);
    console.log('dynamicData',dynamicData);
    console.log('templateId',templateId);
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
      templateId,
      dynamicTemplateData: dynamicData,
    })
    .then(() => {
      console.log("Email was sent");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = sendEmail;
