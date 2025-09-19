const { test, expect } = require('@playwright/test');

// ✅ Define a Playwright test named "Autosuggest Dropdown Test"
test('Autosuggest Dropdown Test', async ({ page }) => {

  // ✅ Navigate to the Abhibus website
  await page.goto('https://www.abhibus.com/');

  // ✅ Locate the "Leaving From" input field using XPath and type "telengana"
  await page.locator('//input[@placeholder="Leaving From"]').fill('telengana');

  // ✅ Wait for 2 seconds to allow autosuggest dropdown to load
  await page.waitForTimeout(2000);

  // ✅ Find all suggestion <div> elements under "Telangana"
  const suggestions = await page.$$(`//small[text() ='Telangana']/../../div`);

  console.log(suggestions)

  // ✅ Wait for another 2 seconds to make sure all suggestions are visible
  await page.waitForTimeout(2000);

  // ✅ Loop through each suggestion element
  for (const suggestion of suggestions) {

    // ✅ Extract the text content of the current suggestion
    const text = await suggestion.textContent();

    // ✅ Print the suggestion text to console (for debugging/logging)
    console.log(text);

    // ✅ Check if the suggestion contains the text "Narketpally"
    if (text.includes('Narketpally')) {

      // ✅ If found, click on that suggestion
      await suggestion.click();

      // ✅ Break the loop after selecting the desired suggestion
      break;
    }
  }

  // ✅ Wait 2 seconds to observe the selected value before test ends
  await page.waitForTimeout(2000);

});




// const { test, expect } = require('@playwright/test');

// test('Autosuggest Dropdown Test with For-Of + allTextContents', async ({ page }) => {

//   // ✅ Navigate to the Abhibus website
//   await page.goto('https://www.abhibus.com/');

//   // ✅ Locate the "Leaving From" input field and type "telengana"
//   await page.locator('//input[@placeholder="Leaving From"]').fill('telengana');

//   // ✅ Wait for autosuggest dropdown to load
//   await page.waitForTimeout(2000);

//   // ✅ Locator for all suggestion <div> elements under "Telangana"
//   const suggestionLocator = page.locator(`//small[text()='Telangana']/../../div`);

//   // ✅ Get all suggestion texts
//   const suggestionTexts = await suggestionLocator.allTextContents();
//   console.log("✅ Suggestions:", suggestionTexts);

//   // ✅ Loop through each suggestion text
//   let index = 0;
//   for (const text of suggestionTexts) {

//     // ✅ Print suggestion text
//     console.log(text);

//     // ✅ Check if it contains "Narketpally"
//     if (text.includes("Narketpally")) {
//       console.log("👉 Clicking on suggestion:", text);

//       // ✅ Use the same index to click the correct suggestion
//       await suggestionLocator.nth(index).click();

//       // ✅ Break after clicking
//       break;
//     }

//     index++;
//   }

//   // ✅ Wait 2 seconds to observe the selected value before test ends
//   await page.waitForTimeout(2000);

// });




// 🔎 1. innerHTML

// Returns the HTML markup contained inside an element (including tags).

// Changes to it will re-render the inner DOM.

// ✅ Example:

// <div id="demo"><b>Hello</b> World</div>

// document.getElementById("demo").innerHTML;
// // Output: "<b>Hello</b> World"

// 🔎 2. innerText

// Returns the visible text only (respects CSS styles like display:none, text-transform, visibility:hidden).

// Takes into account line breaks and rendered appearance.

// Slower (it triggers layout & reflow).

// ✅ Example:

// <div id="demo">
//   Hello <span style="display:none">Hidden</span> World
// </div>

// document.getElementById("demo").innerText;
// // Output: "Hello  World"   (Hidden span is ignored)

// 🔎 3. textContent

// Returns all text inside an element (raw text, without HTML tags).

// Ignores styling and hidden elements — so even invisible text is included.

// Faster (no reflow required).

// ✅ Example:

// <div id="demo">
//   Hello <span style="display:none">Hidden</span> World
// </div>

// document.getElementById("demo").textContent;
// // Output: "Hello Hidden World"

// 🟢 In Playwright

// locator.innerHTML() → same as browser innerHTML

// locator.innerText() → visible text only (common for assertions)

// locator.textContent() → raw text (useful when hidden text also matters)