// -------------------- CHECKOUT PAGE - STEP TWO --------------------
const { expect } = require("@playwright/test");

class CheckoutPageTwo {
  constructor(page) {
    this.page = page;
    this.itemName = page.locator(".inventory_item_name");    // ✅ Product in summary
    this.finishButton = page.locator(".btn_action.cart_button"); // ✅ Finish button
  }

  async verifyPage() {
    await expect(this.page).toHaveURL("https://www.saucedemo.com/v1/checkout-step-two.html"); // ✅ Verify URL
  }

  async verifyProduct(productName) {
    await expect(this.itemName).toHaveText(productName);   // ✅ Verify product
  }

  async finishOrder() {
    await this.finishButton.click();   // ✅ Place order
  }
}

module.exports = { CheckoutPageTwo };
