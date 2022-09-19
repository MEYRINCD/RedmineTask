import { test, expect, chromium } from '@playwright/test';

test('steps to check guide ', async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.redmine.org/");
    await page.click('[href="http://www.redmine.org/guide"]');
    await page.hover('[href="/projects/redmine/wiki/FrGuide"]');
    await page.click('[href="/projects/redmine/wiki/FrGuide"]')
    await page.goto("https://www.redmine.org/guide")
    await page.hover('[href="/projects/redmine/wiki/FaGuide"]')
    await page.click('[href="/projects/redmine/wiki/FaGuide"]')
  

});