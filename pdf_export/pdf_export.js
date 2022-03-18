const puppeteer = require('puppeteer')
 
async function generatePDF(city) {

  //We start a new browser, without showing UI
  const browser = await puppeteer.launch({ headless: true});
  const page = await browser.newPage();
  const url = 'http://localhost:3000';

  //We load the page, one of my blog post (networkidle0 means we're waiting for the network to stop making new calls for 500ms
  await page.goto(url, {waitUntil: 'networkidle0'});

  await page.focus("input[type=text]")

  // variable Search
  await page.keyboard.type(city)

  await page.click("#root > div > div:nth-child(3) > button");

  //Let's generate the pdf and close the browser
  const pdf = await page.pdf({ path: "article.pdf", format: 'A4' });
  await browser.close();
  return pdf;
}

// generatePDF('paris');