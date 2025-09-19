// Import Playwright test functions
const { test, expect } = require("@playwright/test")

// ✅ Test: Keyboard Actions
test("Keyboard Actions", async ({ page }) => {

    // Step 1: Open the target website
    await page.goto("https://gotranscript.com/text-compare")

    // Step 2: Type text into the first textarea
    await page.fill("[name='text1']", "welcome to automation")

    // Alternative way (same as above):
    // await page.locator("[name='text1']").fill("welcome to automation")

    // Step 3: Press CTRL + A → Select all text in first textarea
    await page.keyboard.press("Control+A")

    // Step 4: Press CTRL + C → Copy the selected text
    await page.keyboard.press("Control+C")

    // Step 5: Press TAB → Move cursor focus to the next textarea
    await page.keyboard.down("Tab")   // Key down (press)
    await page.keyboard.up("Tab")     // Key up (release)

    // Step 6: Press CTRL + V → Paste the copied text into second textarea
    await page.keyboard.press("Control+V")

    // ✅ Optional verification: check if text got pasted correctly
    const pastedText = await page.inputValue("[name='text2']")
    await expect(pastedText).toBe("welcome to automation")
})


test("Keyboard Actions using pressSequentially", async ({ page }) => {

    await page.goto("https://gotranscript.com/text-compare")

    // Focus inside the first textbox and type text sequentially
    await page.locator("[name='text1']").pressSequentially("welcome to automation")

    // CTRL + A (select all text)
    await page.keyboard.press("Control+A")

    // CTRL + C (copy the text)
    await page.keyboard.press("Control+C")

    // TAB → move to second textbox
    await page.keyboard.press("Tab")

    // CTRL + V (paste the text)
    await page.keyboard.press("Control+V")

    // ✅ Verify pasted text
    const pastedText = await page.inputValue("[name='text2']")
    await expect(pastedText).toBe("welcome to automation")

    await page.waitForTimeout(2000)  // just to see result during run
})



/*
🔑 Key Notes:

page.keyboard.press() → Simulates pressing a key or key combination.

Example: "Control+A", "Enter", "ArrowDown".

page.keyboard.down() & page.keyboard.up()

Useful when you want to simulate holding a key down and releasing later.

Here you used it for Tab (but you could also just do page.keyboard.press("Tab")).

Verification step (expect) → Always good practice to confirm that the text was actually pasted into the second textbox.

locator.pressSequentially("text") → types each character into the input, like a human typing.

It’s different from .fill() because .fill() replaces the entire text instantly.

You can also add options like { delay: 200 } to slow down typing (mimic human speed).

*/