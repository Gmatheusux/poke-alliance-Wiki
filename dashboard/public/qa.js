const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('file:///C:/Users/Gabe/Documents/Poke alliance/dashboard/index.html');
  await page.waitForTimeout(2000);
  
  const errors = [];
  page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
  
  await page.screenshot({ path: 'C:/Users/Gabe/Documents/Poke alliance/dashboard/screenshot_home.png', fullPage: false });
  
  // Click Meta tab
  await page.click('text=Meta PvE');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'C:/Users/Gabe/Documents/Poke alliance/dashboard/screenshot_meta.png', fullPage: false });
  
  const bodyText = await page.evaluate(() => document.body.innerText.substring(0, 200));
  console.log('Body preview:', bodyText);
  console.log('Errors:', errors.join(', ') || 'none');
  
  await browser.close();
})();
