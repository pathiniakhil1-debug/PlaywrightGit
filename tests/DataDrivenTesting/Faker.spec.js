// Import Playwright and Faker
import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('Add employee with Faker data', async ({ page }) => {
    // ✅ Generate random employee test data using Faker
    const firstname = faker.person.firstName();              // e.g. "Ravi"
    const lastname = faker.person.lastName();                // e.g. "Sharma"
    const empId = faker.string.numeric(4);                   // e.g. "4821"
    const email = faker.internet.email({ firstName: firstname, lastName: lastname }); // e.g. "ravi.sharma@gmail.com"

    // -------------------[ STEP 1: Login ]-------------------
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator("input[name='username']").fill("Admin");
    await page.locator("input[type='password']").fill("admin123");
    await page.locator("button[type='submit']").click();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

    // -------------------[ STEP 2: Navigate to PIM ]-------------------
    await page.locator("(//li[@class='oxd-main-menu-item-wrapper']//a)[2]").click();

    // -------------------[ STEP 3: Add Employee ]-------------------
    await page.locator("//a[normalize-space(text())='Add Employee']").click();
    await page.locator("//input[@placeholder='First Name']").fill(firstname);
    await page.locator("//input[@placeholder='Last Name']").fill(lastname);
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(empId);

    // -------------------[ STEP 4: Save Employee ]-------------------
    await page.locator("//button[@type='submit']").click();

    // ✅ (Optional) Log the generated test data in console
    console.log(`✅ Employee Added: ${firstname} ${lastname} | ID: ${empId} | Email: ${email}`);
});



// 🧑 Person Details
// faker.person.firstName();      // "Akhil"
// faker.person.lastName();       // "Sharma"
// faker.person.fullName();       // "Akhil Sharma"
// faker.person.gender();         // "male" / "female"
// faker.person.jobTitle();       // "Software Engineer"

// 📧 Internet
// faker.internet.email();                         // "akhil.sharma@hotmail.com"
// faker.internet.email({ firstName: "Akhil" });   // "akhil@gmail.com"
// faker.internet.userName();                      // "akhil123"
// faker.internet.password();                      // "P@ssw0rd!"
// faker.internet.domainName();                    // "example.com"
// faker.internet.url();                           // "https://myapp.io"

// 📱 Phone Numbers
// faker.phone.number();           // "987-654-3210"
// faker.phone.number('###-###');  // "123-456"
// faker.phone.number('+91 ##########'); // "+91 9876543210"

// 📍 Location / Address
// faker.location.city();            // "Hyderabad"
// faker.location.state();           // "Telangana"
// faker.location.country();         // "India"
// faker.location.zipCode();         // "500081"
// faker.location.streetAddress();   // "45 MG Road"

// 🔢 Numbers & Strings
// faker.string.numeric(4);      // "4821" (string of digits)
// faker.string.alpha(5);        // "kdjhf" (random letters)
// faker.number.int(1000);       // 532  (integer 0–1000)
// faker.number.float(2);        // 45.67 (float with 2 decimals)

// 🏢 Company
// faker.company.name();          // "Tech Solutions Pvt Ltd"
// faker.company.buzzPhrase();    // "integrate innovative synergies"
// faker.company.catchPhrase();   // "Empowering business excellence"

// 📅 Date & Time
// faker.date.past();          // 2022-08-20T10:15:30.000Z
// faker.date.future();        // 2026-03-15T08:45:12.000Z
// faker.date.recent();        // 2025-08-22T15:10:00.000Z

// ⚡ Example: Employee Object
// const employee = {
//   firstname: faker.person.firstName(),
//   lastname: faker.person.lastName(),
//   id: faker.string.numeric(4),
//   email: faker.internet.email(),
//   phone: faker.phone.number('+91 ##########'),
//   city: faker.location.city(),
//   company: faker.company.name(),
// };

// console.log(employee);


// 👉 Output:

// {
//   "firstname": "Sanjay",
//   "lastname": "Mehra",
//   "id": "4821",
//   "email": "sanjay.mehra@gmail.com",
//   "phone": "+91 9876543210",
//   "city": "Hyderabad",
//   "company": "NextGen IT Pvt Ltd"
// }


