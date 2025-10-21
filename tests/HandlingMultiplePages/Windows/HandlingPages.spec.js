// Import Playwright test, assertion library, and chromium browser
const { test, expect, chromium } = require('@playwright/test');

// ====================================================================================
// ✅ Test 1: Handling Pages/Windows - Opening multiple pages in the same browser context
// ====================================================================================
test("Handling Pages/Windows", async () => {

    const browser = await chromium.launch();   // Launch a new Chromium browser instance

    const context = await browser.newContext();   // Create a new browser context (like a fresh browser profile)

    const page1 = await context.newPage();   // Open first page (tab) in the context

    const page2 = await context.newPage();   // Open second page (tab) in the same context

    const allPages = context.pages();   // Get all open pages in the context

    expect(allPages.length).toBe(2);   // Assertion: Ensure 2 pages are open

    console.log("Number of pages in context: ", allPages.length);   // Print number of open pages in console

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");   // Navigate page1 to OrangeHRM login

    await expect(page1).toHaveTitle("OrangeHRM");   // Verify title of page1 is "OrangeHRM"

    await page2.goto("https://www.orangehrm.com/");   // Navigate page2 to OrangeHRM official site

    await expect(page2).toHaveTitle("Human Resources Management Software | HRMS | OrangeHRM");   // Verify page2 title is correct

})


// ====================================================================================
// ✅ Test 2: Handling Multiple Pages/Windows - New window opens after link click
// ====================================================================================
test("Handling Multiple Pages/Windows", async () => {

    const browser = await chromium.launch();   // Launch a new Chromium browser

    const context = await browser.newContext();   // Create new context (isolated session)

    const page1 = await context.newPage();   // Open the first page (main window)

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");   // Navigate to OrangeHRM login page
  
    await expect(page1).toHaveTitle("OrangeHRM");   // Validate the title of page1

    const pagePromise = context.waitForEvent('page');   // Prepare to wait for a new page (popup/new tab)

    await page1.locator("//a[@href='http://www.orangehrm.com']").click();   // Click link on page1 that opens new tab/window

    const newPage = await pagePromise;   // Capture the new page that opened after click

    await expect(newPage).toHaveTitle("Human Resources Management Software | HRMS | OrangeHRM");   // Validate the title of new page

    await page1.waitForTimeout(3000);   // Wait 3 seconds (for observation on page1)

    await newPage.waitForTimeout(3000);   // Wait 3 seconds (for observation on newPage)

    await browser.close();   // Close the browser after test execution

});


/*
🔹 What is a Browser Context in Playwright?

Think of a browser context as a separate browser profile inside the same browser instance.

Each context is like an isolated environment:

Own cookies

Own local storage/session storage

Own cache

Own pages (tabs/windows)

This means you can create multiple contexts inside one browser instance without them interfering with each other.

👉 Example:

Context 1 → A user logs in as an Admin.

Context 2 → Another user logs in as a Normal User.

Both sessions remain isolated (no cookie sharing).

🔹 context.newPage()

This creates a new page (tab/window) inside that specific context.

Example:
const browser = await chromium.launch();       // Start a browser
const context1 = await browser.newContext();   // Create context 1
const page1 = await context1.newPage();        // Page inside context 1

const context2 = await browser.newContext();   // Create context 2
const page2 = await context2.newPage();        // Page inside context 2


👉 page1 and page2 are completely isolated (different sessions).
Even if both go to https://example.com, they won’t share cookies or login state.

🔹 Use Cases of newContext() and newPage()

Multi-user Testing (Parallel Sessions)

Simulate two different users logging into the same app without interfering.

const context1 = await browser.newContext();
const user1 = await context1.newPage();
await user1.goto("https://app.com/login");
await user1.fill("#username", "Admin");

const context2 = await browser.newContext();
const user2 = await context2.newPage();
await user2.goto("https://app.com/login");
await user2.fill("#username", "Guest");


Isolated Test Cases

Each test runs in its own clean session (Playwright does this automatically when you use test() fixture).

Prevents one test’s cookies/local storage from leaking into another.

Popup / New Tab Handling

Sometimes clicking a link opens a new tab.

That tab belongs to the same context as the parent page.

const page = await context.newPage();
const [popup] = await Promise.all([
  context.waitForEvent("page"),          // Wait for popup
  page.click("#open-new-tab")            // Action that opens popup
]);


Cross-Browser or Multi-Role Testing

One browser context could simulate buyer, another seller.

Helps when testing workflows between multiple users.

🔹 Key Difference Between newPage() and newContext().newPage()
Command	Meaning
browser.newPage()	Opens a new page in the default context (shares cookies, storage, etc.).
context.newPage()	Opens a new page in an isolated context (separate session).

👉 Always prefer newContext().newPage() if you want isolation.

✅ Summary:

newContext() → Creates a new isolated browser session.

newPage() → Opens a tab/window inside that context.

Useful for multi-user tests, popups, and parallel execution without state leaking.

*/