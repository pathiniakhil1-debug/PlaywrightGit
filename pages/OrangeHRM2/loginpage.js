import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page;

    // ✅ XPath locators
    this.usernameInput = page.locator("//input[@name='username']");
    this.passwordInput = page.locator("//input[@name='password']");
    this.loginButton = page.locator("//button[normalize-space()='Login']");
    this.dashboardHeading = page.locator("//h6[text()='Dashboard']");
  }

  async gotoLoginPage() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async verifyDashboard() {
    await expect(this.dashboardHeading).toBeVisible();
  }
}
