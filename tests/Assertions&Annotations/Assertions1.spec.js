// ✅ Import Playwright's test runner and expect assertion library
import { test, expect } from "@playwright/test"

// ✅ Define a test block
test("Assertions", async ({ page }) => {

    // ==================== PAGE LEVEL ASSERTIONS ====================

    // ✅ Navigate to the registration page
    await page.goto("https://demo.nopcommerce.com/register")

    // ✅ Assert that the page URL is correct
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register")

    // ✅ Assert that the page title is correct
    await expect(page).toHaveTitle("nopCommerce demo store. Register")

    // ==================== ELEMENT LEVEL ASSERTIONS ====================

    // ✅ Locate the logo element
    const LogoElement = await page.locator(".header-logo")
    // ✅ Assert that logo is visible on the page
    await expect(LogoElement).toBeVisible()

    // ✅ Locate the search input field
    const Searchstore = await page.locator("//input[@id='small-searchterms']")
    // ✅ Assert that the search input field is enabled
    await expect(Searchstore).toBeEnabled()

    // ✅ Locate male radio button and select it
    const maleRadioButton = await page.locator('#gender-male')
    await maleRadioButton.click()
    // ✅ Assert that male radio button is checked after click
    await expect(maleRadioButton).toBeChecked()

    // ✅ Locate Newsletter checkbox
    const newsletterCheckbox = await page.locator("//input[@id='Newsletter']")
    // ✅ Assert that Newsletter checkbox is checked (default checked)
    await expect(newsletterCheckbox).toBeChecked()

    // ✅ Locate the register button
    const reqButton = await page.locator("#register-button")
    // ✅ Assert that register button has attribute `type=submit`
    await expect(reqButton).toHaveAttribute('type', 'submit')

    // ✅ Assert that heading text matches exactly "Register"
    await expect(await page.locator(".page-title h1")).toHaveText("Register")

    // ✅ Assert that heading text contains partial text "Reg"
    await expect(await page.locator(".page-title h1")).toContainText("Reg")

    // ==================== INPUT FIELD ASSERTIONS ====================

    // ✅ Locate email input field
    const emailInput = await page.locator('#Email')
    // ✅ Fill email input field with test data
    await emailInput.fill("test@demo.com")
    // ✅ Assert that email input contains the correct value
    await expect(emailInput).toHaveValue("test@demo.com")

    // ==================== LIST/COUNT ASSERTIONS ====================

    // ✅ Navigate to Age Calculator page
    await page.goto("https://www.calculator.net/age-calculator.html")

    // ✅ Locate dropdown options of 'Month'
    const options = await page.locator("select[id='today_Month_ID'] option")
    // ✅ Assert that dropdown has exactly 12 options (months)
    await expect(options).toHaveCount(12)

})




// expect(page).toHaveURL() : Page has URL
// expect(page).toHaveTitle()  : Page has title
// expect(locator).toBeVisible() : Element is visible
// expect(locator).toBeEnabled()  : Control is enabled
// expect(locator).toBeDisabled() : Element is disabled
// expect(locator).toBeChecked() : Radio/Checkbox is checked
// expect(locator).toHaveAttribute() : Element has attribute
// expect(locator).toHaveText()  :  Element matches text
// expect(locator).toContainText()  :  Element contains text
// expect(locator).toHaveValue(value)  : Input has a value
// expect(locator).toHaveCount()  : List of elements has given length

// 🎯 Playwright Assertions Cheat Sheet
// Assertion	Meaning	Example Usage
// expect(page).toHaveURL(url)	Verifies that the current page URL matches the given one	await expect(page).toHaveURL("https://demo.nopcommerce.com/register")
// expect(page).toHaveTitle(title)	Verifies that the page title matches the given one	await expect(page).toHaveTitle("nopCommerce demo store. Register")
// expect(locator).toBeVisible()	Checks that the element is visible on the page	await expect(page.locator(".header-logo")).toBeVisible()
// expect(locator).toBeEnabled()	Checks that the element is enabled (interactive)	await expect(page.locator("#small-searchterms")).toBeEnabled()
// expect(locator).toBeDisabled()	Checks that the element is disabled (not interactive)	await expect(page.locator("#disabled-input")).toBeDisabled()
// expect(locator).toBeChecked()	Checks that a radio/checkbox is checked	await expect(page.locator("#gender-male")).toBeChecked()
// expect(locator).toHaveAttribute(attr, value)	Checks that element has a specific attribute with value	await expect(page.locator("#register-button")).toHaveAttribute("type", "submit")
// expect(locator).toHaveText(text)	Checks that element text matches exactly	await expect(page.locator(".page-title h1")).toHaveText("Register")
// expect(locator).toContainText(partialText)	Checks that element text contains given substring	await expect(page.locator(".page-title h1")).toContainText("Reg")
// expect(locator).toHaveValue(value)	Checks that input has a specific value	await expect(page.locator("#Email")).toHaveValue("test@demo.com")
// expect(locator).toHaveCount(count)	Checks that the number of elements matches count	await expect(page.locator("select option")).toHaveCount(12)