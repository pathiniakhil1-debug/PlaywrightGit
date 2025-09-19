// Import Playwright and Faker
import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

// ✅ Set a fixed seed → faker generates same data every time
faker.seed(123);

// -------------------[ STEP 1: Generate Employees with Loop ]-------------------
const employees = [];
for (let i = 0; i < 3; i++) {
    employees.push({
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        empId: faker.string.numeric(4),
        email: faker.internet.email()
    });
}

// -------------------[ STEP 2: Create a test for each employee ]-------------------
for (const emp of employees) {
    test(`Add employee - ${emp.firstname} ${emp.lastname}`, async ({ page }) => {

        // -------------------[ Login ]-------------------
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await page.locator("input[name='username']").fill("Admin");
        await page.locator("input[type='password']").fill("admin123");
        await page.locator("button[type='submit']").click();
        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

        // -------------------[ Navigate to PIM ]-------------------
        await page.locator("(//li[@class='oxd-main-menu-item-wrapper']//a)[2]").click();

        // -------------------[ Add Employee ]-------------------
        await page.locator("//a[normalize-space(text())='Add Employee']").click();
        await page.locator("//input[@placeholder='First Name']").fill(emp.firstname);
        await page.locator("//input[@placeholder='Last Name']").fill(emp.lastname);
        await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(emp.empId);

        // -------------------[ Save Employee ]-------------------
        await page.locator("//button[@type='submit']").click();

        // ✅ Log generated test data
        console.log(`✅ Employee Added: ${emp.firstname} ${emp.lastname} | ID: ${emp.empId} | Email: ${emp.email}`);
    });
}


// Got it 👍 this error happens because of the way Playwright spawns workers in parallel.

// Here’s what’s happening in your code:

// You generate employees with faker outside the test loop.

// But each Playwright worker (parallel process) re-imports the file.

// Since faker generates different names each time, the test titles don’t match between the main process and the worker process.

// That’s why Playwright says:

// Test not found in the worker process. Make sure test title does not change.

// faker.seed(123) → same values every time.

// Test title is not based on faker data → instead: "Add employee 1", "Add employee 2", etc.

// This avoids mismatch between main process & worker.

// Faker-generated data is only used inside test logic, not in the test title.
