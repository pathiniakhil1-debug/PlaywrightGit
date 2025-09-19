import { test, expect, chromium, firefox, webkit } from '@playwright/test';

test("Multi-browser (Chromium + Firefox + Safari/WebKit) with multi-context & viewports", async () => {
  // ================
  // 1️⃣ Launch Browsers
  // ================
  const browserChromium = await chromium.launch({ headless: true });
  const browserFirefox = await firefox.launch({ headless: true });
  const browserSafari = await webkit.launch({ headless: true }); // Safari equivalent

  // =============================
  // 2️⃣ Chromium: Create contexts with viewports
  // =============================
  const contextC1 = await browserChromium.newContext({ viewport: { width: 1280, height: 720 } }); // Desktop
  const pageC1 = await contextC1.newPage();

  const contextC2 = await browserChromium.newContext({ viewport: { width: 375, height: 667 } }); // Mobile
  const pageC2 = await contextC2.newPage();

  // ============================
  // 3️⃣ Firefox: Create contexts with viewports
  // ============================
  const contextF1 = await browserFirefox.newContext({ viewport: { width: 1440, height: 900 } }); // Large Laptop
  const pageF1 = await contextF1.newPage();

  const contextF2 = await browserFirefox.newContext({ viewport: { width: 768, height: 1024 } }); // iPad
  const pageF2 = await contextF2.newPage();

  // ============================
  // 4️⃣ Safari (WebKit): Contexts with viewports
  // ============================
  const contextS1 = await browserSafari.newContext({ viewport: { width: 1920, height: 1080 } }); // Full HD
  const pageS1 = await contextS1.newPage();

  const contextS2 = await browserSafari.newContext({ viewport: { width: 414, height: 896 } }); // iPhone 11 Pro Max
  const pageS2 = await contextS2.newPage();

  // ======================
  // 5️⃣ Chromium Scenarios
  // ======================
  // ✅ Valid Login (Desktop)
  await pageC1.goto("https://www.saucedemo.com/v1/");
  await pageC1.locator("//input[@placeholder='Username']").fill("standard_user");
  await pageC1.locator("//input[@placeholder='Password']").fill("secret_sauce");
  await pageC1.locator("(//div[@class='login-box']//input)[3]").click();
  await expect(pageC1).toHaveURL("https://www.saucedemo.com/v1/inventory.html");

  // ❌ Invalid Username (Mobile)
  await pageC2.goto("https://www.saucedemo.com/v1/");
  await pageC2.locator("//input[@placeholder='Username']").fill("wrong_user");
  await pageC2.locator("//input[@placeholder='Password']").fill("secret_sauce");
  await pageC2.locator("(//div[@class='login-box']//input)[3]").click();
  await expect(pageC2.locator("//div[@class='login-box']//h3[1]")).toBeVisible();

  // ======================
  // 6️⃣ Firefox Scenarios
  // ======================
  // ✅ Valid Login (Laptop)
  await pageF1.goto("https://www.saucedemo.com/v1/");
  await pageF1.locator("//input[@placeholder='Username']").fill("standard_user");
  await pageF1.locator("//input[@placeholder='Password']").fill("secret_sauce");
  await pageF1.locator("(//div[@class='login-box']//input)[3]").click();
  await expect(pageF1).toHaveURL("https://www.saucedemo.com/v1/inventory.html");

  // ❌ Invalid Password (iPad)
  await pageF2.goto("https://www.saucedemo.com/v1/");
  await pageF2.locator("//input[@placeholder='Username']").fill("standard_user");
  await pageF2.locator("//input[@placeholder='Password']").fill("wrong_pass");
  await pageF2.locator("(//div[@class='login-box']//input)[3]").click();
  await expect(pageF2.locator("//div[@class='login-box']//h3[1]")).toBeVisible();

  // ======================
  // 7️⃣ Safari (WebKit) Scenarios
  // ======================
  // ✅ Valid Login (Full HD)
  await pageS1.goto("https://www.saucedemo.com/v1/");
  await pageS1.locator("//input[@placeholder='Username']").fill("standard_user");
  await pageS1.locator("//input[@placeholder='Password']").fill("secret_sauce");
  await pageS1.locator("(//div[@class='login-box']//input)[3]").click();
  await expect(pageS1).toHaveURL("https://www.saucedemo.com/v1/inventory.html");

  // ❌ Invalid Username + Password (iPhone)
  await pageS2.goto("https://www.saucedemo.com/v1/");
  await pageS2.locator("//input[@placeholder='Username']").fill("wrong_user");
  await pageS2.locator("//input[@placeholder='Password']").fill("wrong_pass");
  await pageS2.locator("(//div[@class='login-box']//input)[3]").click();
  await expect(pageS2.locator("//div[@class='login-box']//h3[1]")).toBeVisible();

  // ====================
  // 8️⃣ Close everything
  // ====================
  await contextC1.close();
  await contextC2.close();
  await browserChromium.close();

  await contextF1.close();
  await contextF2.close();
  await browserFirefox.close();

  await contextS1.close();
  await contextS2.close();
  await browserSafari.close();
});


// 🔹 Viewports used

// Chromium → Desktop (1280×720), Mobile (375×667)

// Firefox → Laptop (1440×900), iPad (768×1024)

// Safari (WebKit) → Full HD (1920×1080), iPhone (414×896)