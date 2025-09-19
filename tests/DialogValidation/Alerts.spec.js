// Importing 'test' and 'expect' functions from Playwright test library
const { test, expect } = require("@playwright/test")

// ===================== TEST 1: Simple Alert Box =====================
test("Alert with Ok", async ({ page }) => {

  // Step 1: Open the test automation practice page
  await page.goto("https://testautomationpractice.blogspot.com/")

  // Step 2: Listen for any dialog (alert/confirm/prompt) that appears //enabling dialog window handler
  // This will capture the dialog when it appears//enabling alert window handler
  page.on("dialog", async dialog => {

    // Step 3: Verify the dialog type is 'alert'
    expect(dialog.type()).toContain('alert')

    // Step 4: Verify the dialog message contains the expected text
    expect(dialog.message()).toContain('I am an alert box!')

    // Step 5: Accept the alert (click OK)
    await dialog.accept();
  })

  // Step 6: Click the Alert button to trigger the alert
  await page.click("//button[@id='alertBtn']")

  // Step 7: Wait 5 seconds (just to observe, not necessary for test logic)
  await page.waitForTimeout(5000)
})

// ===================== TEST 2: Confirmation Dialog =====================
// Skipping this test (won't execute) using test.skip
test.skip("Confirmation Dialogue - Alert with ok and cancel", async ({ page }) => {

  // Step 1: Open the test automation practice page
  await page.goto("https://testautomationpractice.blogspot.com/")

  // Step 2: Listen for confirmation dialog
  page.on("dialog", async dialog => {

    // Step 3: Verify dialog type is 'confirm'
    expect(dialog.type()).toContain('confirm')

    // Step 4: Verify dialog message contains expected text
    expect(dialog.message()).toContain('Press a button!')

    // Step 5: Accept the confirmation (click OK)
    await dialog.accept();

    // Alternative: Dismiss the confirmation (click Cancel)
    // await dialog.dismiss();
  })

  // Step 6: Click the Confirm button to trigger confirmation dialog
  await page.click("//button[@id='confirmBtn']")

  // Step 7: Verify that the result text changes after clicking OK
  await expect(page.locator("#demo")).toHaveText('You pressed OK!')

  // Step 8: Wait 5 seconds for observation
  await page.waitForTimeout(5000)
})

// ===================== TEST 3: Prompt Dialog =====================
// Skipping this test (won't execute) using test.skip
test.skip("Prompt Dialogue", async ({ page }) => {

  // Step 1: Open the test automation practice page
  await page.goto("https://testautomationpractice.blogspot.com/")

  // Step 2: Listen for prompt dialog
  page.on("dialog", async dialog => {

    // Step 3: Verify dialog type is 'prompt'
    expect(dialog.type()).toContain('prompt')

    // Step 4: Verify prompt message text
    expect(dialog.message()).toContain('Please enter your name:')

    // Step 5: Verify default value in prompt
    expect(dialog.defaultValue()).toContain('Harry Potter')

    // Step 6: Accept prompt with custom input value "John"
    await dialog.accept("John");
  })

  // Step 7: Click the Prompt button to open prompt dialog
  await page.click("//button[@id='promptBtn']")

  // Step 8: Verify that the result text contains the input value
  await expect(page.locator("#demo")).toHaveText('Hello John! How are you today?')

  // Step 9: Wait 5 seconds for observation
  await page.waitForTimeout(5000)
})


/*
===================== Dialog Types in Playwright =====================

Playwright can interact with the web page dialogs such as alert, confirm, prompt as well 
as beforeunload confirmation. For print dialogs, see Print.

alert(), confirm(), prompt() dialogs
By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them. 
However, you can register a dialog handler before the action that triggers the dialog to 
either dialog.accept() or dialog.dismiss() it.

page.on('dialog', dialog => dialog.accept());
await page.getByRole('button').click();

1. Alert

A simple dialog box with only an OK button.

Triggered in JS with alert("message").

Example:

page.on('dialog', async dialog => {
  console.log(dialog.message());  // prints the alert text
  await dialog.accept();          // clicks OK
});

2. Confirm

A dialog box with OK and Cancel buttons.

Triggered in JS with confirm("message").

You can either accept or dismiss it.

Example:

page.on('dialog', async dialog => {
  console.log(dialog.message());  
  await dialog.accept();   // clicks OK
  // await dialog.dismiss();  // clicks Cancel
});

3. Prompt

A dialog box that asks the user to input text, with OK and Cancel buttons.

Triggered in JS with prompt("message", "default").

Example:

page.on('dialog', async dialog => {
  console.log(dialog.message());  
  await dialog.accept('Playwright Test');  // enters text + clicks OK
  // await dialog.dismiss();  // clicks Cancel
});

4. Dialog (General Term in Playwright)

Playwright uses dialog as a generic event to capture all 3 types above.

So, whenever an alert, confirm, or prompt shows up, Playwright emits a dialog event.

You can check the type with dialog.type():

"alert"

"confirm"

"prompt"

Example:

page.on('dialog', async dialog => {
  console.log(`Type: ${dialog.type()}`);  
  console.log(`Message: ${dialog.message()}`);  
  await dialog.accept();
});

*/