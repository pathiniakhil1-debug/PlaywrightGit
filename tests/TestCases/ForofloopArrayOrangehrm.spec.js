import { test, expect } from '@playwright/test';

const Employees = [
    { firstname: 'Akhil', lastname: 'Kumar', id: 'A001' },
    { firstname: 'Siva', lastname: 'Krishna', id: 'A002' },
    { firstname: 'Pavan', lastname: 'Reddy', id: 'A003' },
];

for (const emp of Employees) {
    test(`Add employee - ${emp.firstname} ${emp.lastname} ${emp.id}`, async ({ page }) => {
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        await page.locator("//input[@placeholder='Username']").fill('Admin');
        await page.locator("//input[@placeholder='Password']").fill('admin123');
        await page.locator("//button[contains(.,'Login')]").click();

        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

        // Navigate to PIM
        await page.locator("(//li[@class='oxd-main-menu-item-wrapper']//a)[2]").click();
        await page.locator("//a[normalize-space(text())='Add Employee']").click();

        // Fill employee details
        await page.locator("//input[@placeholder='First Name']").fill(emp.firstname);
        await page.locator("//input[@placeholder='Last Name']").fill(emp.lastname);
        await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(emp.id);

        // Submit
        await page.locator("//button[@type='submit']").click();

        // Add your assertion to confirm employee addition if needed
        await page.close();
    });
}



// import { test, expect } from '@playwright/test';

// // ✅ Declare employee details separately
// const emp1 = { firstname: 'Akhil', lastname: 'Kumar', id: 'A001' };
// const emp2 = { firstname: 'Siva', lastname: 'Krishna', id: 'A002' };
// const emp3 = { firstname: 'Pavan', lastname: 'Reddy', id: 'A003' };

// // ✅ Push them into an Employees array for looping
// const Employees = [emp1, emp2, emp3];

// // ✅ Loop to generate separate tests for each employee
// for (const emp of Employees) {
//     test(`Add employee - ${emp.firstname} ${emp.lastname} (${emp.id})`, async ({ page }) => {
//         await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

//         await page.locator("//input[@placeholder='Username']").fill('Admin');
//         await page.locator("//input[@placeholder='Password']").fill('admin123');
//         await page.locator("//button[contains(.,'Login')]").click();

//         await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

//         // Navigate to PIM > Add Employee
//         await page.locator("(//li[@class='oxd-main-menu-item-wrapper']//a)[2]").click();
//         await page.locator("//a[normalize-space(text())='Add Employee']").click();

//         // Fill employee details
//         await page.locator("//input[@placeholder='First Name']").fill(emp.firstname);
//         await page.locator("//input[@placeholder='Last Name']").fill(emp.lastname);
//         await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(emp.id);

//         // Submit the form
//         await page.locator("//button[@type='submit']").click();

//         // ✅ Optional: Confirm employee creation by checking the URL or success toast
//         await expect(page.locator("//h6")).toHaveText("Personal Details");

//         await page.close();
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
