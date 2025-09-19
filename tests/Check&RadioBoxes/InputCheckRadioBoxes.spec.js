const { test, expect } = require("@playwright/test")

// ==================== HANDLE INPUT BOXES ====================
test("Handle Inputboxes", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")
    // ▶ Launch the practice page

    await expect(await page.locator("#name")).toBeVisible()
    // ▶ Verify "Name" input box is visible

    await expect(await page.locator("#name")).toBeEmpty()
    // ▶ Verify "Name" input box is empty

    await expect(await page.locator("#name")).toBeEditable()
    // ▶ Verify "Name" input box is editable

    await expect(await page.locator("#name")).toBeEnabled()
    // ▶ Verify "Name" input box is enabled

    await page.locator("#name").fill("Akhil")
    // ▶ Enter "Akhil" into the input box

    await page.waitForTimeout(2000)
    // ▶ Wait for 2 seconds

    await expect(await page.locator("#name")).toHaveValue("Akhil")
    // ▶ Verify the input box contains the text "Akhil"
})


// ==================== HANDLE RADIO BUTTONS ====================
test("Handle Radioboxes", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")
    // ▶ Launch the practice page

    await expect(page.locator("#male")).toBeVisible()
    // ▶ Verify "Male" radio button is visible

    await expect(page.locator("#male")).toBeEnabled()
    // ▶ Verify "Male" radio button is enabled

    await page.locator("#male").check()
    // ▶ Select the "Male" radio button (action)

    await expect(page.locator("#male")).toBeChecked()
    // ▶ Verify "Male" radio button is selected (assertion)

    await page.waitForTimeout(2000)
    // ▶ Wait for 2 seconds

    await expect(await page.locator("#male").isChecked()).toBeTruthy()
    // ▶ Confirm "Male" is checked → should return TRUE

    await expect(await page.locator("#female").isChecked()).toBeFalsy()
    // ▶ Confirm "Female" is not checked → should return FALSE
})



// ==================== HANDLE CHECKBOXES ====================
test("Handle checkboxes", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")
    // ▶ Launch the practice page

    await page.locator("//input[@id='monday' and @type='checkbox']").check()
    // ▶ Select the "Monday" checkbox

    await expect(await page.locator("//input[@id='monday' and @type='checkbox']")).toBeChecked()
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

    for (const Locator of checkboxLocators) {
        await page.locator(Locator).check()
    }

    // ▶ Loop → Select multiple checkboxes

    await page.waitForTimeout(2000)
    // ▶ Wait for 2 seconds

    for (const Locator of checkboxLocators) {
        if (await page.locator(Locator).isChecked())
            await page.locator(Locator).uncheck()
    }
    // ▶ Loop → Unselect the checkboxes if already selected

    await page.waitForTimeout(2000)
    // ▶ Wait for 2 seconds
})




/*==================== SUMMARY OF FORM ELEMENTS ====================

// In Playwright, you can handle three common form elements: Input Boxes, Radio Buttons, and Checkboxes.
// Each has its own methods for interaction and validation.
// Here's a quick summary of how to work with them:

In Playwright, just like in normal web automation, you interact with three very common types of form elements:

1️⃣ Input Box (Textbox / Field)

👉 An input box is a field where a user can type text, numbers, email, etc.

HTML example:

<input type="text" id="username" placeholder="Enter your name">


In Playwright, you can:

Type or fill text → page.fill("#username", "Akhil")

Clear and retype → page.locator("#username").fill("")

Assertions → check if it’s visible, enabled, editable, or has a certain value.

2️⃣ Radio Button

👉 A radio button lets users select only one option from a group.

HTML example:

<input type="radio" name="gender" id="male" checked> Male
<input type="radio" name="gender" id="female"> Female


In Playwright, you can:

Select radio button → page.check("#female")

Verify selection → expect(page.locator("#male")).toBeChecked()

Check state → await page.locator("#female").isChecked()

3️⃣ Checkbox

👉 A checkbox lets users select multiple options independently.

HTML example:

<input type="checkbox" id="monday"> Monday
<input type="checkbox" id="sunday"> Sunday


In Playwright, you can:

Select checkbox → page.check("#monday")

Unselect checkbox → page.uncheck("#monday")

Verify state →

expect(page.locator("#monday")).toBeChecked()

await page.locator("#sunday").isChecked()

✅ Summary:

Input Box → Type text (like username, password, search fields).

Radio Button → Choose one option (like gender, payment method).

Checkbox → Choose multiple options (like days, skills, preferences).

*/