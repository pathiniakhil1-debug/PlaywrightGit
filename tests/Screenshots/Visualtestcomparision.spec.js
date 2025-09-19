// Include playwright module
const { test, expect } = require('@playwright/test');

// Visual comparison testing
test('Visual comparison testing in Playwright', async ({ page }) => {
    // ▶ Go to URL
    await page.goto('https://github.com/login');

    // ▶ Before actions → Compare with baseline (githubpage-before.png)
    await expect(page).toHaveScreenshot('githubpage-before.png');

    // ▶ Perform actions
    await page.locator('#login_field').click();
    await page.locator('#login_field').fill('testers talk');

    // ▶ After actions → Compare with baseline (githubpage-after.png)
    await expect(page).toHaveScreenshot('githubpage-after.png');

    // ▶ Optional wait to observe
    await page.waitForTimeout(2000);
});



test('Element Screenshot Instant Comparison in Playwright', async ({ page }) => {
    // ▶ Go to URL
    await page.goto('https://github.com/login');

    // ▶ Locate element
    const element = page.locator('#login_field');

    // ▶ Take screenshot of element instantly
    const screenshotBuffer = await element.screenshot();

    // ▶ Compare with itself (always passes, same run)
    await expect(screenshotBuffer).toMatchSnapshot('element.png');

    // ▶ Optional wait just to observe
    await page.waitForTimeout(2000);

});

