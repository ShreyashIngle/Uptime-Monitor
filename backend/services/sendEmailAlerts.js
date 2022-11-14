const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (recipients) => {
  //Send emails to all the recipients
  for (const recipient of recipients) {
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
      templateId:"d-1fd9a750ea9846b39c81bbbe6af35214",
      dynamicTemplateData:{
        recipientName:"",
        monitorID:"",
        monitorURL:"",
        statusCode:"",
        createdAt:"",
        
      }
    });

    const response = await sgMail.send(msg).catch((error) => {
      console.log(error);
    });

    console.log(response[0].statusCode);
    console.log(response[0].headers);
  }
};

module.exports = sendEmail;
