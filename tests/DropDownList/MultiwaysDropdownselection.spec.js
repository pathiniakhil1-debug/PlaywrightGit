import{ test,expect } from "@playwright/test"

test("Dropdownlist by label:visibletext", async({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator("#country").selectOption({label:'India'})  //label:visibletext

})


test("Dropdownlist by visibletext", async({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator("#country").selectOption('India') //visibletext

})

test("Dropdownlist by value", async({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator("#country").selectOption({value: "uk"})  //value

})

test("Dropdownlist by using Index", async({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator("#country").selectOption({index: 1})  //by using Index

})

test("Dropdownlist", async({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.selectOption("#country","India")

})


/*

🎯 What is a Dropdown list?

A dropdown list (<select> with <option>) is a UI element that lets you pick one or multiple values.
Example HTML:

<select id="country">
  <option value="usa">United States</option>
  <option value="canada">Canada</option>
  <option value="india">India</option>
</select>


In Playwright, we usually work with dropdowns using selectOption() or by extracting options to test.
🛠️ Ways to Handle Dropdowns in Playwright
1️⃣ Select by Value
await page.selectOption("#country", { value: "india" });


👉 Selects the <option value="india">India</option>

2️⃣ Select by Visible Text (label)
await page.selectOption("#country", { label: "Canada" });


👉 Selects <option value="canada">Canada</option>

3️⃣ Select by Index
await page.selectOption("#country", { index: 0 });


👉 Selects the first option (United States in this case).

4️⃣ Verify Selected Value
const selectedValue = await page.$eval("#country", el => el.value);
console.log(selectedValue); // "india"

5️⃣ Get All Options
const options = await page.locator("#country option").allTextContents();
console.log(options); 
// [ 'United States', 'Canada', 'India' ]

6️⃣ Dropdown with Multiple Selection

If the dropdown supports multiple selections (<select multiple>):

await page.selectOption("#multiSelect", [
  { label: "India" },
  { value: "usa" }
]);

✅ Assertions with Dropdowns

You often want to assert that:

Dropdown contains specific values

Correct option is selected

Number of options is as expected    

*/
