const { test, expect } = require('@playwright/test');   // Import Playwright test and expect assertion library

// --------------------------------------------------------------------------------------
// ✅ Test: File Upload - Upload and Remove Multiple Files
// --------------------------------------------------------------------------------------
test("File Upload - Upload and Remove Multiple Files", async ({ page }) => {

    // Step 1: Navigate to the test automation practice page in the browser
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Step 2: Wait until the multiple file input element is visible
    await page.waitForSelector("#multipleFilesInput");

    // Step 3: Upload multiple files from local system (using forward slashes ✅)
    await page.setInputFiles("#multipleFilesInput", [
        "tests/Visualtestcomparision.spec.js-snapshots/githubpage-chromium-win32.png",
        "tests/Visualtestcomparision.spec.js-snapshots/githubpage-Google-Chrome-win32.png"
    ]);

    // ✅ Step 4: Fetch the value of the input field (contains fakepath + filenames)
    const uploadedValue = await page.inputValue("#multipleFilesInput");

    // ✅ Validate each uploaded file is included in the string
    await expect(uploadedValue).toContain("githubpage-chromium-win32.png");
    await expect(uploadedValue).toContain("githubpage-Google-Chrome-win32.png");

    // Step 5: Remove the uploaded files (clear the input field)
    await page.setInputFiles("#multipleFilesInput", []);

    // Step 6: Verify the file input field is now empty (no file attached)
    await expect(await page.$eval("#multipleFilesInput", input => input.files.length))
        .toBe(0);

    // Step 7: Wait for 2 seconds (for observation)
    await page.waitForTimeout(2000);
});


