// Export the login page class for Demoblaze
exports.DemoblazeloginPage = class DemoblazeloginPage {

    constructor(page) {
        this.page = page;                                   // Store Playwright's page object
        this.loginlink = "#login2";                         // CSS selector for the "Log in" link in navbar
        this.usernameInput = "#loginusername";              // CSS selector for username input
        this.passwordInput = "#loginpassword";              // CSS selector for password input
        this.loginButton = "//button[text()='Log in']";      // XPath selector for "Log in" button
    }

    // Go to the Demoblaze homepage
    async gotologinPage() {
        await this.page.goto('https://www.demoblaze.com/index.html'); // Navigate to site
    }

    // Login using provided username and password
    async loginwithCreds(username, password) {
        await this.page.click(this.loginlink);              // Click the "Log in" link to open modal
        await this.page.fill(this.usernameInput, username); // Fill in the username
        await this.page.fill(this.passwordInput, password); // Fill in the password
        await this.page.click(this.loginButton);            // Click "Log in" button
    }
}

/*

Explanation:

constructor(page) → Stores the Playwright page instance and defines element locators.

gotologinPage() → Navigates to Demoblaze homepage.

loginwithCreds() → Clicks login link, enters username/password, clicks login button.

*/