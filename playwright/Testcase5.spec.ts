import { chromium , test } from "@playwright/test"

test("checking element ", async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.redmine.org/");
    await page.click('[href="/projects/redmine"]');
    await page.isVisible('[href="/users/1"]');
    await page.click('[class="home"]')
    await page.click('[href="/projects/redmine/wiki/Overview/history"]')
    await page.isVisible('[href="/users/2784"]')
    await page.click('[class="home"]')
    await page.click("//a[contains(text(),'5.0.2 (2022-06-21)')]");
    await page.isVisible('[href="https://github.com/redmine/redmine"]')
    await page.click('[class="home"]');
    await page.click("//a[contains(text(),'Privacy Policy')]");
    await page.isVisible('[href="/projects/redmine/wiki/Rest_api"]');
    await page.click('[class="home"]');
    await page.click('[href="/projects/redmine/wiki/index"]')
    await page.isVisible('[href="/projects/redmine/wiki/Bugmash"]')
    await page.click('[class="home"]');
    await page.click('[href="#Features"]');
    await page.hover('//tbody/tr[2]/td[1]')
    await page.click("//tbody/tr[2]/td[1]/a[1]");
    


})