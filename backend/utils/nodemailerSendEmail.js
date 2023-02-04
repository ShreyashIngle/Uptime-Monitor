const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');
const handlebars = require('handlebars');
require("dotenv").config();


const sendEmail = async () => {
    console.log('process.env.GMAIL_PASSWORD',process.env.GMAIL_PASSWORD);
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            tls: {
                rejectUnauthorized: false
            },
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASSWORD,
            },
            logger: true
        });

        const filePath = path.join(__dirname, '../views/invitation.html');
        const source = fs.readFileSync(filePath, 'utf-8').toString();
        const template = handlebars.compile(source);
        const replacements = {
            username: "Darth Vader"
        };

        const htmlToSend = template(replacements);
        
        await transporter.sendMail({
            from: 'chathuraperera007@gmail.com',
            to: 'chathura@adroitlogic.com',
            subject: 'Hello',
            html: htmlToSend,
            text: 'Hyy there'
        })

    } catch (error) {
        console.log('error', error);
    }

}


module.exports = {
    sendEmail
}