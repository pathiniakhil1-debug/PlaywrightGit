// -------------------- HOME PAGE --------------------
const { expect } = require("@playwright/test");

class HomePage {
  constructor(page) {
    this.page = page;
    this.inventoryItems = page.locator(".inventory_item_name");   // ✅ All products
    this.cartIcon = page.locator(".shopping_cart_link");          // ✅ Cart icon
    this.productBtn = (productName) =>
      this.page.locator(`//div[text()='${productName}']/../../../div[3]/button`); // ✅ Dynamic product locator
  }

  async verifyInventoryPage() {
    await expect(this.page).toHaveURL("https://www.saucedemo.com/v1/inventory.html"); // ✅ Verify URL
    await expect(this.inventoryItems).toHaveCount(6); // ✅ Verify total products = 6
  }

  async addProductToCart(productName) {
    await this.productBtn(productName).click();   // ✅ Click "Add to cart"
  }

  async openCart() {
    await this.cartIcon.click();   // ✅ Open cart page
  }
}

module.exports = { HomePage };
