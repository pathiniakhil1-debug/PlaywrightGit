const { test, expect } = require("@playwright/test")   // Import Playwright test functions

// ✅ Test 1: Directly filling date into the Datepicker input field
test("Direct Datepickers", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")   // Open the test webpage

    // Directly fill the date into the input box without using the calendar widget
    // Format depends on the input type (here: dd.mm.yyyy)
    await page.locator("//input[@id='datepicker']").fill("19.07.2025")

    await page.waitForTimeout(2000)   // Wait for 2 seconds (demo purpose)

})


// ✅ Test 2: Selecting a date by looping until year & month match
test("Datepickers Using Looping", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")   // Open the test webpage

    // Target date to select
    const year = "2025"
    const month = "July"
    const date = "1"

    await page.click("#datepicker")   // Click on datepicker input to open calendar widget

    // Loop until the calendar shows the correct month & year
    while (true) {
        const currentYear = await page.locator(".ui-datepicker-year").textContent()   // Get current year displayed
        const currentMonth = await page.locator(".ui-datepicker-month").textContent() // Get current month displayed

        if (currentYear == year && currentMonth == month)   // If year & month match target, break loop
        {
            break;
        }

        // Click "Next" arrow to move forward in calendar
        //await page.locator("//span[@class='ui-icon ui-icon-circle-triangle-e']").click()   

        // Using "Prev" button to move backward in calendar (for past dates)
        await page.locator("//span[normalize-space(text())='Prev']").click()

    }

    const dates = await page.$$("//a[@class='ui-state-default']")   // Locate all dates (days) in the calendar

    // Loop through all dates and click on the matching date
    for (const dt of dates) {
        if (await dt.textContent() == date)   // Compare day text with target date
        {
            await dt.click()   // Click the desired date
            break;             // Exit loop after selecting
        }
    }

    await page.waitForTimeout(2000)   // Wait for 2 seconds

})


// ✅ Test 3: Selecting a date without looping through days (direct XPath)
test("Datepickers Without Using Looping", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")   // Open the test webpage

    // Target date to select
    const year = "2025"
    const month = "July"
    const date = "1"

    await page.click("#datepicker")   // Click on datepicker input to open calendar widget

    // Loop until correct year & month are visible in calendar
    while (true) {
        const currentYear = await page.locator(".ui-datepicker-year").textContent()   // Get current year displayed
        const currentMonth = await page.locator(".ui-datepicker-month").textContent() // Get current month displayed

        if (currentYear == year && currentMonth == month)   // Stop loop when target month & year found
        {
            break;
        }

        // Uncomment this for selecting a future date (click "Next" arrow)
        // await page.locator("//span[@class='ui-icon ui-icon-circle-triangle-e']").click()

        // Using "Prev" button to move backward in calendar (for past dates)
        await page.locator("//span[normalize-space(text())='Prev']").click()
    }

    // Directly select the date without looping through all days
    await page.click(`//a[@class='ui-state-default'][text()='${date}']`)

    // Alternative approach (if highlighted date needs selection)
    // const dates = await page.$$("//a[@class='ui-state-default ui-state-highlight'])[text()='${date}']")

    await page.waitForTimeout(2000)   // Wait for 2 seconds

})