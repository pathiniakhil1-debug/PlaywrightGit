import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/OrangeHRM/loginpage.js';
import { AddEmployeePage } from '../../pages/OrangeHRM/addemployees.js';
import logindata from '../../test-data/login.json';

// ================= LOGIN TESTS ===================
test.describe('Login Test Scenarios', () => {

    test('Login with valid creds', async ({ page }) => {
        const login = new LoginPage(page);

        console.log("▶ Test Case: Login with VALID credentials");
        await login.launchtheApplication();                           // ▶ Open login page
        await login.loginwithCreds(logindata.username, logindata.password);
        await login.loginsuccess();                                   // ▶ Verify dashboard
    });

    test('Login with invalid creds', async ({ page }) => {
        const login = new LoginPage(page);

        console.log("▶ Test Case: Login with INVALID credentials");
        await login.launchtheApplication();                           // ▶ Open login page
        await login.loginwithCreds(logindata.invalidusername, logindata.invalidpassword);
        await login.loginError();                                     // ▶ Verify error
    });

    // Example: Skipping test temporarily
    test.skip('Login with empty creds (SKIPPED)', async ({ page }) => {
        const login = new LoginPage(page);

        console.log("▶ Test Case: Login with EMPTY credentials (SKIPPED)");
        await login.launchtheApplication();
        await login.loginwithCreds('', '');
        await login.loginError();
    });

    // Example: Marking as expected failure
    test.fail('Login with SQL injection (EXPECTED FAIL)', async ({ page }) => {
        const login = new LoginPage(page);

        console.log("▶ Test Case: Login with SQL Injection (EXPECTED FAIL)");
        await login.launchtheApplication();
        await login.loginwithCreds("' OR '1'='1", 'dummyPassword');
        await login.loginsuccess();   // ▶ This should fail
    });

    // Example: Marking as "fix later"
    test.fixme('Login with locked user (FIXME)', async ({ page }) => {
        const login = new LoginPage(page);

        console.log("▶ Test Case: Login with LOCKED USER (FIXME, to be fixed later)");
        await login.launchtheApplication();
        await login.loginwithCreds('lockedUser', 'password');
        await login.loginError();
    });

    // Example: Slow test marker
    test.slow('Login with performance validation (SLOW)', async ({ page }) => {
        const login = new LoginPage(page);

        console.log("▶ Test Case: Login performance validation (Marked SLOW)");
        await login.launchtheApplication();
        await login.loginwithCreds(logindata.username, logindata.password);
        await login.loginsuccess();

        // ▶ Artificial delay to simulate performance check
        await page.waitForTimeout(5000);
    });
});

// ================= ADD EMPLOYEE TEST ===================
test('Add Employee with valid data', async ({ page }) => {
    const login = new LoginPage(page);
    const addEmployee = new AddEmployeePage(page);

    console.log("▶ Test Case: Add Employee with valid data");
    await login.launchtheApplication();                              // ▶ Open login page
    await login.loginwithCreds(logindata.username, logindata.password);
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

    await addEmployee.navigateToAddEmployee();                       // ▶ Go to Add Employee
    const empId = await addEmployee.fillEmployeeDetails('Akhil', 'Kumar'); // ▶ Fill details with random ID
    await addEmployee.saveEmployee();                                // ▶ Save employee

    console.log(`✅ Employee successfully created with ID: ${empId}`);
});



/*

explain why/when we use each Playwright annotation:

🔹 test.skip()

Meaning: Tells Playwright to skip this test completely.

When to use:

If a feature isn’t developed yet.

If the test is flaky (unstable) and you want to temporarily disable it.

✅ Example:

test.skip('Login with empty creds (SKIPPED)', async ({ page }) => {
    // This test won't run at all
});


👉 Playwright will just ignore this test and move on.

🔹 test.fail()

Meaning: The test is expected to fail. If it fails → test is marked green (expected fail).

When to use:

For negative test cases (like SQL injection, broken login).

When you know the app has a bug and want to track it without breaking CI pipeline.

✅ Example:

test.fail('Login with SQL injection (EXPECTED FAIL)', async ({ page }) => {
    await login.loginwithCreds("' OR '1'='1", 'dummyPassword');
    await login.loginsuccess();  // ❌ This will fail, but it's expected
});


👉 Even if this fails, Playwright will not count it as a red test.

🔹 test.fixme()

Meaning: Marks test as something that needs fixing. Playwright will skip it automatically.

When to use:

When a test is broken and you don’t want to delete it.

As a reminder for future fixes.

✅ Example:

test.fixme('Login with locked user (FIXME)', async ({ page }) => {
    await login.loginwithCreds('lockedUser', 'password');
    await login.loginError();
});


👉 The test won’t run, but in the report, Playwright will show "FIXME" so you know it’s pending.

🔹 test.slow()

Meaning: Marks test as slow. Playwright increases timeout automatically.

When to use:

When the test takes longer (like uploading files, performance checks).

To prevent timeout errors.

✅ Example:

test.slow('Login with performance validation (SLOW)', async ({ page }) => {
    await login.loginwithCreds(logindata.username, logindata.password);
    await page.waitForTimeout(5000); // extra wait
});


👉 Playwright will allow more time for this test to finish.

*/