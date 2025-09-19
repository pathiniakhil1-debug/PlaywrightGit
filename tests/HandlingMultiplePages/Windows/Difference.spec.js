// 🔹 Difference between browser.newPage() and browser.newContext()
// 1. browser.newPage()

// Directly opens a new page (tab) in the default browser context.

// All pages share the same cookies, storage, cache, and session.

// Example: If you log in on one page, another page opened with browser.newPage() will already be logged in.

// ✅ Good for simple tests where shared state is fine.

import{test,expect} from "@playwright/test"

test("login using newPage", async ({ browser }) => {
  const page = await browser.newPage();   // directly open new tab
  await page.goto("https://www.saucedemo.com/v1/");
  await page.fill("//input[@placeholder='Username']", "standard_user");
  await page.fill("//input[@placeholder='Password']", "secret_sauce");
  await page.click("(//div[@class='login-box']//input)[3]");
  await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html");
  await page.close();
});

// 2. browser.newContext()

// Creates a brand-new isolated browser context (like a fresh incognito profile)./ Its like a seperate user/browser

// You then open a page inside that context (context.newPage()).

// Each context is completely independent → no cookie or session sharing.

// ✅ Best for parallel test execution and when you want tests isolated.

test("login using newContext", async ({ browser }) => {
  const context = await browser.newContext();   // isolated browser profile
  const page = await context.newPage();         // open tab in this profile
  await page.goto("https://www.saucedemo.com/v1/");
  await page.fill("//input[@placeholder='Username']", "standard_user");
  await page.fill("//input[@placeholder='Password']", "secret_sauce");
  await page.click("(//div[@class='login-box']//input)[3]");
  await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html");
  await context.close(); // closes profile + tab
});


// 👉 Rule of thumb:

// Use newPage() if tests are simple, sequential, and can share login/session./useful for testing multiple tabs in the same login session

// Use newContext() for independent, parallel, production-like tests./perfect for parallel login session or simulating different users

