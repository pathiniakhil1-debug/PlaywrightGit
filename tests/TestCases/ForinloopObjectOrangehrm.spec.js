// Import 'test' and 'expect' from Playwright Test module
import { test, expect } from '@playwright/test';

// Define an Employee object containing three employee data sets
// Each has firstname, lastname, and id
const Employee = {
    emp1: { firstname: 'Akhil', lastname: 'kumar', id: 'A005' },
    emp2: { firstname: 'Siva', lastname: 'krisha', id: 'A006' },
    emp3: { firstname: 'Pavan', lastname: 'reddy', id: 'A007' },
};

// Loop over each key in Employee object to run a test for each employee
for (const emp in Employee) {
    // Get the current employee's details
    const key = Employee[emp];

    // Define a Playwright test for adding this employee
    test(`Adding employees - ${key.firstname}`, async ({ page }) => {

        // Step 1: Navigate to the OrangeHRM login page
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        // Step 2: Fill in the username field with 'Admin'
        await page.locator("//input[@placeholder='Username']").fill('Admin');

        // Step 3: Fill in the password field with 'admin123'
        await page.locator("input[placeholder='Password']").fill("admin123");

        // Step 4: Click the Login button
        await page.locator("//button[contains(.,'Login')]").click();

        // Step 5: Verify navigation to the dashboard page after login
        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

        // Step 6: Navigate to the PIM (Employee Management) module
        await page.locator("(//li[@class='oxd-main-menu-item-wrapper']//a)[2]").click();

        // Step 7: Click on the "Add Employee" button
        await page.locator("//a[normalize-space(text())='Add Employee']").click();

        // Step 8: Fill in the first name field using the current employee's first name
        await page.locator("//input[@placeholder='First Name']").fill(key.firstname);

        // Step 9: Fill in the last name field using the current employee's last name
        await page.locator("//input[@placeholder='Last Name']").fill(key.lastname);

        // Step 10: Fill in the employee ID field using the current employee's ID
        await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(key.id);

        // Step 11: Click the Submit button to add the employee
        await page.locator("//button[@type='submit']").click();

        // Optionally: You can add assertions to verify successful addition (e.g., success message or employee presence)
    });
}



// import { test, expect } from '@playwright/test';
// const Employee = {
//     emp1: { firstname: 'Akhil', lastname: 'kumar', id: 'A001' },
//     emp2: { firstname: 'Siva', lastname: 'krisha', id: 'A002' },
//     emp3: { firstname: 'Pavan', lastname: 'reddy', id: 'A003' },
// };
// for(const emp in Employee){
//     const key= Employee[emp];
//     test(`Adding employees - ${key.firstname})`, async ({ page }) => {
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
//     await page.locator("//input[@placeholder='Username']").fill('Admin')
//     await page.locator("input[placeholder='Password']").fill("admin123")
//     await page.locator("//button[contains(.,'Login')]").click()
//     await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
//     await page.locator("(//li[@class='oxd-main-menu-item-wrapper']//a)[2]").click()
//     await page.locator("//a[normalize-space(text())='Add Employee']").click()
//     await page.locator("//input[@placeholder='First Name']").fill(key.firstname)
//     await page.locator("//input[@placeholder='Last Name']").fill(key.lastname)
//     await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(key.id)
//     await page.locator("//button[@type='submit']").click()    
// });
// }






// import { test, expect } from '@playwright/test';

// const Employees = {
//     emp1: { firstname: 'Akhil', lastname: 'kumar', id: 'A001' },
//     emp2: { firstname: 'Siva', lastname: 'krisha', id: 'A002' },
//     emp3: { firstname: 'Pavan', lastname: 'reddy', id: 'A003' },
// };

// for (const [key, emp] of Object.entries(Employees)) {
//     test(`Add employee - ${emp.firstname} ${emp.lastname}`, async ({ page }) => {
//         await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

//         await page.locator("//input[@placeholder='Username']").fill('Admin');
//         await page.locator("//input[@placeholder='Password']").fill('admin123');
//         await page.locator("//button[contains(.,'Login')]").click();

//         await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

//         await page.locator("(//li[@class='oxd-main-menu-item-wrapper']//a)[2]").click();
//         await page.locator("//a[normalize-space(text())='Add Employee']").click();

//         await page.locator("//input[@placeholder='First Name']").fill(emp.firstname);
//         await page.locator("//input[@placeholder='Last Name']").fill(emp.lastname);
//         await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(emp.id);

//         await page.locator("//button[@type='submit']").click();

//         // You may validate successful addition here
//         // e.g., await expect(page.locator('selector_for_success_message')).toBeVisible();
//     });
// }

// import { test, expect } from '@playwright/test';

// const Employee = {
//     emp1: { firstname: 'Akhil', lastname: 'kumar', id: 'A001' },
//     emp2: { firstname: 'Siva', lastname: 'krisha', id: 'A002' },
//     emp3: { firstname: 'Pavan', lastname: 'reddy', id: 'A003' },
// };

// for (const empKey in Employee) {
//     const emp = Employee[empKey];

//     test(`Add employee - ${emp.firstname} ${emp.lastname} (${emp.id})`, async ({ page }) => {
//         await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

//         await page.locator("//input[@placeholder='Username']").fill('Admin');
//         await page.locator("//input[@placeholder='Password']").fill("admin123");
//         await page.locator("//button[contains(.,'Login')]").click();

//         await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

//         await page.locator("(//li[@class='oxd-main-menu-item-wrapper']//a)[2]").click();
//         await page.locator("//a[normalize-space(text())='Add Employee']").click();

//         await page.locator("//input[@placeholder='First Name']").fill(emp.firstname);
//         await page.locator("//input[@placeholder='Last Name']").fill(emp.lastname);
//         await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(emp.id);

//         await page.locator("//button[@type='submit']").click();

//         // Optional: Confirm employee addition (can be refined as needed)
//         await expect(page.locator("//h6")).toHaveText("Personal Details");

//         await page.close();
//     });
// }




// import { test, expect } from '@playwright/test';

// const Employees = [
//     { firstname: 'Akhil', lastname: 'Kumar', id: 'A001' },
//     { firstname: 'Siva', lastname: 'Krishna', id: 'A002' },
//     { firstname: 'Pavan', lastname: 'Reddy', id: 'A003' },
// ];

// for (const emp of Employees) {
//     test(`Add employee - ${emp.firstname} ${emp.lastname}`, async ({ page }) => {
//         await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

//         await page.locator("//input[@placeholder='Username']").fill('Admin');
//         await page.locator("//input[@placeholder='Password']").fill('admin123');
//         await page.locator("//button[contains(.,'Login')]").click();

//         await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

//         // Navigate to PIM
//         await page.locator("(//li[@class='oxd-main-menu-item-wrapper']//a)[2]").click();
//         await page.locator("//a[normalize-space(text())='Add Employee']").click();

//         // Fill employee details
//         await page.locator("//input[@placeholder='First Name']").fill(emp.firstname);
//         await page.locator("//input[@placeholder='Last Name']").fill(emp.lastname);
//         await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(emp.id);

//         // Submit
//         await page.locator("//button[@type='submit']").click();

//         // Add your assertion to confirm employee addition if needed
//     });
// }


// const Employee = {
//     emp1: { firstname: 'Akhil', lastname: 'Kumar', id: 'A001' },
//     emp2: { firstname: 'Siva', lastname: 'Krishna', id: 'A002' },
//     emp3: { firstname: 'Pavan', lastname: 'Reddy', id: 'A003' },
// };
// for (const key in Employee) {
//     const emp = Employee[key];
//     console.log(emp.firstname, emp.lastname, emp.id);
// }
// Akhil Kumar A001
// Siva Krishna A002
// Pavan Reddy A003