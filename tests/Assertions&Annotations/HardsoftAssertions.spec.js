import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/OrangeHRM/loginpage.js';
import { AddEmployeePage } from '../../pages/OrangeHRM/addemployees.js';
import logindata from '../../test-data/login.json';

// ================= LOGIN TESTS ===================
test.describe('Login Test Scenarios', () => {

    test('Login with valid creds', async ({ page }) => {
        const login = new LoginPage(page);

        console.log("▶ Test Case: Login with VALID credentials");
        await login.launchtheApplication();
        await login.loginwithCreds(logindata.username, logindata.password);

        // HARD ASSERTION → must land on dashboard
        await expect(page).toHaveURL(/.*dashboard/);

        // SOFT ASSERTION → username dropdown visible (optional)
        await expect.soft(page.locator('.oxd-userdropdown-name')).toBeVisible();
    });

    test('Login with invalid creds', async ({ page }) => {
        const login = new LoginPage(page);

        console.log("▶ Test Case: Login with INVALID credentials");
        await login.launchtheApplication();
        await login.loginwithCreds(logindata.invalidusername, logindata.invalidpassword);

        // HARD ASSERTION → error must be visible
        await expect(page.locator('.oxd-alert-content')).toBeVisible();

        // SOFT ASSERTION → error text validation (optional)
        await expect.soft(page.locator('.oxd-alert-content')).toContainText('Invalid credentials');
    });
});

// ================= ADD EMPLOYEE TEST ===================
test('Add Employee with valid data', async ({ page }) => {
    const login = new LoginPage(page);
    const addEmployee = new AddEmployeePage(page);

    console.log("▶ Test Case: Add Employee with valid data");
    await login.launchtheApplication();
    await login.loginwithCreds(logindata.username, logindata.password);

    // HARD ASSERTION → ensure login success before proceeding
    await expect(page).toHaveURL(/.*dashboard/);

    await addEmployee.navigateToAddEmployee();

    // Fill employee details (with random empId + soft assert inside page method)
    const empId = await addEmployee.fillEmployeeDetails('Akhil', 'Kumar');

    await addEmployee.saveEmployee();

    // HARD ASSERTION → success toast should appear
    await expect(page.locator('.oxd-toast')).toBeVisible();

    console.log(`✅ Employee successfully created with ID: ${empId}`);
});


/*

🔹 What is an Assertion?

An assertion is a checkpoint in your test that verifies whether the actual application behavior matches the expected behavior.
If the assertion fails → it means the application is not working as expected.

🔹 Hard Assertion

Definition: If a hard assertion fails, the test execution stops immediately at that point.

Purpose: Used for critical validations where further steps don’t make sense if the condition isn’t met.

In Playwright:

await expect(page).toHaveURL(/.*dashboard/);


If this fails → the test won’t continue.

✅ When to use:

After login, you must land on the dashboard.

When verifying that a mandatory element exists (like Save button).

Critical steps where continuing the test is meaningless without success.

🔹 Soft Assertion

Definition: If a soft assertion fails, the test continues execution but records the failure.

Purpose: Used for non-critical validations that give extra information without breaking the flow.

In Playwright:

await expect.soft(page.locator('.oxd-userdropdown-name')).toBeVisible();


If this fails → the test continues, but the report will show the failure.

✅ When to use:

Checking optional UI elements (e.g., profile pic, tooltip).

Verifying error message text (not critical if wording changes).

Collecting multiple validation points in a single test run.

🔹 Example in Context
// HARD ASSERTION → must be on dashboard after login
await expect(page).toHaveURL(/.*dashboard/);

// SOFT ASSERTION → optional check for user dropdown
await expect.soft(page.locator('.oxd-userdropdown-name')).toBeVisible();


If the hard assertion fails → the test stops immediately.

If the soft assertion fails → the test continues, and you’ll see the failure in the report.

👉 In short:

Hard = mandatory, stop on failure 🚨

Soft = optional, continue even if fails ℹ️


*/