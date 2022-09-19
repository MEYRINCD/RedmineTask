import { chromium , test } from "@playwright/test"

test("Login to created account", async () => {

const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();

await page.goto("https://www.redmine.org/");
await page.click('[href="/login"]')
await page.fill('#username', "rgshfsfnfsh");
await page.fill('#password', "asddsa");
await page.click('#autologin');
await page.click('[type="submit"]');


})