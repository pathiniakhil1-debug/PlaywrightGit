const { test, expect } = require("@playwright/test") // Import Playwright test and assertion libraries

// ✅ Test 1: Select multiple values from multi-select dropdown
test("Multiselection Dropdown", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/") // Open the demo page

    // Select multiple options from dropdown with id="colors"
    await page.selectOption('#colors', ['Red', 'Blue', 'Green'])

    await page.waitForTimeout(2000) // Wait 2 sec to observe selection
})


// ✅ Test 2: Validate number of options in multi-select dropdown (Approach 1)
test("Checks the no.of options in Multiselection Dropdown-Approach 1", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/") // Open the demo page

    // Locate all <option> elements inside #colors dropdown
    const options = await page.locator("#colors option")

    // Assert that total count of options = 7
    await expect(options).toHaveCount(7)

    await page.waitForTimeout(2000) // Wait 2 sec to observe
})


// ✅ Test 3: Validate number of options in multi-select dropdown (Approach 2)
test("Checks the no.of options in Multiselection Dropdown-Approach 2", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/") // Open the demo page

    // Collect all <option> elements using $$ (returns array of elements)
    const options = await page.$$("#colors option")

    // Print number of options in console
    console.log("No of options:", options.length)

    // Assert that total options = 7
    await expect(options.length).toBe(7)

    await page.waitForTimeout(2000) // Wait 2 sec to observe
})


// ✅ Test 4: Validate presence/absence of specific values in dropdown
test("Checks the presence of value in the Multiselection Dropdown-Approach 1", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/") // Open the demo page

    // Get all text inside #colors dropdown (includes all <option> texts)
    const content = await page.locator("#colors").textContent()

    // Assert that "Red" is present in the dropdown
    await expect(content.includes('Red')).toBeTruthy()

    // Assert that "Black" is NOT present in the dropdown
    await expect(content.includes('Black')).toBeFalsy()

    await page.waitForTimeout(2000) // Wait 2 sec to observe
    
})
