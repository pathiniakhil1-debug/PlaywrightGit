import { test, expect } from '@playwright/test';

test('Add product to cart with valid login (No POM)', async ({ page }) => {

    // -------------------------
    // STEP 1: Navigate to Demoblaze
    // -------------------------
    console.log("Navigating to Demoblaze homepage...");
    await page.goto('https://www.demoblaze.com/index.html');

    // -------------------------
    // STEP 2: Click on Login
    // -------------------------
    console.log("Opening login dialog...");
    await page.click('#login2'); // Click login link in navbar

    // -------------------------
    // STEP 3: Enter credentials
    // -------------------------
    console.log("Entering login credentials...");
    await page.fill('#loginusername', 'pavanol'); // Enter username
    await page.fill('#loginpassword', 'test@123'); // Enter password

    // -------------------------
    // STEP 4: Click Log in button
    // -------------------------
    console.log("Submitting login...");
    await page.click("//button[text()='Log in']"); // Click login button
    await page.waitForTimeout(2000); // Wait for login to process

    // -------------------------
    // STEP 5: Find product and open it
    // -------------------------
    console.log("Finding the product: Samsung galaxy s6...");
    const products = await page.$$('#tbodyid>div>div>.card-block>h4>a'); // All product titles
    for (const product of products) {
        const name = (await product.textContent()).trim();
        if (name === 'Samsung galaxy s6') {
            await product.click(); // Click the product to open details
            break;
        }
    }

    // -------------------------
    // STEP 6: Add product to cart
    // -------------------------
    console.log("Adding product to cart...");
    page.once('dialog', async dialog => { // Handle alert popup
        console.log("Alert says: " + dialog.message());
        await dialog.accept();
    });
    await page.click("//a[text()='Add to cart']"); // Click Add to cart button
    await page.waitForTimeout(2000); // Wait for cart update

    // -------------------------
    // STEP 7: Go to Cart
    // -------------------------
    console.log("Navigating to cart...");
    await page.click('#cartur'); // Click cart link

    // -------------------------
    // STEP 8: Verify product in cart
    // -------------------------
    console.log("Verifying product in cart...");
    await page.waitForSelector('#tbodyid>tr>td:nth-child(2)'); // Wait for cart items
    const cartItems = await page.$$('#tbodyid>tr>td:nth-child(2)');
    let productFound = false;
    for (const item of cartItems) {
        const text = (await item.textContent()).trim();
        console.log("Product in cart: " + text);
        if (text === 'Samsung galaxy s6') {
            productFound = true;
            break;
        }
    }

    // -------------------------
    // STEP 9: Assert the result
    // -------------------------
    expect(productFound).toBe(true);
    console.log("✅ Product is successfully added to the cart.");

    // -------------------------
    // STEP 10: Close page
    // -------------------------
    await page.waitForTimeout(2000);
});
