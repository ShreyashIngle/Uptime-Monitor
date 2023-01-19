const puppeteer = require('puppeteer');


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
}
