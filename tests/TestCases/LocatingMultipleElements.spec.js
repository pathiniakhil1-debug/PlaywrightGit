const {test, expect} = require('@playwright/test')

test ('LocatingMultipleElements',async({page})=>{

    await page.goto("http://demoblaze.com/index.html")

    const Links = await page.$$('a')  //anchor tag - Specifies all the links

    for(const link of Links)
    {
        const Linktext = await link.textContent();

        console.log(Linktext)
    }

    // Wait for the products to be visible

    await page.waitForSelector("//div[@id='tbodyid']//h4//a")  

    // Locate all product elements

    const products= await page.$$("//div[@id='tbodyid']//h4//a")   //anchor tag - Specifies all the links

    for (const product of products)
    {
        const productName= await product.textContent()
        console.log(productName)
    }

})



