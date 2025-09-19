import { test } from '@playwright/test';
import { LoginPage } from '../../pages/OrangeHRM2/loginpage.js';
import { AdminPage } from '../../pages/OrangeHRM2/adminpage.js';
import { faker } from '@faker-js/faker';

test('Login and add Job Title using POM with Faker', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const adminPage = new AdminPage(page);

    // ✅ Step 1: Go to login
    await loginPage.gotoLoginPage();
    await loginPage.login('Admin', 'admin123');
    await loginPage.verifyDashboard();

    // ✅ Step 2: Navigate to Job Titles
    await adminPage.navigateToJobTitles();

    // ✅ Step 3: Generate random job title
    const jobTitle = faker.person.jobTitle();  // e.g. "Lead Solutions Engineer"

    // ✅ Step 4: Add job title
    await adminPage.addJobTitle(jobTitle);
});
