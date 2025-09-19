const { test, expect, devices } = require('@playwright/test');

//Login credentials stored in an object for reusability
const LoginCredentials = {
    PageURL: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    Username: 'Admin',
    Password: 'admin123'
};

//Messages to post in the Buzz module
const MessagesList = {
    Message1: "Hello Everyone, Good Morning!",
    Message2: "My name is Raju!",
    Message3: "Welcome to Playwright with JavaScript!"
};

// Pick any device from Playwright's predefined list
// https://playwright.dev/docs/emulation#devices
const iPhone11 = devices['iPhone 11 Pro'];

for (let key in MessagesList) {
    const message = MessagesList[key];

    test.use(iPhone11);   // 👈 Apply mobile emulation to this test

    test(`Mobile DataDriven: Post message in Buzz module - ${message}`, async ({ page }) => {

        await page.goto(LoginCredentials.PageURL);

        await page.locator('input[placeholder="Username"]').fill(LoginCredentials.Username);
        await page.locator('input[placeholder="Password"]').fill(LoginCredentials.Password);
        await page.locator('button[type="submit"]').click();

        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

        await page.locator('//span[text()="Buzz"]').click();

        await page.locator('.oxd-buzz-post-input').fill(message);
        await page.locator('button[type="submit"]').click();

        await expect(page.locator(`//p[text()='${message}']`).first())
            .toHaveText(message);

        await page.waitForTimeout(2000);
    });
}