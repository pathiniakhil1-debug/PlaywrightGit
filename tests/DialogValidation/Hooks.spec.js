// Import Playwright test library
const { test, expect } = require("@playwright/test");

// ===================== TEST SUITE =====================
test.describe("🧪 Test Suite - Handle JavaScript Dialogs (Alert, Confirm, Prompt)", () => {

  // ✅ Runs once before all tests
  test.beforeAll(async () => {
    console.log(">>> Starting Dialog Test Suite...");
  });

  // ✅ Runs once after all tests
  test.afterAll(async () => {
    console.log(">>> Finished Dialog Test Suite.");
  });

  // ✅ Runs before each test
  test.beforeEach(async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    console.log(">>> Test started & page launched");
  });

  // ✅ Runs after each test
  test.afterEach(async ({ page }) => {
    console.log(">>> Test finished. Closing page...");
    await page.close();
  });


  // ===================== TEST 1: Simple Alert Box =====================
  test("Alert with Ok", async ({ page }) => {

    page.on("dialog", async dialog => {
      expect(dialog.type()).toContain("alert");
      expect(dialog.message()).toContain("I am an alert box!");
      await dialog.accept();
    });

    await page.click("//button[@id='alertBtn']");
    await page.waitForTimeout(2000);
  });


  // ===================== TEST 2: Confirmation Dialog =====================
  test.skip("Confirmation Dialogue - Alert with ok and cancel", async ({ page }) => {

    page.on("dialog", async dialog => {
      expect(dialog.type()).toContain("confirm");
      expect(dialog.message()).toContain("Press a button!");
      await dialog.accept(); // or await dialog.dismiss();
    });

    await page.click("//button[@id='confirmBtn']");
    await expect(page.locator("#demo")).toHaveText("You pressed OK!");
    await page.waitForTimeout(2000);
  });


  // ===================== TEST 3: Prompt Dialog =====================
  test.skip("Prompt Dialogue", async ({ page }) => {

    page.on("dialog", async dialog => {
      expect(dialog.type()).toContain("prompt");
      expect(dialog.message()).toContain("Please enter your name:");
      expect(dialog.defaultValue()).toContain("Harry Potter");
      await dialog.accept("John");
    });

    await page.click("//button[@id='promptBtn']");
    await expect(page.locator("#demo")).toHaveText("Hello John! How are you today?");
    await page.waitForTimeout(2000);
  });

});
