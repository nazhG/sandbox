const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://youtube.com/');

  const titles = await page.$$eval('#video-title', as => as.map(a => a.textContent));
  console.log(titles);

  const refs = await page.$$eval('a#thumbnail', as => as.map(a => a.href));
  console.log(refs);
  

  await browser.close();
})();