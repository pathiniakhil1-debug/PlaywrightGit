// Export the cart page class for Demoblaze
exports.DemoblazeCartPage = class DemoblazeCartPage {

    constructor(page) {
        this.page = page;                                               // Store page object
        this.cartItems = "#tbodyid>tr>td:nth-child(2)";                 // Product names column in cart table
    }

    // Verify that a product exists in the cart
    async verifyProductInCart(productName) {
        await this.page.waitForSelector(this.cartItems, { timeout: 5000 }); // Wait for cart items to load

        const productsInCart = await this.page.$$(this.cartItems);      // Get all product name cells

        // Loop through each cart item
        for (const product of productsInCart) {
            const text = (await product.textContent()).trim();          // Get text and remove spaces
            console.log(`Product in cart: ${text}`);                     // Log product name
            if (text === productName) {                                  // If product matches expected
                console.log(`✅ Found product: ${productName}`);         // Log success
                return true;                                             // Return success
            }
        }
        return false;                                                    // If product not found
    }
}


/*
Explanation:

Locator → Finds product names inside the cart table.

verifyProductInCart(productName):

Loops through cart items.

If product name matches, returns true.

*/

