// import { test, expect } from '@playwright/test';
// import { LoginPage } from '../../pages/OrangeHRM/loginpage.js';
// import { AddEmployeePage } from '../../pages/OrangeHRM/addemployees.js';
// import logindata from '../../test-data/login.json';

// // ================= LOGIN TESTS ===================
// test.describe('Login Test Scenarios', () => {

//     test('Login with valid creds', async ({ page }) => {
//         const login = new LoginPage(page);

//         console.log("▶ Test Case: Login with VALID credentials");
//         await login.launchtheApplication();                           // ▶ Open login page
//         await login.loginwithCreds(logindata.username, logindata.password);
//         await login.loginsuccess();                                   // ▶ Verify dashboard
//     });

//     test('Login with invalid creds', async ({ page }) => {
//         const login = new LoginPage(page);

//         console.log("▶ Test Case: Login with INVALID credentials");
//         await login.launchtheApplication();                           // ▶ Open login page
//         await login.loginwithCreds(logindata.invalidusername, logindata.invalidpassword);
//         await login.loginError();                                     // ▶ Verify error
//     });
// });

// // ================= ADD EMPLOYEE TEST ===================
// test('Add Employee with valid data', async ({ page }) => {
//     const login = new LoginPage(page);
//     const addEmployee = new AddEmployeePage(page);

//     console.log("▶ Test Case: Add Employee with valid data");
//     await login.launchtheApplication();                              // ▶ Open login page
//     await login.loginwithCreds(logindata.username, logindata.password);
//     await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

//     await addEmployee.navigateToAddEmployee();                       // ▶ Go to Add Employee
//     const empId = await addEmployee.fillEmployeeDetails('Akhil', 'Kumar'); // ▶ Fill details with random ID
//     await addEmployee.saveEmployee();                                // ▶ Save employee

//     console.log(`✅ Employee successfully created with ID: ${empId}`);
// });



import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/OrangeHRM/loginpage.js';
import { AddEmployeePage } from '../../pages/OrangeHRM/addemployees.js';
import logindata from '../../test-data/login.json';

let page;
let login;
let addEmployee;

// ================= HOOKS ===================
test.beforeEach(async ({ browser }) => {
  // Create a new page before each test
  page = await browser.newPage();
  login = new LoginPage(page);
  addEmployee = new AddEmployeePage(page);
});

test.afterEach(async () => {
  // Close the page after each test
  await page.close();
});

// ================= LOGIN TESTS ===================
test.describe('Login Test Scenarios', () => {

  test('Login with valid creds', async () => {
    console.log("▶ Test Case: Login with VALID credentials");
    await login.launchtheApplication();
    await login.loginwithCreds(logindata.username, logindata.password);
    await login.loginsuccess();
  });

  test('Login with invalid creds', async () => {
    console.log("▶ Test Case: Login with INVALID credentials");
    await login.launchtheApplication();
    await login.loginwithCreds(logindata.invalidusername, logindata.invalidpassword);
    await login.loginError();
  });

});

// ================= ADD EMPLOYEE TEST ===================
test('Add Employee with valid data', async () => {
  console.log("▶ Test Case: Add Employee with valid data");
  await login.launchtheApplication();
  await login.loginwithCreds(logindata.username, logindata.password);
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

  await addEmployee.navigateToAddEmployee();
  const empId = await addEmployee.fillEmployeeDetails('Akhil', 'Kumar');
  await addEmployee.saveEmployee();

  console.log(`✅ Employee successfully created with ID: ${empId}`);
});
