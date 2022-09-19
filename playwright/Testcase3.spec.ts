import { chromium , test } from "@playwright/test"

test("Login to created account and changing data ", async () => {

const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();

await page.goto("https://www.redmine.org/");
await page.click('[href="/projects/redmine/issues"]');
await page.click ('[href="/projects/redmine/issues/report"]');
await page.hover("//a[contains(text(),'3.2.9')]");
await page.click("//a[contains(text(),'3.2.9')]");
await page.goto('https://www.redmine.org/projects/redmine/issues/report');
await page.hover('[href="/projects/redmine/issues?category_id=1&set_filter=1&subproject_id=%21%2A"]');
await page.click('[href="/projects/redmine/issues?category_id=1&set_filter=1&subproject_id=%21%2A"]');
await page.click('[href="/projects/redmine/issues?query_id=42"]');

})