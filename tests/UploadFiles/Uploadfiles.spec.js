const { test, expect } = require('@playwright/test');   // Import Playwright test and expect assertion library

// --------------------------------------------------------------------------------------
// ✅ Test 1: File Upload using relative path (from Playwright project folders)
// --------------------------------------------------------------------------------------
test("File Upload from Playwright folders", async ({ page }) => {

    // Step 1: Open the practice website containing file upload field
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Step 2: Wait for the file input element to appear on the page
    await page.waitForSelector("#singleFileInput");

    // Step 3: Upload file using a RELATIVE PATH from inside the project folders
    // (Here, we assume "tests/Visualtestcomparision.spec.js-snapshots/element-chromium-win32.png" exists in your repo)
    await page.setInputFiles("#singleFileInput", "tests/Visualtestcomparision.spec.js-snapshots/element-chromium-win32.png");

    // Step 4: Verify that the uploaded file name contains "element-chromium-win32.png"
    await expect(await page.inputValue("#singleFileInput")).toContain("element-chromium-win32.png");

    // Step 5: Pause for 2 seconds just to visually confirm upload in browser (not needed in real CI/CD)
    await page.waitForTimeout(2000);
});


// --------------------------------------------------------------------------------------
// ✅ Test 2: File Upload using Absolute Path with Escaped Backslashes (Windows style)
// --------------------------------------------------------------------------------------
test("File Upload - Absolute Path with Escaped Backslashes", async ({ page }) => {

    // Step 1: Open the practice website containing file upload field
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Step 2: Wait until file input element is visible
    await page.waitForSelector("#singleFileInput");

    // Step 3: Upload file using an ABSOLUTE PATH with escaped backslashes (\\) for Windows
    await page.setInputFiles("#singleFileInput", "C:\\Users\\pathi\\Downloads\\javascript_brief_notes.pdf");

    // Step 4: Assert that file name is correctly uploaded by checking input value
    await expect(await page.inputValue("#singleFileInput")).toContain("javascript_brief_notes.pdf");

    // Step 5: Wait 2 seconds for visual confirmation
    await page.waitForTimeout(2000);
});


// --------------------------------------------------------------------------------------
// ✅ Test 3: File Upload using Absolute Path with Forward Slashes (Cross-Platform)
// --------------------------------------------------------------------------------------
// Define a test case named "File Upload - Upload and Remove File"
test("File Upload - Upload and Remove File", async ({ page }) => {

    // Step 1: Navigate to the test automation practice page in the browser
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Step 2: Wait until the file input element with id='singleFileInput' is visible on the page
    await page.waitForSelector("#singleFileInput");

    // Step 3: Upload a file from local system to the input field
    // Here we provide an absolute path (using forward slashes for cross-platform support)
    await page.setInputFiles("#singleFileInput", "C:/Users/pathi/Downloads/javascript_brief_notes.pdf");

    // Step 4: Validate that the file has been uploaded by checking the input field’s value
    // The file name "javascript_brief_notes.pdf" should appear in the input
    await expect(await page.inputValue("#singleFileInput"))
        .toContain("javascript_brief_notes.pdf");

    // Step 5: Remove the uploaded file by passing an empty array [] to setInputFiles()
    // This clears the file input field
    await page.setInputFiles("#singleFileInput", []);

    // Step 6: Verify that the file input field is now empty (no file attached)
    await expect(await page.inputValue("#singleFileInput"))
        .toBe("");

    // Step 7: Wait for 2 seconds (useful for visually observing the test during execution)
    await page.waitForTimeout(2000);
});

