import { test, expect } from '@playwright/test'; 
// ✅ Import 'test' and 'expect' from Playwright to create and validate automated tests.

test('Addemployee', async ({ page }) => {  
    // ✅ Define a test case named 'Addemployee' with an async function using 'page' for browser control.

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    // 👉 Opens the OrangeHRM login page in the browser.

    await page.locator("input[name='username']").fill("Admin");
    // 👉 Fills the username input with "Admin".

    await page.locator("input[type='password']").fill("admin123");
    // 👉 Fills the password input with "admin123".

    await page.locator("button[type='submit']").click();
    // 👉 Clicks the login button.

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    // ✅ Verifies the dashboard URL after successful login.

    await page.locator("(//li[@class='oxd-main-menu-item-wrapper']//a)[2]").click();
    // 👉 Clicks on the second item in the main menu (usually "PIM").

    await page.locator("//a[normalize-space(text())='Add Employee']").click();
    // 👉 Clicks on "Add Employee".

    await page.locator("//input[@placeholder='First Name']").fill("Krishna");
    // 👉 Fills "First Name" with "Krishna".

    await page.locator("//input[@placeholder='Last Name']").fill("Reddy");
    // 👉 Fills "Last Name" with "Reddy".

    // ✅ Generate a random 4-digit employee ID
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    console.log(`Generated Employee ID: ${randomNumber}`);

    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(randomNumber.toString());
    // 👉 Fills "Employee ID" input with the generated random number.

    await page.locator("//button[@type='submit']").click();
    // 👉 Clicks "Save" to add the employee.
});
