// // -------------------- TEST: End-to-End Purchase Flow --------------------
// const { test } = require("@playwright/test");

// // ✅ Import Page Objects
// const { LoginPage } = require("../../pages/SwagLabs/LoginPage");
// const { HomePage } = require("../../pages/SwagLabs/HomePage");
// const { CartPage } = require("../../pages/SwagLabs/CartPage");
// const { CheckoutPageOne } = require("../../pages/SwagLabs/CheckoutPageOne");
// const { CheckoutPageTwo } = require("../../pages/SwagLabs/CheckoutPageTwo");
// const { OrderConfirmationPage } = require("../../pages/SwagLabs/OrderConfirmationPage");

// test("End-to-end purchase flow in SwagLabs", async ({ page }) => {

//   // ✅ Instantiate Page Objects
//   const loginPage = new LoginPage(page);
//   const homePage = new HomePage(page);
//   const cartPage = new CartPage(page);
//   const checkoutOne = new CheckoutPageOne(page);
//   const checkoutTwo = new CheckoutPageTwo(page);
//   const orderConfirmation = new OrderConfirmationPage(page);

//   // -------------------- LOGIN --------------------
//   await loginPage.goto();
//   await loginPage.login("standard_user", "secret_sauce");

//   // -------------------- HOME PAGE --------------------
//   await homePage.verifyInventoryPage();
//   await homePage.addProductToCart("Sauce Labs Bolt T-Shirt");
//   await homePage.openCart();

//   // -------------------- CART PAGE --------------------
//   await cartPage.verifyProductInCart("Sauce Labs Bolt T-Shirt");
//   await cartPage.proceedToCheckout();

//   // -------------------- CHECKOUT PAGE ONE --------------------
//   await checkoutOne.verifyPage();
//   await checkoutOne.fillDetails("Akhil", "Kumar", "532264");

//   // -------------------- CHECKOUT PAGE TWO --------------------
//   await checkoutTwo.verifyPage();
//   await checkoutTwo.verifyProduct("Sauce Labs Bolt T-Shirt");
//   await checkoutTwo.finishOrder();

//   // -------------------- ORDER CONFIRMATION --------------------
//   await orderConfirmation.verifyOrderSuccess();

// });




// -------------------- TEST: End-to-End Purchase Flow --------------------
const { test } = require("@playwright/test");

// ✅ Import Page Objects
const { LoginPage } = require("../../pages/SwagLabs/LoginPage");
const { HomePage } = require("../../pages/SwagLabs/HomePage");
const { CartPage } = require("../../pages/SwagLabs/CartPage");
const { CheckoutPageOne } = require("../../pages/SwagLabs/CheckoutPageOne");
const { CheckoutPageTwo } = require("../../pages/SwagLabs/CheckoutPageTwo");
const { OrderConfirmationPage } = require("../../pages/SwagLabs/OrderConfirmationPage");

test("End-to-end purchase flow in SwagLabs", async ({ browser }) => {
  // ✅ Manually create a new page
  const page = await browser.newPage();

  // ✅ Instantiate Page Objects
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const cartPage = new CartPage(page);
  const checkoutOne = new CheckoutPageOne(page);
  const checkoutTwo = new CheckoutPageTwo(page);
  const orderConfirmation = new OrderConfirmationPage(page);

  // -------------------- LOGIN --------------------
  await loginPage.goto();
  await loginPage.login("standard_user", "secret_sauce");

  // -------------------- HOME PAGE --------------------
  await homePage.verifyInventoryPage();
  await homePage.addProductToCart("Sauce Labs Bolt T-Shirt");
  await homePage.openCart();

  // -------------------- CART PAGE --------------------
  await cartPage.verifyProductInCart("Sauce Labs Bolt T-Shirt");
  await cartPage.proceedToCheckout();

  // -------------------- CHECKOUT PAGE ONE --------------------
  await checkoutOne.verifyPage();
  await checkoutOne.fillDetails("Akhil", "Kumar", "532264");

  // -------------------- CHECKOUT PAGE TWO --------------------
  await checkoutTwo.verifyPage();
  await checkoutTwo.verifyProduct("Sauce Labs Bolt T-Shirt");
  await checkoutTwo.finishOrder();

  // -------------------- ORDER CONFIRMATION --------------------
  await orderConfirmation.verifyOrderSuccess();

  // ✅ Close page at the end
  await page.close();
});
