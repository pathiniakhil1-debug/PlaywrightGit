// page.getByAltText() to locate an element, usually image, by its text alternative.
// page.getByPlaceholder() to locate an input by placeholder.
// page.getByRole() to locate by explicit and implicit accessibility attributes.
// page.getByText() to locate by text content.
// page.getByLabel() to locate a form control by associated label's text
// page.getByTitle() to locate an element by its title attribute.
// page.getByTestId() to locate an element based on its data-testid attribute

import{ test, expect} from "@playwright/test"

test("Biult in Locators", async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    // page.getByAltText() to locate an element, usually image, by its text alternative.

    const logo = await page.getByAltText("company-branding")

    await expect(logo).toBeVisible() ;

    // page.getByPlaceholder() to locate an input by placeholder.

    await page.getByPlaceholder('Username').fill("Admin")

    await page.getByPlaceholder('password').fill("admin123")

    // page.getByRole() locate elements by explicit or implicit accessibility roles and attributes (ARIA, semantic HTML).
    // Explicit ARIA roles (e.g., role="button").
    // Implicit roles (e.g., <button>, <a>, <input type="checkbox">).

    await page.getByRole('button',{ type : "submit" }).click()

    // page.getByText() to locate by text content.

    //await expect(await page.getByText("FirstName LastName")).toBeVisible()

    // textcontent() to return by text content.

    const name= await page.locator("//p[@class='oxd-userdropdown-name']").textContent()   //text will change after login everytime

    await expect(await page.getByText(name)).toBeVisible()


})




