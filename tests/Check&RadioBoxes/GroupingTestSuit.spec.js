const { test, expect } = require("@playwright/test");

// ==================== TEST SUITE ====================
test.describe("🧪 Test Suite - Handle Inputboxes, Radioboxes & Checkboxes", () => {

    // ✅ Runs once before all tests in this suite
    test.beforeAll(async () => {
        console.log(">>> Starting Test Suite...");
    });

    // ✅ Runs once after all tests in this suite
    test.afterAll(async () => {
        console.log(">>> Finished Test Suite.");
    });

    // ✅ Runs before each test in this suite
    test.beforeEach(async ({ page }) => {
        await page.goto("https://testautomationpractice.blogspot.com/");
        console.log(">>> New test started & page launched");
    });

    // ✅ Runs after each test in this suite
    test.afterEach(async ({ page }) => {
        console.log(">>> Test finished. Closing page...");
        await page.close();
    });


    // ==================== HANDLE INPUT BOXES ====================
    test("Handle Inputboxes", async ({ page }) => {

        await expect(page.locator("#name")).toBeVisible();
        await expect(page.locator("#name")).toBeEmpty();
        await expect(page.locator("#name")).toBeEditable();
        await expect(page.locator("#name")).toBeEnabled();

        await page.locator("#name").fill("Akhil");
        await page.waitForTimeout(2000);

        await expect(page.locator("#name")).toHaveValue("Akhil");
    });


    // ==================== HANDLE RADIO BUTTONS ====================
    test("Handle Radioboxes", async ({ page }) => {

        await expect(page.locator("#male")).toBeVisible();
        await expect(page.locator("#male")).toBeEnabled();

        await page.locator("#male").check();
        await expect(page.locator("#male")).toBeChecked();

        await page.waitForTimeout(2000);

        await expect(await page.locator("#male").isChecked()).toBeTruthy();
        await expect(await page.locator("#female").isChecked()).toBeFalsy();
    });


    // ==================== HANDLE CHECKBOXES ====================
    test("Handle checkboxes", async ({ page }) => {

        await page.locator("//input[@id='monday' and @type='checkbox']").check();
        await expect(page.locator("//input[@id='monday' and @type='checkbox']")).toBeChecked();
        await expect(await page.locator("//input[@id='monday' and @type='checkbox']").isChecked()).toBeTruthy();
        await expect(await page.locator("//input[@id='sunday' and @type='checkbox']").isChecked()).toBeFalsy();

        const checkboxLocators = [
            "//input[@id='monday' and @type='checkbox']",
            "//input[@id='sunday' and @type='checkbox']",
            "//input[@id='saturday' and @type='checkbox']"
        ];

        for (const Locator of checkboxLocators) {
            await page.locator(Locator).check();
        }

        await page.waitForTimeout(2000);

        for (const Locator of checkboxLocators) {
            if (await page.locator(Locator).isChecked())
                await page.locator(Locator).uncheck();
        }

        await page.waitForTimeout(2000);
    });

});


// ✅ Now all three tests belong to one suite:
// 🧪 Test Suite - Handle Inputboxes, Radioboxes & Checkboxes

// beforeAll / afterAll run only once for the suite.

// beforeEach / afterEach run around each test inside this suite.