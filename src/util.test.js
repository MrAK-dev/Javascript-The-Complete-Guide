const puppeteer = require('puppeteer');
const { generateText, checkAndGenerate } = require('./util');

test('Should output name and age', () => {
  const text = generateText('Max', 29);
  expect(text).toBe('Max (29 years old)');
});

test('Should output data-less text', () => {
  const text = generateText('', null);
  expect(text).toBe(' (null years old)');
});

test('Should generate a valid text output', () => {
  const text = checkAndGenerate('Max', 29);
  expect(text).toBe('Max (29 years old)');
});

test('Should create an element with text and correct class', async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(`http://localhost:8080/`);
  await page.setViewport({ width: 1080, height: 1024 });
  await page.click('input#name');
  await page.type('input#name', 'Anna');
  await page.click('input#age');
  await page.type('input#age', '28');
  await page.click('#btnAddUser');
  // const userInputSelector = await page.waitForSelector('.user-item');
  // const fullText = await userInputSelector.evaluate(el => el.textContent);
  const finalText = await page.$eval('.user-item', (el) => el.textContent);
  expect(finalText).toBe('Anna (28 years old)');
});
