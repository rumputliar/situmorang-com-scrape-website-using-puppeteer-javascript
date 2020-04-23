const puppeteer = require('puppeteer');

function scrapeProd(url) {
    const browser = puppeteer.launch();
    const page = browser.newPage();
    page.goto(url)

    const [el] = page.$x('//*[@id="landingImage"]');
    const src = el.getProperty('scr');
    const srcTxt = src.jsonValue();

    console.log({srcTxt});
    browser.close();
}
scrapeProd('https://www.amazon.com/QOLIXM-Protector-Charging-Extension-Smartphone/dp/B07MCH9VDJ/ref=gbps_img_m-9_475e_b5218b5e?smid=A16VSS7IKFBC70&pf_rd_p=5d86def2-ec10-4364-9008-8fbccf30475e&pf_rd_s=merchandised-search-9&pf_rd_t=101&pf_rd_i=15529609011&pf_rd_m=ATVPDKIKX0DER&pf_rd_r=Q4WCY3TVZJ5BA0JMABVP');