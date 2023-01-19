const puppeteer = require('puppeteer');


const checkForKeyword = async (keyword, url) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://chathuraperera.netlify.app/");
    const found = await page.evaluate(() => window.find("Developer"));
    await browser.close();
    return found;
}

const value = checkForKeyword();
console.log('value',value);