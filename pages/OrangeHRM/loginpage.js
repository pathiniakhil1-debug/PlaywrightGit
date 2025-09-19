// ▶ Import Playwright's expect for assertions
import { expect } from '@playwright/test';

// ================== LOGIN PAGE CLASS ==================
export class LoginPage {
    // ▶ The constructor initializes the class with Playwright's "page" object
    constructor(page) {
        this.page = page;   // ▶ Store the page reference (browser tab/session)

        // ▶ Define locators for elements on the Login Page
        this.usernameInput = page.locator('input[name="username"]'); // Username field
        this.passwordInput = page.locator('input[name="password"]'); // Password field
        this.loginButton = page.locator('button[type="submit"]');    // Login button
        this.errorMessage = page.locator('.oxd-alert-content');      // Error message for invalid login
    }

    // ================== METHODS ==================

    // ▶ Launch the OrangeHRM login page in browser
    async launchtheApplication() {
        console.log("▶ Launching OrangeHRM Login Page");
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    // ▶ Perform login by filling username and password
    async loginwithCreds(username, password) {
        console.log(`▶ Entering Username: ${username}, Password: ${password}`);
        await this.usernameInput.fill(username);   // Enter username
        await this.passwordInput.fill(password);   // Enter password
        await this.loginButton.click();            // Click on login button
    }

    // ▶ Verify login success (navigates to dashboard)
    async loginsuccess() {
        console.log("▶ Verifying login success...");
        await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    }

    // ▶ Verify error message on invalid login attempt
    async loginError() {
        console.log("▶ Verifying login error message...");
        await expect(this.errorMessage).toBeVisible(); // Assert error message is displayed
    }
}