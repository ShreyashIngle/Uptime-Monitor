const Incident = require('../models/incidentModel');
const axios = require('axios');
const SSLCheck = require('../models/sslCheckModel')

const BASE_URL = 'http://localhost:4000/puppeteer/';

// const checkForKeyword = async (keyword, url) => {
//     try {
//         //creating the browser instance
//         // console.log()
//         const browser = await chromium.launch();

//         //creating a new page
//         const page = await browser.newPage();

//         //navigate to the desired URL
//         await page.goto(url);

//         //check to see if the keyword exists on the page

//         // const found = await page.evaluate(() => window.find(keyword));

//         const found = page.locator(`text=${keyword}`).first();
//         console.log('found', found);
//         //closes Chromium and all of its pages 
//         await browser.close();

//         return Promise.resolve(found);
//     } catch (error) {
//         Promise.reject(error);
//     }
// };

// checkForKeyword('xxxxx', 'https://chathuraperera.netlify.app/');

const checkSSLDetails = async (url, notifyExpiration, monitorId) => {
    try {
        const response = await axios.post(`${BASE_URL}/ssl-check`, { url: url })

        response.data.validFrom = new Date(response.data.validFrom * 1000);
        response.data.validTo = new Date(response.data.validTo * 1000);

        const millisecondsPerDay = 24 * 60 * 60 * 1000;
        const today = Date.now();
        const differenceInMilliseconds = Math.abs(response.data.validTo - today);
        const differenceInDays = Math.floor(differenceInMilliseconds / millisecondsPerDay);
        console.log('differenceInDays', differenceInDays);

        // await SSLCheck.create({
        //     ...response.data,
        //     monitor: monitorId,
        //     notifyExpiration: notifyExpiration
        // })

        Promise.resolve(response.data);
    } catch (error) {
        Promise.reject(error);
    }
}
checkSSLDetails("https://www.amazon.com/", "", "");

module.exports = {
    // checkForKeyword,
    checkSSLDetails
}


