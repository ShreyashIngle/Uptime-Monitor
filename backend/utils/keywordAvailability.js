const Incident = require('../models/incidentModel');
const checkForKeyword = require('../services/puppeteer');

const keywordAvailability = async (keyword, url, monitorId, userId,) => {
    const keywordAvailable = await checkForKeyword(keyword, url);

    if (!keywordAvailable) {
        await Incident.create({})
    }
}