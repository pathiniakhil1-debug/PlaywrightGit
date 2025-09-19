// -------------------- CART PAGE --------------------
const { expect } = require("@playwright/test");

class CartPage {
  constructor(page) {
    this.page = page;
    this.checkoutButton = page.locator(".btn_action.checkout_button"); // ✅ Checkout button
    this.productName = (name) => page.locator(`//div[text()='${name}']`); // ✅ Dynamic product name locator
  }

  async verifyProductInCart(productName) {
    await expect(this.productName(productName)).toHaveText(productName);  // ✅ Verify product exists in cart
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();   // ✅ Click Checkout
  }
}

module.exports = { CartPage };
