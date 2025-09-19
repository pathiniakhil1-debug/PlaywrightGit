import { test, expect } from '@playwright/test';
// ✅ Import 'test' and 'expect' from Playwright to define and validate tests.

const creds = ["standard_user", "secret_sauce"];
// ✅ Declare an array 'creds' to store login credentials:
// creds[0] = "standard_user" (username)
// creds[1] = "secret_sauce" (password)

test("saucedemo", async ({ page }) => {
    // ✅ Define a test case named 'saucedemo' with an async function using 'page' to control the browser.

    await page.goto("https://www.saucedemo.com/v1/");
    // 👉 Opens the SauceDemo login page in the browser.

    await page.locator("//input[@placeholder='Username']").fill(creds[0]);
    // 👉 Finds the username input field (by placeholder attribute) and fills it with 'standard_user'.

    await page.locator("//input[@placeholder='Password']").fill(creds[1]);
    // 👉 Finds the password input field (by placeholder attribute) and fills it with 'secret_sauce'.

    await page.locator("(//div[@class='login-box']//input)[3]").click();
    // 👉 Finds and clicks the login button within the login-box container.
    // The XPath selects the 3rd input inside the login-box div, which is the login button.

    await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html");
    // ✅ Verifies that the URL has changed to the inventory page after successful login, confirming login was successful.

});


