const { test, expect } = require("@playwright/test")

// ==================== HOOKS ====================

// ✅ Runs ONCE before all tests
test.beforeAll(async () => {
    console.log("🚀 Starting test suite...")
})

// ✅ Runs ONCE after all tests
test.afterAll(async () => {
    console.log("✅ Finished all tests!")
})

// ✅ Runs BEFORE EACH test
test.beforeEach(async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    console.log("🔄 Opened practice page before test")
})

// ✅ Runs AFTER EACH test
test.afterEach(async ({ page }) => {
    await page.close()
    console.log("🛑 Closed page after test")
})


// ==================== HANDLE INPUT BOXES ====================
test("Handle Inputboxes", async ({ page }) => {

    await expect(page.locator("#name")).toBeVisible()
    // ▶ Verify "Name" input box is visible

    await expect(page.locator("#name")).toBeEmpty()
    // ▶ Verify "Name" input box is empty

    await expect(page.locator("#name")).toBeEditable()
    // ▶ Verify "Name" input box is editable

    await expect(page.locator("#name")).toBeEnabled()
    // ▶ Verify "Name" input box is enabled

    await page.locator("#name").fill("Akhil")
    // ▶ Enter "Akhil" into the input box

    await expect(page.locator("#name")).toHaveValue("Akhil")
    // ▶ Verify the input box contains the text "Akhil"
})


// ==================== HANDLE RADIO BUTTONS ====================
test("Handle Radioboxes", async ({ page }) => {

    await expect(page.locator("#male")).toBeVisible()
    // ▶ Verify "Male" radio button is visible

    await expect(page.locator("#male")).toBeEnabled()
    // ▶ Verify "Male" radio button is enabled

    await page.locator("#male").check()
    // ▶ Select the "Male" radio button

    await expect(page.locator("#male")).toBeChecked()
    // ▶ Verify "Male" radio button is selected

    await expect(await page.locator("#male").isChecked()).toBeTruthy()
    // ▶ Confirm "Male" is checked → should return TRUE

    await expect(await page.locator("#female").isChecked()).toBeFalsy()
    // ▶ Confirm "Female" is not checked → should return FALSE
})


// ==================== HANDLE CHECKBOXES ====================
test("Handle checkboxes", async ({ page }) => {

    await page.locator("//input[@id='monday' and @type='checkbox']").check()
    // ▶ Select the "Monday" checkbox

    await expect(page.locator("//input[@id='monday' and @type='checkbox']")).toBeChecked()
    // ▶ Verify "Monday" checkbox is selected

    await expect(await page.locator("//input[@id='monday' and @type='checkbox']").isChecked()).toBeTruthy()
    // ▶ Confirm "Monday" is checked → should return TRUE

    await expect(await page.locator("//input[@id='sunday' and @type='checkbox']").isChecked()).toBeFalsy()
    // ▶ Confirm "Sunday" checkbox is not checked → should return FALSE

    const checkboxLocators = [
        "//input[@id='monday' and @type='checkbox']",
        "//input[@id='sunday' and @type='checkbox']",
        "//input[@id='saturday' and @type='checkbox']"
    ]
    // ▶ Define multiple checkboxes (Monday, Sunday, Saturday)

    // ✅ Loop → Select multiple checkboxes
    for (const Locator of checkboxLocators) {
        await page.locator(Locator).check()
    }

    // ✅ Loop → Unselect checkboxes if already selected
    for (const Locator of checkboxLocators) {
        if (await page.locator(Locator).isChecked()) {
            await page.locator(Locator).uncheck()
        }
    }
})


// Added beforeAll / afterAll to log when test suite starts and ends.

// Added beforeEach to automatically launch the page before every test (no need to repeat page.goto(...) inside each test).

// Added afterEach to close the page after every test (cleanup).