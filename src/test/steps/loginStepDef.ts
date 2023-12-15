import { Given } from "@cucumber/cucumber";
import { chromium, Browser, Page } from 'playwright';

let browser: Browser;
let page: Page;

Given('user launch {string} browser', async function (string) {
  setTimeout(() => { 5000 }, 5000);
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  await page.waitForSelector('body'); // Wait for the page to load
});


Given('user login successfully', async function () {
  setTimeout(() => { 6000 }, 6000);

    // Ensure that the page is initialized before using it
    if (!page) {
        throw new Error('Page not initialized. Make sure to launch the browser first.');
    }

    await page.goto('https://www.google.com/');
    // The rest of your login steps...
});

Given('user close browser', async function () {
    if (browser) {
        await browser.close();
    }
});
