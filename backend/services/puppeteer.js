const Incident = require('../models/incidentModel');
const axios = require('axios');
const SSLCheck = require('../models/sslCheckModel')

const BASE_URL = 'http://localhost:4000/puppeteer/';

const checkSSLDetails = async (url, notifyExpiration, monitorId, userId) => {
    try {
        //Fetching SSL details
        const response = await axios.post(`${BASE_URL}/ssl-check`, { url: url })

        //Getting timestamps in milliseconds
        response.data.validFrom = new Date(response.data.validFrom * 1000);
        response.data.validTo = new Date(response.data.validTo * 1000);

        //Calculating the days count left for expiration 
        const millisecondsPerDay = 24 * 60 * 60 * 1000;
        const today = Date.now();
        const differenceInMilliseconds = response.data.validTo - today;
        const differenceInDays = Math.floor(differenceInMilliseconds / millisecondsPerDay);

        //creates an incident if the expiration date is closer than the given time period
        if (differenceInDays <= parseInt(notifyExpiration)) {
            await Incident.create({
                monitor: monitorId,
                user: userId,
                cause: `SSL certificate expiries in ${differenceInDays}`
            })
        }

        //creates a SSL check
        await SSLCheck.create({
            ...response.data,
            monitor: monitorId,
            notifyExpiration: notifyExpiration
        })

        Promise.resolve({});
    } catch (error) {
        Promise.reject(error);
    }
}

module.exports = {
    checkSSLDetails
}


