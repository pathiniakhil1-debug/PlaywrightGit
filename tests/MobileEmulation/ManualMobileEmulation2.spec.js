const { test, expect, chromium } = require('@playwright/test');

const LoginCredentials = {
  PageURL: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
  Username: 'Admin',
  Password: 'admin123'
};

const MessagesList = {
  Message1: "Hello Everyone, Good Morning!",
  Message2: "My name is Raju!",
  Message3: "Welcome to Playwright with JavaScript!"
};

for (let key in MessagesList) {
  const message = MessagesList[key];

  test(`Manual Mobile Emulation: Post message - ${message}`, async () => {
    // ✅ Launch browser
    const browser = await chromium.launch();

    // ✅ Create manual mobile-like context
    const context = await browser.newContext({
      viewport: { width: 375, height: 812 },   // iPhone X size
      isMobile: true,
      hasTouch: true,
      deviceScaleFactor: 3,
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Mobile/15E148 Safari/604.1'
    });

    // ✅ Open a new page in mobile emulation
    const page = await context.newPage();

    //Login flow
    await page.goto(LoginCredentials.PageURL);
    await page.locator('input[placeholder="Username"]').fill(LoginCredentials.Username);
    await page.locator('input[placeholder="Password"]').fill(LoginCredentials.Password);
    await page.locator('button[type="submit"]').click();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

    //Buzz post flow
    await page.locator('//span[text()="Buzz"]').click();
    await page.locator('.oxd-buzz-post-input').fill(message);
    await page.locator('button[type="submit"]').click();

    await expect(page.locator(`//p[text()='${message}']`).first())
      .toHaveText(message);

    await page.waitForTimeout(2000);

    await browser.close();
  });
}



// Got it 👍 — if you don’t want Playwright’s predefined devices (devices['iPhone 11 Pro'], etc.), 
// you can do manual mobile emulation by setting the context options yourself.

// That means overriding things like:

// viewport (screen size)

// isMobile: true

// hasTouch: true

// deviceScaleFactor

// userAgent (optional, for mobile browser behavior)

// 🔑 Key differences from device profiles:

// You control the viewport size, touch events, mobile user agent, etc.

// You don’t need devices[], everything is explicit.

// You can tweak any values to simulate custom devices (e.g., tablet, foldables, etc.).