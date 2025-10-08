// ✅ Import Playwright test runner utilities
// 'test' => for defining test cases
// 'request' => for making API calls in Playwright
// 'expect' => for assertions/validations
import { test, request, expect } from "@playwright/test";

// ✅ Declare a reusable request context variable
let reqContext2;

// ✅ beforeAll hook runs ONCE before all tests
test.beforeAll("Before All the Test", async () => {
    // ✅ Create a request context with a baseURL & default headers
    reqContext2 = await request.newContext({
        baseURL: "https://restful-booker.herokuapp.com",
        extraHTTPHeaders: {
            Accept: "application/json"   // ✅ Default header for JSON response
        }
    })
})
  
// -----------------------------
// TEST CASE 1: Direct GET request using `request` fixture
// -----------------------------
test("API Testing Get Practice 1", async ({ request }) => {
    // ✅ Make a GET call with full URL
    const resp1 = await request.get("https://restful-booker.herokuapp.com/booking", {
        headers: { Accept: "application/json" }   // ✅ Add headers per request
    });
    console.log(await resp1.json());   // ✅ Print response JSON
})


// -----------------------------
// TEST CASE 2: Create NEW context inside the test
// -----------------------------
test("API Testing Get Practice 2", async () => {
    // ✅ Create new context (separate from global)
    //Each request.newContext() creates a fresh HTTP client.
    //No cookies, no auth tokens, no headers carried over from other tests.
    //Prevents cross-test pollution (one test’s data leaking into another).
    const reqContext = await request.newContext({
        baseURL: "https://restful-booker.herokuapp.com",
        extraHTTPHeaders: {
            Accept: "application/json"
        }
    });
    // ✅ Use baseURL + relative path
    const resp1 = await reqContext.get("/booking");
    console.log(await resp1.json());
})


// -----------------------------
// TEST CASE 3: Use request context created in beforeAll
// -----------------------------
test("API Testing Get Practice 3", async () => {
    // ✅ Reuse global reqContext2 defined in beforeAll
    const resp1 = await reqContext2.get("/booking");
    console.log(await resp1.json());
})


// -----------------------------
// TEST CASE 4: Using `request` fixture with relative path ❌ WRONG
// -----------------------------
test("API Testing Get Practice 4", async ({ request }) => {
    // ❌ This will fail because no baseURL is set for fixture `request`
    // ✅ Must use absolute URL unless request.newContext with baseURL was used
    const resp1 = await request.get("/booking");
    console.log(await resp1.json());
})


// -----------------------------
// TEST CASE 5: Get Booking by ID (204)
// -----------------------------
test("API Testing Get Practice 5", async ({ request }) => {
    const resp1 = await request.get("https://restful-booker.herokuapp.com/booking/35");
    console.log(await resp1.json());   // ✅ Print single booking details
})

// {
//   firstname: 'John',
//   lastname: 'Smith',
//   totalprice: 111,
//   depositpaid: true,
//   bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
//   additionalneeds: 'Breakfast'
// }


// -----------------------------
// TEST CASE 6: Get Booking with Query Parameters (inline URL)
// -----------------------------
test("API Testing Get Practice 6", async ({ request }) => {
    // ✅ Query params directly in URL
    const resp1 = await request.get("https://restful-booker.herokuapp.com/booking?firstname=John&lastname=Smith");
    console.log(await resp1.json());
})


// -----------------------------
// TEST CASE 7: Get Booking with Query Parameters (params option)
// -----------------------------
test("API Testing Get Practice 7", async ({ request }) => {
    // ✅ Better way: pass query params as object
    const resp1 = await request.get("https://restful-booker.herokuapp.com/booking", {
        params: { firstname: "John", lastname: "Smith" }
    });
    console.log(await resp1.json());
})


// -----------------------------
// TEST CASE 8: Validating Response using Assertions
// -----------------------------
test("API Testing Get Practice 8", async ({ request }) => {
    const resp1 = await request.get("https://restful-booker.herokuapp.com/booking/35");

    console.log(await resp1.json());

    // ✅ Validate status code
    expect(resp1.status()).toBe(200);

    // ✅ Validate that response is OK
    expect(resp1.ok()).toBeTruthy();

    // ✅ Validate partial JSON structure
    expect(await resp1.json()).toMatchObject({
        firstname: 'John',
        lastname: 'Smith',
        totalprice: 111,
        depositpaid: true,
        bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
        additionalneeds: 'Breakfast'
    })

    // ✅ Extract JSON and validate single field
    const jsonresp = await resp1.json()
    expect(jsonresp.firstname).toEqual("John");   // ❌ This will fail unless firstname=xyz
})


// -----------------------------
// TEST CASE 9: API + UI Verification
// -----------------------------
test("API with UI verification", async ({ request, page }) => {
    // ✅ API call to fetch product entries
    const resp2 = await request.get("https://api.demoblaze.com/entries");
    const jsonresp2 = await resp2.json();
    console.log(jsonresp2)

    // ✅ Print first product title
    console.log(jsonresp2.Items[0].title);

    // ✅ Navigate to UI
    await page.goto("https://www.demoblaze.com/");

    // ✅ Verify API response matches UI element
    await expect(page.getByRole('link', { name: 'Samsung galaxy s6' }))
        .toHaveText(jsonresp2.Items[0].title)
})





// 🌐 What is a GET API Call?

// A GET request is the most common HTTP method used to fetch data from a server.

// It is read-only (does not change data on the server).

// Parameters (filters, IDs, etc.) can be sent in the URL or as query parameters.

// Response is usually in JSON, XML, or HTML, depending on the API.

// 👉 Example in plain HTTP:

// GET https://restful-booker.herokuapp.com/booking/1


// This asks the server:

// “Give me the details of booking with ID = 1”

// 🛠 Structure of a GET Request

// HTTP Method → GET

// URL → resource endpoint (/booking, /booking/1)

// Headers → metadata (e.g., Accept: application/json)

// Query Parameters (optional) → e.g., /booking?firstname=John&lastname=Smith

// Request Body → ❌ Not allowed in GET (body is only for POST, PUT, PATCH)

// ✅ GET in Playwright

// Playwright provides request.get() to make GET API calls.

// 1. Basic GET with Absolute URL
// const resp = await request.get("https://restful-booker.herokuapp.com/booking");
// console.log(await resp.json());


// Fetches all bookings.

// No baseURL needed.

// 2. GET with Base URL (request.newContext)
// const apiContext = await request.newContext({
//   baseURL: "https://restful-booker.herokuapp.com",
//   extraHTTPHeaders: { Accept: "application/json" }
// });
// const resp = await apiContext.get("/booking");
// console.log(await resp.json());


// Cleaner since /booking is relative.

// Useful if multiple requests hit the same server.

// 3. GET by ID
// const resp = await request.get("https://restful-booker.herokuapp.com/booking/1");
// console.log(await resp.json());


// Retrieves details for a specific booking ID.

// 4. GET with Query Parameters (Inline URL)
// const resp = await request.get("https://restful-booker.herokuapp.com/booking?firstname=John&lastname=Smith");
// console.log(await resp.json());


// Finds bookings by filters.

// 5. GET with Query Parameters (params option)
// const resp = await request.get("https://restful-booker.herokuapp.com/booking", {
//   params: {
//     firstname: "John",
//     lastname: "Smith"
//   }
// });
// console.log(await resp.json());


// Cleaner and avoids string concatenation.

// 🔎 Validations on GET Response

// You can assert response details with Playwright’s expect:

// expect(resp.status()).toBe(200);           // ✅ Status code is 200 OK
// expect(resp.ok()).toBeTruthy();            // ✅ Response is successful
// expect(await resp.json()).toHaveProperty("firstname");  // ✅ JSON contains field

// 🚀 When to Use GET?

// Fetching data without modifying it

// Checking if a record exists

// Verifying API endpoints in test automation

// Cross-checking backend API response with frontend UI (E2E testing)