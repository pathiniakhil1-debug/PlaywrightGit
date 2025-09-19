import { test, expect } from '@playwright/test'; 
// ✅ Import 'test' and 'expect' from Playwright to create and validate automated tests.

test('Addemployee with getByRole', async ({ page }) => {  
    // ✅ Define a test case named 'Addemployee' with an async function using 'page' for browser control.

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    // 👉 Opens the OrangeHRM login page in the browser.

    await page.getByPlaceholder('Username').fill("Admin");
    // 👉 Fills the username input with "Admin".

    await page.getByPlaceholder('Password').fill("admin123");
    // 👉 Fills the password input with "admin123".

    await page.getByRole('button', { name: 'Login' }).click();
    // 👉 Clicks the "Login" button.

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    // ✅ Verifies the dashboard URL after successful login.

    await page.getByRole('link', { name: 'PIM' }).click();
    // 👉 Clicks on "PIM" in the sidebar.

    await page.getByRole('link', { name: 'Add Employee' }).click();
    // 👉 Clicks on "Add Employee".

    await page.getByPlaceholder('First Name').fill("Krishna");
    // 👉 Fills "First Name" with "Krishna".

    await page.getByPlaceholder('Last Name').fill("Reddy");
    // 👉 Fills "Last Name" with "Reddy".

    // ✅ Generate a random 4-digit employee ID
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    console.log(`Generated Employee ID: ${randomNumber}`);

    // Some employee ID fields don’t have placeholders, so use role = textbox
    const idFields = await page.getByRole('textbox').all();  
    await idFields[1].fill(randomNumber.toString());
    // 👉 Fills "Employee ID" input with the generated random number.

    await page.getByRole('button', { name: 'Save' }).click();
    // 👉 Clicks "Save" to add the employee.
});

