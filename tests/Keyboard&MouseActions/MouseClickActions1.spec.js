// Import Playwright test functions
const { test, expect } = require("@playwright/test")


// ✅ Test 1: Mouse Hover action
test("Mouse hover", async ({ page }) => {

    await page.goto("https://demo.opencart.com/")   // Open the OpenCart demo site

    const desktop = await page.locator("(//a[@class='nav-link dropdown-toggle'])[1]")   // Locate "Desktops" menu
    const macbook = await page.locator("(//a[@class='nav-link'])[1]")                   // Locate "MacBook" submenu

    await desktop.hover()   // Perform hover action on "Desktops" menu → opens dropdown
    await macbook.hover()   // Hover on "MacBook" option (can also click here)

    await page.waitForTimeout(2000)   // Wait for 2 seconds (demo purpose)
})


// ✅ Test 2: Mouse Double Click action
test("Mouse Double click", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")   // Open the practice site

    const btnCopy = await page.locator("//button[@ondblclick='myFunction1()']")   // Locate button with double-click event

    await btnCopy.dblclick()   // Perform double-click action on the button

    const f2 = await page.locator("#field2")   // Locate the second input field (field2)

    await expect(f2).toHaveValue('Hello World!')   // Verify that double-click copied "Hello World!" to field2

    await page.waitForTimeout(2000)   // Wait for 2 seconds
})


// ✅ Test 3: Drag and Drop (Approach 1 - Manual using mouse down/up)
test("Drag and Drop Mouse action-Approach1", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")   // Open the practice site

    const dragElement = await page.locator("//div[@id='draggable']")   // Locate draggable element
    const dropElement = await page.locator("//div[@id='droppable']")   // Locate drop target

    await dragElement.hover()   // Move mouse pointer over draggable element
    await page.mouse.down()     // Press and hold left mouse button

    await dropElement.hover()   // Move mouse pointer to drop target
    await page.mouse.up()       // Release mouse button → element dropped
})


// ✅ Test 4: Drag and Drop (Approach 2 - Using built-in dragTo)
test("Drag and Drop Mouse action-Approach2", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")   // Open the practice site

    const dragElement = await page.locator("//div[@id='draggable']")   // Locate draggable element
    const dropElement = await page.locator("//div[@id='droppable']")   // Locate drop target

    await dragElement.dragTo(dropElement)   // Playwright automatically drags element and drops it on target

    await page.waitForTimeout(2000)   // Wait for 2 seconds
})



/*

🔑 What’s happening here?

Hover Action

.hover() simulates mouse hover → useful for dropdown menus.

Double Click

.dblclick() simulates a double-click event.

In this case, clicking the button copies text into another field → verified with expect().

Drag & Drop

Approach 1 (manual):
Hover → press mouse down → move to target → release mouse up.

Approach 2 (simpler):
dragTo() directly handles drag & drop.

*/