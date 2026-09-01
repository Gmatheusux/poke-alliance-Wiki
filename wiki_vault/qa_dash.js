const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('file:///C:/Users/Gabe/Documents/Poke alliance/dashboard/index.html');
  await page.waitForTimeout(2500);
  const bodyText = await page.evaluate(() => document.body.innerText.substring(0, 300));
  console.log('BODY:', bodyText);
  await page.screenshot({ path: 'C:/Users/Gabe/Documents/Poke alliance/dashboard/screenshot_home.png' });
  await page.click('text=Meta PvE');
  await page.waitForTimeout(600);
  await page.screenshot({ path: 'C:/Users/Gabe/Documents/Poke alliance/dashboard/screenshot_meta.png' });
  await browser.close();
  console.log('DONE');
})();
