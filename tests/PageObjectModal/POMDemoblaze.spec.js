// Import Playwright's test & expect
import { test, expect } from '@playwright/test';

// Import page object classes
import { DemoblazeloginPage } from '../../pages/Demoblaze/DemoblazeloginPage';
import { DemoblazeHomePage } from '../../pages/Demoblaze/DemoblazeHomePage';
import { DemoblazeCartPage } from '../../pages/Demoblaze/DemoblazeCartPage';

// Main test case: login, add product to cart, verify it
test('Add product to cart with valid login', async ({ page }) => {

    // 1️⃣ LOGIN PHASE
    const login = new DemoblazeloginPage(page);                         // Create login page object
    console.log("Navigating to Demoblaze homepage...");
    await login.gotologinPage();                                        // Open homepage

    console.log("Logging in with provided credentials...");
    await login.loginwithCreds('pavanol', 'test@123');                  // Perform login
    await page.waitForTimeout(2000);                                    // Wait for login to process

    // 2️⃣ ADD PRODUCT PHASE
    const homePage = new DemoblazeHomePage(page);                       // Create home page object
    console.log("Adding 'Samsung galaxy s6' to cart...");
    await homePage.addProductToCart('Samsung galaxy s6');               // Add product

    console.log("Navigating to cart page...");
    await homePage.gotocart();                                          // Go to cart page

    // 3️⃣ VERIFY PRODUCT PHASE
    const cartPage = new DemoblazeCartPage(page);                       // Create cart page object
    console.log("Verifying product is present in cart...");
    const status = await cartPage.verifyProductInCart('Samsung galaxy s6'); // Check product

    // 4️⃣ ASSERTION
    expect(status).toBe(true);                                          // Assert product found
    console.log("✅ Product successfully found in cart.");
});



/*

Page Object Model (POM) in Playwright — Interview Prep
1. What is POM?

Page Object Model (POM) is a design pattern used in test automation where each web page of the application is represented 
as a separate class.

Each class contains:

Locators (selectors) for elements on that page

Methods (functions) that perform actions on that page

Benefits:

Reduces code duplication

Makes tests cleaner and more maintainable

If UI changes, only update the page class, not every test

2. POM Structure in Playwright

A typical POM structure for Playwright:

project/
│
├── pages/
│   ├── LoginPage.js
│   ├── HomePage.js
│   └── CartPage.js
│
└── tests/
    └── E2E_Test.spec.js

3. Example — Demoblaze E2E Test

Scenario:

Login to Demoblaze

Add "Samsung galaxy s6" to the cart

Verify it appears in the cart

4. Interview Talking Points

If asked about this code:

What is POM in Playwright?

A design pattern where each web page is represented by a class.

Improves reusability, maintainability, and readability.

Benefits of POM:

Changes in locators only happen in one place.

Makes tests cleaner and easier to understand.

Encourages separation of concerns between test logic and UI actions.

Where this code needs improvement:

Some locators are incorrect (loginButton, addToCartButton).

gotocart() method is used in test but not implemented in DemoblazeHomePage.

Should avoid waitForTimeout() — use waitForSelector() instead.

Could use Playwright's locator().filter() instead of looping manually.

Structure explaination

The code follows Page Object Model (POM) — where each page is represented by a class that stores:

Locators (selectors for elements)

Methods (actions to perform on the page)

We have three POM classes:

DemoblazeloginPage → Handles login

DemoblazeHomePage → Handles product listing & cart navigation

DemoblazeCartPage → Handles cart verification

*/

