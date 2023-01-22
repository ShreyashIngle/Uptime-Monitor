const puppeteer = require('puppeteer-core');
const Incident = require('../models/incidentModel');



const checkForKeyword = async (keyword, url) => {
    try {
        //creating the browser instance
        const browser = await puppeteer.launch();

        //creating a new page
        const page = await browser.newPage();

        //navigate to the desired URL
        await page.goto(url);

        //check to see if the keyword exists on the page
        const found = await page.evaluate(() => window.find(keyword));

        //closes Chromium and all of its pages 
        await browser.close();

        return Promise.resolve(found);
    } catch (error) {
        Promise.reject(error);
    }
};

const getSecurityDetails = async (url) => {
    try {
        //creating the browser instance
        const browser = await puppeteer.launch();

        //creating a new page
        const page = await browser.newPage();

        //navigate to the desired URL
        const response = await page.goto(url, { waitUntil: 'networkidle0' });

        //gets the security details
        const securityDetails = await response.securityDetails();

        console.log(securityDetails.protocol())
        console.log(securityDetails.subjectName())
        console.log(securityDetails.validFrom())
        console.log(securityDetails.validTo())

        
        const validFrom = new Date(securityDetails.validFrom() * 1000);
        const validTo = new Date(securityDetails.validTo() * 1000);

        //closes Chromium and all of its pages 
        await browser.close();

    } catch (error) {
        Promise.reject(error);
    }
}

module.exports = {
    checkForKeyword,
    getSecurityDetails
}


