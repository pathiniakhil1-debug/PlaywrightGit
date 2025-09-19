import { test, expect } from "@playwright/test"

// ✅ Approach1 - Using locator + toHaveCount
test("Checks the no of options in Dropdownlist-Approach1", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    const options = page.locator("#country option") // locator for all <option> elements

    const optionCount = await options.count(); // get total number of options & .count returns Number of elements matched by Locator

    console.log("Number of options:", optionCount); // ✅ prints actual number

    await expect(options).toHaveCount(10) // assertion: should be 10 options

    await page.waitForTimeout(2000) // wait for 2 seconds

})


// ✅ Approach2 - Using page.$$ (returns array of element handles)
test("Checks the no of options in Dropdownlist-Approach2", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/") // open page

    const options = await page.$$("#country option") // $$ fetches array of elements directly

    console.log("Number of options:", options.length) // log number of options

    await expect(options.length).toBe(10) // assertion: check length equals 10 & .length returns Number of elements in array

    await page.waitForTimeout(2000) // wait for 2 seconds

})


// ✅ Approach1 - Checking "India" presence via textContent of <select>
test("Check presence of value in the dropdown - Approach1", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/"); // open page

    const content = await page.locator("#country").textContent() // get entire text content of <select>

    console.log("Dropdown content:", content); // print raw content with newlines

    await expect(content.includes("India")).toBeTruthy() // assertion: "India" exists in dropdown

    await page.waitForTimeout(2000); // wait for 2 seconds

});


// ✅ Approach2 - Loop through $$ and check value manually
test("Check presence of value in the dropdown - Approach2", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/"); // open page

    const options = await page.$$("#country option") // get all <option> elements as array

    let status = false; // flag to track if "France" found

    for (const option of options) { // iterate over options

        let value = await option.textContent() // get text content of each option
        if (value.includes("France")) { // check if it contains "France"
            status = true // set flag to true
            break // exit loop
        }
    }

    expect(status).toBeTruthy(); // assert "France" is found

});


// ✅ Approach3 - Select option if matched
test("Select the Element in the dropdown - Approach3", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/"); // open page

    const options = await page.$$("#country option") // get all <option> elements

    for (const option of options) { // iterate over all options
        let value = (await option.textContent()).trim(); // get text & trim spaces
        if (value.toLowerCase().includes("france")) { // case-insensitive check
            await page.selectOption("#country", { label: value }); // select by visible text
            console.log(`Selected option: ${value}`); // log selected option
            break; // exit loop after selecting
        }
    }
    await page.waitForTimeout(2000) // wait for 2 seconds

});


// ✅ Approach4 - Using split('\n') on textContent of <select>
test("Check presence of value in the dropdown - Approach4", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/"); // open page

    const content = await page.locator("#country").textContent() // get full dropdown text

    console.log("Dropdown content:", content); // print content

    console.log("Number of options:", content.split('\n').length); // split by newline → raw count

    const con = content.split('\n').map(item => item.trim()).filter(item => item); // split → trim spaces → filter empty

    console.log("Trimmed options:", con); // print cleaned options
    console.log("Number of trimmed options:", con.length); // print cleaned count

    await expect(con.length).toBe(10); // assert 10 options after cleaning
    await expect(content.includes("India")).toBeTruthy(); // check India exists

    await page.waitForTimeout(2000); // wait for 2 seconds

});


// ✅ Approach5 - Using allTextContents() with map trim
test("Check presence of value in the dropdown - Approach5", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/"); // open page

    const options = await page.locator("#country option").allTextContents(); // get all texts in array
    const trimmedOptions = options.map(text => text.trim()); // trim spaces for each option

    console.log("Dropdown options:", trimmedOptions); // print cleaned options
    console.log("Number of options:", trimmedOptions.length); // print count

    await expect(trimmedOptions.length).toBe(10); // assert count is 10
    await expect(trimmedOptions).toContain("India"); // assert "India" exists

    await page.waitForTimeout(2000); // wait for 2 seconds

});


// ✅ Approach6 - Using allTextContents() + manual trim loop
test("Check presence of value in the dropdown - Approach6", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/"); // open page

    let options = await page.locator("#country option").allTextContents(); // get all texts

    for (let i = 0; i < options.length; i++) { // loop through options
        options[i] = options[i].trim(); // trim spaces manually
    }

    console.log("Dropdown options:", options); // print cleaned array
    console.log("Number of options:", options.length); // print count

    await expect(options.length).toBe(10); // assert 10 options
    await expect(options).toContain("India"); // assert "India" exists

    await page.waitForTimeout(2000); // wait for 2 seconds

});


// ✅ Approach7 - Using textContent() on each nth option
test("Check presence of value in the dropdown - Approach7", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/"); // open page

    const optionsCount = await page.locator("#country option").count(); // get number of options
    let options = []; // create array

    for (let i = 0; i < optionsCount; i++) { // loop by index
        const text = await page.locator("#country option").nth(i).textContent(); // get text of nth option
        options.push(text.trim()); // trim and push into array
    }

    console.log("Dropdown options:", options); // print final options
    console.log("Number of options:", options.length); // print count

    await expect(options.length).toBe(10); // assert count is 10
    await expect(options).toContain("India"); // assert India exists

    await page.waitForTimeout(2000); // wait for 2 seconds

});


/*

🔹 locator.textContent()

Returns the text of a single element.

If the locator points to multiple elements, Playwright will throw an error (strict mode violation).

const text = await page.locator("#country option").nth(0).textContent();
console.log(text);   // e.g. "United States"

🔹 locator.allTextContents()

Returns an array of text from all matching elements.

Useful when you want to fetch text from multiple options/elements at once.

const texts = await page.locator("#country option").allTextContents();
console.log(texts);  // [ "United States", "Canada", "India", ... ]

*/



