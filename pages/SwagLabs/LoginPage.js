// -------------------- LOGIN PAGE --------------------
const { expect } = require("@playwright/test");  // ✅ Import Playwright assertion

class LoginPage {
  constructor(page) {
    this.page = page;                                   // ✅ Store Playwright page object
    this.usernameInput = page.locator("#user-name");    // ✅ Username field
    this.passwordInput = page.locator("#password");     // ✅ Password field
    this.loginButton = page.locator("#login-button");   // ✅ Login button
  }

  async goto() {
    await this.page.goto("https://www.saucedemo.com/v1/");  // ✅ Navigate to login page
  }

  async login(username, password) {
    await this.usernameInput.fill(username);    // ✅ Enter username
    await this.passwordInput.fill(password);    // ✅ Enter password
    await this.loginButton.click();             // ✅ Click login button
  }
}

module.exports = { LoginPage };
