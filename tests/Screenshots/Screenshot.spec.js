// Include playwright module
const { test, expect } = require('@playwright/test');

// Write a test
test('Take screenshot in playwright', async ({ page }) => {
    //Go to URL
    await page.goto('https://www.youtube.com/@naveenautomationlabs')

    //Element scrrenshot
    await page.locator("//div[@class='yt-spec-avatar-shape__image-overlays yt-spec-avatar-shape__image']").screenshot({ path: './screenshots/element.png' })

    //page screenshot
    await page.screenshot({ path: './screenshots/page.png' })

    //fullpage screenshot
    await page.screenshot({ path: './screenshots/fullpage.png', fullPage: true })

    await page.waitForTimeout(3000)

    await page.close()

});


// // ▶ Include Playwright module
// const { test, expect } = require('@playwright/test');

// test('Screenshot testing in Playwright', async ({ page }) => {
//   // ▶ Go to URL
//   await page.goto('https://www.youtube.com/@naveenautomationlabs');

//   // ================= ELEMENT SCREENSHOT =================
//   const element = page.locator("//div[@class='yt-spec-avatar-shape__image-overlays yt-spec-avatar-shape__image']");
//   await expect(element).toHaveScreenshot('element.png');
//   // ✅ Compares element screenshot with baseline (element.png)

//   // ================= PAGE SCREENSHOT =================
//   await expect(page).toHaveScreenshot('page.png');
//   // ✅ Compares visible viewport screenshot with baseline (page.png)

//   // ================= FULL PAGE SCREENSHOT =================
//   await expect(page).toHaveScreenshot('fullpage.png', { fullPage: true });
//   // ✅ Compares full-page screenshot with baseline (fullpage.png)

//   // ▶ Optional: observe execution
//   await page.waitForTimeout(3000);

// });