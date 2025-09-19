// -------------------- CHECKOUT PAGE - STEP ONE --------------------
const { expect } = require("@playwright/test");

class CheckoutPageOne {
  constructor(page) {
    this.page = page;
    this.firstName = page.locator("input[placeholder='First Name']");
    this.lastName = page.locator("input[placeholder='Last Name']");
    this.zipCode = page.locator("input[placeholder='Zip/Postal Code']");
    this.continueButton = page.locator(".btn_primary.cart_button");
  }

  async verifyPage() {
    await expect(this.page).toHaveURL("https://www.saucedemo.com/v1/checkout-step-one.html"); // ✅ Verify URL
  }

  async fillDetails(firstName, lastName, zip) {
    await this.firstName.fill(firstName);   // ✅ Enter First Name
    await this.lastName.fill(lastName);     // ✅ Enter Last Name
    await this.zipCode.fill(zip);           // ✅ Enter Zip
    await this.continueButton.click();      // ✅ Continue
  }
}

module.exports = { CheckoutPageOne };
