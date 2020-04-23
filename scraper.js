const puppeteer = require('puppeteer');

async function scrapeProd(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url)

    const [el] = await page.$x('//*[@id="landingImage"]');
    const src = await el.getProperty('scr');
    const srcTxt = await src.jsonValue();
}