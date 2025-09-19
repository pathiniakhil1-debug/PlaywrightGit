// Export the home page class for Demoblaze
exports.DemoblazeHomePage = class DemoblazeHomePage {

    constructor(page) {
        this.page = page;                                               // Store page object
        this.productList = "#tbodyid>div>div>.card-block>h4>a";         // All product name links on homepage
        this.addToCartButton = "//a[text()='Add to cart']";             // "Add to cart" button on product page
        this.cart = "#cartur";                                          // Cart link in navbar
    }

    // Add a specific product to the cart
    async addProductToCart(productName) {
        
        const products = await this.page.$$(this.productList);          // Get all product elements in array format

        // Loop through products to find the one matching productName
        for (const product of products) {
            const text = (await product.textContent()).trim();          // Get product text and remove spaces
            if (text === productName) {                                 // If matches the desired product
                await product.click();                                  // Click product link to open details page
                break;                                                  // Exit loop
            }
        }

        // Listen for the alert dialog when item is added to cart
        this.page.on('dialog', async dialog => {
            if (dialog.message().includes('Product added')) {           // If alert says "Product added"
                await dialog.accept();                                  // Click "OK" on alert
            }
        });

        // Click "Add to cart" button on product page
        await this.page.click(this.addToCartButton);

        // Short wait to ensure the product is processed before moving on
        await this.page.waitForTimeout(1500);
    }

    // Navigate to the cart page
    async gotocart() {
        await this.page.click(this.cart);                               // Click cart link in navbar
    }
}

/*
Explanation:

Locators → Product list, Add to cart button, Cart link.

addProductToCart(productName):

Loops through product titles until it finds a match.

Clicks product to open details page.

Handles alert popup after clicking "Add to cart".

Clicks "Add to cart" button.

*/

// exports.DemoblazeHomePage = class DemoblazeHomePage {

//     constructor(page) {
//         this.page = page;
//         this.productList = "#tbodyid>div>div>.card-block>h4>a"; // Locator for all product links
//         this.addToCartButton = "//a[text()='Add to cart']";     // XPath for "Add to cart" button
//         this.cart = "#cartur";                                  // Locator for cart link
//     }

//     // Add a product to the cart by matching its name
//     async addProductToCart(productName) {
//         const productList = await this.page.$$(this.productList); // Get all products on the page
//         for (const product of productList) {
//             const text = (await product.textContent()).trim();    // Get product name text
//             if (text === productName) {                           // If matches desired product
//                 await product.click();                            // Click to open product page
//                 break;                                            // Exit loop
//             }
//         }

//         // Listen for alert dialogs (product added confirmation)
//         this.page.on('dialog', async dialog => {
//             if (dialog.message().includes('Product added')) {
//                 await dialog.accept(); // Accept the alert
//             }
//         });

//         // Click on "Add to cart" button
//         await this.page.click(this.addToCartButton);
//     }

//     // Navigate to the cart page
//     async gotocart() {
//         await this.page.click(this.cart);
//     }
// }



// exports.DemoblazeHomePage = class DemoblazeHomePage {

//     constructor(page) {
//         this.page = page;
//         this.productList = "#tbodyid>div>div>.card-block>h4>a"
//         this.addToCartButton = "btn btn-success btn-lg"
//         this.cart = "#cartur"
//     }

//     async addProductToCart(productName) {
//         const productList = await this.page.$$(this.productList);
//         for (const product of productList) {
//             if (productName === await product.textContent()) {
//                 await product.click();
//                 break;
//             }
//             // const text = await product.textContent();
//             // if (text.includes(productName)) {
//             //     await product.click();
//             //     await this.page.click(this.addToCartButton);
//             //     break;
//             // }
//         }

//         await this.page.on('dialog', async dialog => {
//             if (dialog.message().includes('Product added')) {
//                 await dialog.accept();
//             }
//         })
//         await this.page.locator(this.addToCartButton).click();
//     }