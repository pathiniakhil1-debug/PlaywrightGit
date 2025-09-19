import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/OrangeHRM/loginpage.js';
import { AddEmployeePage } from '../../pages/OrangeHRM/addemployees.js';
import logindata from '../../test-data/login.json';

// ================== SINGLE TEST SUITE ==================
test.describe('🧪 OrangeHRM Test Suite - Login & Add Employee', () => {

  // ✅ Runs once before all tests
  test.beforeAll(async () => {
    console.log(">>> Starting OrangeHRM Test Suite...");
  });

  // ✅ Runs once after all tests
  test.afterAll(async () => {
    console.log(">>> Finished OrangeHRM Test Suite.");
  });

  // ✅ Runs before each test
  test.beforeEach(async ({ page }) => {
    console.log(">>> Launching OrangeHRM Application");
    const login = new LoginPage(page);
    await login.launchtheApplication();
  });

  // ✅ Runs after each test
  test.afterEach(async ({ page }) => {
    console.log(">>> Test Finished. Closing page...");
    await page.close();
  });

  // ================= LOGIN TESTS ===================
  test('Login with valid creds', async ({ page }) => {
    const login = new LoginPage(page);

    console.log("▶ Test Case: Login with VALID credentials");
    await login.loginwithCreds(logindata.username, logindata.password);
    await login.loginsuccess();
  });

  test('Login with invalid creds', async ({ page }) => {
    const login = new LoginPage(page);

    console.log("▶ Test Case: Login with INVALID credentials");
    await login.loginwithCreds(logindata.invalidusername, logindata.invalidpassword);
    await login.loginError();
  });

  // ================= ADD EMPLOYEE TEST ===================
  test('Add Employee with valid data', async ({ page }) => {
    const login = new LoginPage(page);
    const addEmployee = new AddEmployeePage(page);

    console.log("▶ Test Case: Add Employee with valid data");

    // ✅ Login first
    await login.loginwithCreds(logindata.username, logindata.password);
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

    // ✅ Navigate and add employee
    await addEmployee.navigateToAddEmployee();
    const empId = await addEmployee.fillEmployeeDetails('Akhil', 'Kumar');
    await addEmployee.saveEmployee();

    console.log(`✅ Employee successfully created with ID: ${empId}`);
  });
});