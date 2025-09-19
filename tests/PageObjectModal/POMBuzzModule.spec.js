// ▶ Import Playwright's test + expect API
import { test, expect } from '@playwright/test';

// ▶ Import Page Object classes (Login, Add Employee, Buzz)
import { LoginPage } from '../../pages/OrangeHRM/loginpage.js';
import { AddEmployeePage } from '../../pages/OrangeHRM/addemployees.js';
import { BuzzModulePage } from '../../pages/OrangeHRM/Buzzmodule.js';

// ▶ Import test data (stored separately in JSON for reusability)
import logindata from '../../test-data/login.json';

// ================== REUSABLE DATA ==================

// ▶ Login credentials object
const LoginCredentials = {
    Username: 'Admin',
    Password: 'admin123'
};

// ▶ Messages list to test data-driven Buzz posts
const MessagesList = [
    "Hello Everyone, Good Morning!",
    "My name is Raju!",
    "Welcome to Playwright with JavaScript!"
];

// ================== TEST SUITE ==================
test.describe('🧪 OrangeHRM Test Suite - Login, Employee & Buzz', () => {

    // ✅ Runs once before all tests
    test.beforeAll(async () => {
        console.log(">>> Starting OrangeHRM Test Suite...");
    });

    // ✅ Runs once after all tests
    test.afterAll(async () => {
        console.log(">>> Finished OrangeHRM Test Suite.");
    });

    // ✅ Runs before each test → Launch app before every scenario
    test.beforeEach(async ({ page }) => {
        console.log(">>> Launching OrangeHRM Application");
        const login = new LoginPage(page);
        await login.launchtheApplication();
    });

    // ✅ Runs after each test → Close browser page
    test.afterEach(async ({ page }) => {
        console.log(">>> Test Finished. Closing page...");
        await page.close();
    });

    // ================= LOGIN TESTS ===================
    test('Login with VALID credentials', async ({ page }) => {
        const login = new LoginPage(page);

        console.log("▶ Test Case: Login with VALID credentials");
        await login.loginwithCreds(logindata.username, logindata.password); // Enter valid creds
        await login.loginsuccess();                                         // Verify success
    });

    test('Login with INVALID credentials', async ({ page }) => {
        const login = new LoginPage(page);

        console.log("▶ Test Case: Login with INVALID credentials");
        await login.loginwithCreds(logindata.invalidusername, logindata.invalidpassword); // Wrong creds
        await login.loginError();                                                         // Verify error
    });

    // ================= ADD EMPLOYEE TEST ===================
    test('Add Employee with valid data', async ({ page }) => {
        const login = new LoginPage(page);
        const addEmployee = new AddEmployeePage(page);

        console.log("▶ Test Case: Add Employee with valid data");
        await login.loginwithCreds(logindata.username, logindata.password); // Login first
        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

        await addEmployee.navigateToAddEmployee();                          // Navigate to Add Employee
        const empId = await addEmployee.fillEmployeeDetails('Akhil', 'Kumar'); // Fill form
        await addEmployee.saveEmployee();                                   // Save employee

        console.log(`✅ Employee successfully created with ID: ${empId}`);
    });

    // ================= BUZZ MODULE TESTS (Data Driven) ===================
    for (const message of MessagesList) {
        test(`Buzz: Post message → "${message}"`, async ({ page }) => {
            const login = new LoginPage(page);
            const buzz = new BuzzModulePage(page);

            console.log(`▶ Test Case: Posting message in Buzz: ${message}`);
            await login.loginwithCreds(LoginCredentials.Username, LoginCredentials.Password); // Login
            await login.loginsuccess();                                                       // Verify dashboard
            await buzz.navigateToBuzz();                                                      // Open Buzz
            await buzz.postMessage(message);                                                  // Post message
            await page.waitForTimeout(2000);                                                  // Observe
        });
    }

});