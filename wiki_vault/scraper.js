const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://wiki.pokealliance.com/', { waitUntil: 'networkidle' });
  
  await page.waitForTimeout(3000);
  
  const content = await page.evaluate(() => {
    const links = Array.from(document.querySelectorAll('a')).map(a => ({ text: a.innerText.trim(), href: a.href }));
    const text = document.body.innerText;
    return JSON.stringify({ links, text }, null, 2);
  });
  
  fs.writeFileSync('C:\\Users\\Gabe\\Documents\\Poke alliance\\wiki_vault\\wiki_home.json', content);
  
  await browser.close();
})();
