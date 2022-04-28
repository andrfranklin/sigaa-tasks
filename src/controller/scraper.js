import express from 'express';
import puppeteer from 'puppeteer';

const scraper = express.Router();

scraper.get('/', async (req, res) => {
    //only for development
    req.body = {
        username: '',
        password: '',
    }

    // open browser
    const browser = await puppeteer.launch({
        headless: false,
    });

    // go to login page and login into account
    const page = await browser.newPage();
    await page.goto('https://sigaa.ufrn.br/sigaa/');
    await page.type('#username', req.body.username);
    await page.type('#password', req.body.password);
    await page.click('.btn-login');

    // wait for page to load
    await page.waitForSelector('#avaliacao-portal');

    // get list of tasks and return as json
    const json = await page.evaluate(() => {
        let table = document.querySelectorAll('#avaliacao-portal table tr');
        let tableAsArray = [...table];
        tableAsArray = tableAsArray.slice(2, tableAsArray.length);

        tableAsArray = tableAsArray.filter(tg => !tg.querySelectorAll('font').length);

        let tableAsJson = {};
        tableAsArray.forEach(tg => {
            let title = tg.lastElementChild.innerText.split('\n')[1];
            let date = tg.querySelector('td').nextElementSibling.innerText.split('(')[0];
            let subject = tg.lastElementChild.innerText.split('\n')[0];

            tableAsJson[title] = {date, subject};
        });

        return tableAsJson;
    });
    
    page.click('#info-sistema > div > span.sair-sistema > a');
    await page.waitForNavigation();

    // close browser
    browser.close();

    // return json
    return res.json(json);

});

export { scraper };
