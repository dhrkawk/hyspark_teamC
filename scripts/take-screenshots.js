const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport to desktop size
  await page.setViewport({ width: 1280, height: 800 });

  try {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

    // Hero Screenshot
    await page.screenshot({ path: 'public/assets/screenshots/hero.png' });
    console.log('Taken hero.png');

    // Scroll to Features/Problem
    await page.evaluate(() => document.querySelector('#about').scrollIntoView());
    await new Promise(r => setTimeout(r, 500)); // Wait for scroll
    await page.screenshot({ path: 'public/assets/screenshots/problem.png' });
    console.log('Taken problem.png');

    // Scroll to Mockup Flow
    await page.evaluate(() => document.querySelector('.mockup-section').scrollIntoView());
    await new Promise(r => setTimeout(r, 500));
    await page.screenshot({ path: 'public/assets/screenshots/mockup.png' });
    console.log('Taken mockup.png');

    // Scroll to Contact
    await page.evaluate(() => document.querySelector('#contact').scrollIntoView());
    await new Promise(r => setTimeout(r, 500));
    await page.screenshot({ path: 'public/assets/screenshots/contact.png' });
    console.log('Taken contact.png');

  } catch (e) {
    console.error('Error taking screenshots:', e);
  } finally {
    await browser.close();
  }
})();
