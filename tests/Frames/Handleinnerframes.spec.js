const { test, expect } = require("@playwright/test")

test("InnerFrames", async ({ page }) => {

    // Step 1: Navigate to the page containing multiple frames
    await page.goto("https://ui.vision/demo/webtest/frames/")

    // Step 2: Get the 3rd frame using its URL
    // Each frame has its own source URL (frame_1.html, frame_2.html, frame_3.html, etc.)
    const frame3 = await page.frame({ 
        url: 'https://ui.vision/demo/webtest/frames/frame_3.html' 
    })

    // Step 3: Inside frame_3, locate the input box by its name and type "Welcome"
    await frame3.locator("[name='mytext3']").fill("Welcome")

    // ---------------- Handling Nested Frame ---------------- //

    // Step 4: frame_3 itself contains another <iframe> (a child frame)
    // Playwright allows you to fetch all child frames of a frame
    const childFames = await frame3.childFrames()

    // Step 5: Interact with the first child frame (childFames[0])
    // Here we locate a checkbox element inside the nested iframe and check it
    await childFames[0].locator("(//div[@class='vd3tt'])[1]").check()

    // Step 6: Wait just for demo visibility (not needed in real automation)
    await page.waitForTimeout(2000);

})


/*
🔑 What’s Happening Here?

Main page loads → has multiple frames.

You grab frame_3 using page.frame({ url }).

Inside frame_3, you fill a text box.

Then you call .childFrames() on frame3 → because that frame itself contains another nested iframe.

Interact with the first child frame → check a checkbox.

*/





