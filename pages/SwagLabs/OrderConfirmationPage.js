// -------------------- ORDER CONFIRMATION PAGE --------------------
const { expect } = require("@playwright/test");

class OrderConfirmationPage {
  constructor(page) {
    this.page = page;
    this.confirmationHeader = page.locator(".complete-header");  // ✅ Success message
  }

  async verifyOrderSuccess() {
    await expect(this.page).toHaveURL("https://www.saucedemo.com/v1/checkout-complete.html"); // ✅ Verify URL
    await expect(this.confirmationHeader).toHaveText("THANK YOU FOR YOUR ORDER");             // ✅ Verify success message
  }
}

module.exports = { OrderConfirmationPage };