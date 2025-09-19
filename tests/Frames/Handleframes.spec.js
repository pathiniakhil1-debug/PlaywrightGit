const { test, expect } = require("@playwright/test")

// ✅ Test 1: Count total frames on the page
test("Total Frames in a Page", async ({ page }) => {

    // Navigate to the demo page containing frames
    await page.goto("https://ui.vision/demo/webtest/frames/")

    // Get all frames from the page (main frame + child frames)
    const allframes = await page.frames()

    // Print the total number of frames in the page
    console.log("Number of frames:", allframes.length)

    // Just waiting for observation (not required in real tests)
    await page.waitForTimeout(5000);

})


// ✅ Test 2: Handling frames using Name / URL
test("Handling Frames in a Page Using Name and URL", async ({ page }) => {

    await page.goto("https://ui.vision/demo/webtest/frames/")

    // Approach 1: If frame has a name attribute → page.frame({ name: 'frameName' })

    // Approach 2: If frame has a unique URL → page.frame({ url: 'frame_url' })
    const frame1 = await page.frame({ 
        url: 'https://ui.vision/demo/webtest/frames/frame_1.html' 
    })  

    // Fill text into an input box inside the frame
    // NOTE: Here locator is written as XPath string
    await frame1.fill("//input[@name='mytext1']", 'Hello')

    await page.waitForTimeout(2000);

})


// ✅ Test 3: Handling frames using FrameLocator (recommended way)
test("Handling Frames in a Page Using FrameLocator", async ({ page }) => {

    await page.goto("https://ui.vision/demo/webtest/frames/")

    // frameLocator points directly to an iframe element
    // and lets us interact with elements inside it
    const inputBox = await page
        .frameLocator("//frame[@src='frame_1.html']")  // locate iframe by XPath
        .locator("//input[@name='mytext1']")           // locate input element inside iframe

    // Type text into the input box inside the iframe
    await inputBox.fill("Hello")

    await page.waitForTimeout(2000);

})


/*

In Playwright, a frame is basically an <iframe> or a child browsing context inside a page.
Sometimes web pages embed content from other sources (ads, widgets, forms, etc.) 
in iframes, and Playwright gives you tools to handle them.

🔹 1. Accessing Frames

Every page has a main frame and possibly child frames.

const frames = page.frames();
console.log(frames.length);  // shows number of frames on the page


Main frame → the top-level document

Child frames → any <iframe> inside

🔹 2. Get a Frame by Name / URL
const frame = page.frame({ name: 'frameName' });   // by name attribute
const frameByUrl = page.frame({ url: /.*iframe-page.*/ //});  // by URL pattern
/*
🔹 3. Interacting with Frame Elements

Once you have the frame, you can use it like page:

const frame = page.frame({ name: 'myFrame' });
await frame.click('#login-button');
await frame.fill('#username', 'admin');

🔹 4. Example – Handle Nested iFrames
import { test, expect } from '@playwright/test';

test('iframe handling', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/iframe');

  // Get frame using locator (recommended way)
  const frameLocator = page.frameLocator('#mce_0_ifr');

  // Now interact with elements inside iframe
  await frameLocator.locator('#tinymce').fill('Hello from Playwright');
});


👉 Here, Playwright provides frameLocator() (newer and better) instead of just page.frame().
It auto-waits for the frame and element inside it.

🔹 5. frameLocator vs frame

frameLocator → recommended, works like locator and auto-waits.

frame → more manual, useful when you want direct control.

Example with frameLocator:

await page.frameLocator('#frameID').locator('button').click();


✅ Summary:

Use page.frames() to see all frames.

Use page.frame() to get a specific one.

Prefer frameLocator() for easy and reliable element handling inside iframes.

*/

