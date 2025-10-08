const { test, expect } = require("@playwright/test")   // Import Playwright Test functions (test, expect)

// ✅ Test 1: Count number of rows and columns in the table
test("No.of Rows and Columns in Table", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")  // Open the target webpage

    const table = await page.locator("#productTable")   // Locate the table by its ID 'productTable'

    const columns = await table.locator('thead tr th')  // Locate all column headers (<th>) inside the table's <thead>

    console.log("Number of columns:", await columns.count())  // Print the number of columns

    expect(await columns.count()).toBe(4)   // Assert that the column count is 4
 
    const rows = await table.locator("tbody tr")  // Locate all table rows (<tr>) inside <tbody>

    console.log("Number of rows:", await rows.count())   // Print the number of rows

    expect(await rows.count()).toBe(5)   // Assert that the row count is 5

    await page.waitForTimeout(5000)   // Wait for 5 seconds (just for demo/observation)
})


// ✅ Test 2: Select check box for a specific product (Smartwatch)
test("Select check box for the product 4 In Table", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")   // Open the target webpage

    const table = await page.locator("#productTable")   // Locate the table

    const rows = await table.locator("tbody tr")   // Locate all table rows inside <tbody>

    const machedROw = rows.filter({   // Filter rows to match a specific condition
        has: page.locator("td"),      // Row must contain <td> element
        hasText: "Smartwatch"         // Row must contain text 'Smartwatch'
    })

    await machedROw.locator('input').check()   // Locate the checkbox inside the matched row and check it

    await page.waitForTimeout(5000)   // Wait for 5 seconds
})


// ✅ Test 3: Select multiple products using a reusable function
test("Select Multiple products In Table by Using Reusable Function", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")   // Open the target webpage

    const table = await page.locator("#productTable")   // Locate the table

    const rows = await table.locator("tbody tr")   // Locate all table rows inside <tbody>

    await selectProduct(rows, page, 'Smartphone')   // Call reusable function to select 'Smartphone'
    await selectProduct(rows, page, 'Tablet')       // Call reusable function to select 'Tablet'
    await selectProduct(rows, page, 'Laptop')       // Call reusable function to select 'Laptop'

    await page.waitForTimeout(5000)   // Wait for 5 seconds
})


// ✅ Reusable function for selecting a product by name
async function selectProduct(rows, page, name) {

    const machedROw = rows.filter({   // Filter rows to find the one containing given product name
        has: page.locator('td'),      // Must have <td> elements
        hasText: name                 // Must contain the text passed in "name"
    })

    await machedROw.locator("input").check()   // Locate checkbox in that row and check it
}


// ✅ Test 4: Print all product details from table using loops
test("Print all product details using loop in Table", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")   // Open the webpage

    const table = await page.locator("#productTable")   // Locate the table

    const columns = await table.locator('thead tr th')  // Locate column headers
    console.log("Number of columns:", await columns.count())   // Print column count
    expect(await columns.count()).toBe(4)   // Verify there are 4 columns

    const rows = await table.locator("tbody tr")   // Locate all table rows
    console.log("Number of rows:", await rows.count())   // Print row count
    expect(await rows.count()).toBe(5)   // Verify there are 5 rows

    for (let i = 0; i < await rows.count(); i++) {   // Loop through each row
        const row = rows.nth(i)   // Get row by index

        const tds = row.locator('td')   // Get all <td> cells inside the row

        for (let j = 0; j < await tds.count() - 1; j++) {   // Loop through each cell except last (checkbox column)
            console.log(await tds.nth(j).textContent())   // Print cell text
        }
    }

    await page.waitForTimeout(5000)   // Wait for 5 seconds
})


// ✅ Test 5: Read data from all pages of the paginated table
test("Read data from all the pages in the table", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")   // Open the webpage

    const table = await page.locator("#productTable")   // Locate the table

    const columns = await table.locator('thead tr th')  // Locate column headers
    console.log("Number of columns:", await columns.count())   // Print column count
    expect(await columns.count()).toBe(4)   // Verify 4 columns exist

    const rows = await table.locator("tbody tr")   // Locate all table rows
    console.log("Number of rows:", await rows.count())   // Print row count
    expect(await rows.count()).toBe(5)   // Verify 5 rows exist

    const pages = await page.locator(".pagination li a")   // Locate all pagination links
    console.log('Number of pages in the table:', await pages.count())   // Print number of pagination pages

    for (let p = 0; p < await pages.count(); p++) {   // Loop through each pagination page
        if (p > 0) {
            await pages.nth(p).click()   // Click on pagination link to go to next page
        }

        for (let i = 0; i < await rows.count(); i++) {   // Loop through each row in current page
            const row = rows.nth(i)   // Get row
            const tds = row.locator('td')   // Get all cells inside row

            for (let j = 0; j < await tds.count() - 1; j++) {   // Loop through cells except last (checkbox column)
                console.log(await tds.nth(j).textContent())   // Print text content of cell
            }
        }
    }

    await page.waitForTimeout(5000)   // Wait for 5 seconds
})




// 🔹 1. innerHTML

// Returns HTML code (tags + text) inside an element.

// You can also set it to insert HTML markup.

// <div id="demo"><b>Hello</b> World</div>

// let html = document.getElementById("demo").innerHTML;
// console.log(html); 
// // 👉 Output: <b>Hello</b> World


// ✔️ Use when you want the raw HTML structure inside the element.

// 🔹 2. textContent

// Returns all text inside an element (ignores HTML tags).

// Includes hidden text (even if styled with display:none).

// Setting it replaces the content with plain text (not HTML).

// <div id="demo"><b>Hello</b> World <span style="display:none">Hidden</span></div>

// let txt = document.getElementById("demo").textContent;
// console.log(txt);
// // 👉 Output: Hello World Hidden


// ✔️ Use when you need all text exactly as in the DOM, including hidden text.

// 🔹 3. innerText

// Returns visible text only (respects CSS like display:none, visibility:hidden).

// Takes styles and layout into account (slow compared to textContent).

// <div id="demo"><b>Hello</b> World <span style="display:none">Hidden</span></div>

// let txt = document.getElementById("demo").innerText;
// console.log(txt);
// // 👉 Output: Hello World
