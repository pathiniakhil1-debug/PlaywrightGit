// ✅ Import Playwright
import { test, expect } from '@playwright/test';

// 👉 1. Tell Playwright to use auth.json (cookies + localStorage)
//    This means test will already be logged in
test.use({ storageState: 'auth.json' });

test('Add Employee with Saved Auth', async ({ page }) => {
  
  // 👉 2. Directly go to Add Employee page (no login required now)
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee");

  // 👉 3. Fill First Name field
  await page.locator("//input[@placeholder='First Name']").fill("Akhil");

  // 👉 4. Fill Last Name field
  await page.locator("//input[@placeholder='Last Name']").fill("Kumar");

  // 👉 5. Generate random Employee ID (4 digits)
  const randomNumber = Math.floor(1000 + Math.random() * 9000);

  // 👉 6. Enter generated Employee ID
  await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(randomNumber.toString());

  // 👉 7. Click Save button
  await page.locator("//button[@type='submit']").click();

  // 👉 8. Validate that the new employee profile page is opened
  await expect(page).toHaveURL(/pim\/employee/);
  
});
