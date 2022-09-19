import { chromium , test } from "@playwright/test"

test("Login to created account and changing data ", async () => {

const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();

await page.goto("https://www.redmine.org/");
await page.click('[href="/login"]')
await page.fill('#username', "rgshfsfnfsh");
await page.fill('#password', "asddsa");
await page.click('#autologin');
await page.click('[type="submit"]');
await page.click('[href="/my/account"]');

await page.fill('#user_firstname','Valis');
await page.fill('#user_lastname', 'fasfs');
await page.fill('#user_mail','valddlav11@gmail.com');
await page.locator('#user_language').selectOption('ru');
await page.fill('#user_custom_field_values_3', 'adfadgadgadgadg');
await page.locator('#pref_time_zone').selectOption('International Date Line West');
await page.click('#pref_hide_mail');
await page.click('#pref_warn_on_leaving_unsaved');
await page.locator('#pref_comments_sorting').selectOption('desc');
await page.locator('#user_mail_notification').selectOption('none');
await page.click('#pref_no_self_notified');
await page.click('[type="submit"]');

await page.waitForTimeout(3000);



})



