const { expect, test } = require("@playwright/test");

test("End-to-end purchase flow in SwagLabs", async ({ page }) => {

    // -------------------- LOGIN PAGE --------------------
    await page.goto("https://www.saucedemo.com/v1/");
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();

    // -------------------- HOME PAGE and FIND PRODUCT--------------------
    await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html");
    await expect(page.locator(".inventory_item_name")).toHaveCount(6)
    await page.locator("//div[text()='Sauce Labs Bolt T-Shirt']/../../../div[3]/button").click();
    await page.locator(".shopping_cart_link").click();

    // -------------------- CART PAGE --------------------
    await expect(page.locator("//div[text()='Sauce Labs Bolt T-Shirt']")).toHaveText("Sauce Labs Bolt T-Shirt");
    await page.locator(".btn_action.checkout_button").click();

    // -------------------- CHECKOUT PAGE - STEP ONE --------------------
    await expect(page).toHaveURL("https://www.saucedemo.com/v1/checkout-step-one.html");
    await page.locator("input[placeholder='First Name']").fill("Akhil");
    await page.locator('input[placeholder="Last Name"]').fill("Kumar");
    await page.locator('input[placeholder="Zip/Postal Code"]').fill("532264");
    await page.locator(".btn_primary.cart_button").click();

    // -------------------- CHECKOUT PAGE - STEP TWO --------------------
    await expect(page).toHaveURL("https://www.saucedemo.com/v1/checkout-step-two.html");
    await expect(page.locator(".inventory_item_name")).toHaveText("Sauce Labs Bolt T-Shirt");
    await page.locator(".btn_action.cart_button").click();

    // -------------------- ORDER CONFIRMATION PAGE --------------------
    await expect(page).toHaveURL("https://www.saucedemo.com/v1/checkout-complete.html");
    await expect(page.locator(".complete-header")).toHaveText("THANK YOU FOR YOUR ORDER");

});