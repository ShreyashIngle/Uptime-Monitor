const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (
  recipient,
  dynamicData,
  verificationURL
) => {


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
      templateId: templateID,
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
