// ✅ Import test and expect from Playwright Test module
// 'test' => define test cases
// 'expect' => assertions for validations
import { expect, test } from "@playwright/test"


// -------------------------------
// TEST CASE 1: POST API CALL (Create Booking)
// -------------------------------
test("API Testing - Post Call 1", async ({ request }) => {

    // ✅ Send a POST request to create a new booking
    // Endpoint: POST /booking (absolute URL provided)
    // 'data' object = request body in JSON format
    const resp1 = await request.post("https://restful-booker.herokuapp.com/booking", {
        data: {
            "firstname": "Jim",
            "lastname": "Brown",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "Breakfast"
        }
    })

    // ✅ Convert response into JSON object
    const jsonResp1 = await resp1.json();
    console.log(jsonResp1);   // Print response for debugging

    // ✅ API Validations
    expect(resp1.status()).toBe(200);        // Status code must be 200
    expect(resp1.statusText()).toBe("OK");   // Status text must be "OK"
    expect(resp1.ok()).toBeTruthy();         // Response should be successful

    // ✅ Verify response body matches expected structure
    expect(jsonResp1.booking).toMatchObject({
        firstname: 'Jim',
        lastname: 'Brown',
        totalprice: 111,
        depositpaid: true,
        bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
        additionalneeds: 'Breakfast'
    });

    // ✅ Validate a single field value
    expect(jsonResp1.booking.additionalneeds).toEqual("Breakfast");
});



// -------------------------------
// TEST CASE 2: POST API CALL + UI VALIDATION
// -------------------------------
test("API with UI Verification", async ({ request, page }) => {

    // ✅ Step 1: API call to add item to Demoblaze cart
    // Endpoint: POST /addtocart
    // 'data' object contains required payload to add a product
    const resp2 = await request.post("https://api.demoblaze.com/addtocart", {
        data: {
            "id": "90f00e36-3cef-298d-a2bc-4405c36146fc",  // unique request ID
            "cookie": "user=7118f28c-60b6-0ff0-7ae7-18766ed162f6", // identifies the user
            "prod_id": 3,  // Product ID = Samsung galaxy s6
            "flag": false  // API flag (internal use)
        }
    });

    // ✅ Validate that POST request was successful
    expect(resp2.status()).toBe(200);

    // ✅ Step 2: Open UI (Demoblaze website in a browser)
    await page.goto("https://www.demoblaze.com/");

    // ✅ Step 3: Navigate to the Cart page
    await page.getByRole("link", { name: "Cart" }).click();

    // ✅ Step 4: Validate product name in cart matches API call (Samsung galaxy s6)
    await expect(page.locator("tr.success td:nth-child(2)")).toHaveText("Samsung galaxy s6");

    // ✅ Step 5: Validate product price in cart
    await expect(page.locator("tr.success td:nth-child(3)")).toHaveText("360");

    // ✅ Step 6: Validate total cart price is updated correctly
    await expect(page.locator("#totalp")).toHaveText("360");
});




// 🌐 What is a POST API Call?

// A POST request is an HTTP method used to send data to the server.

// Typically used to create new resources (e.g., user, booking, order).

// The request body contains data in formats like JSON, XML, or form-data.

// The server processes the data and usually returns:

// A status code (e.g., 201 Created, 200 OK)

// A response body with details of the created resource

// 👉 Example in raw HTTP:

// POST https://restful-booker.herokuapp.com/booking
// Content-Type: application/json

// {
//     "firstname": "Jim",
//     "lastname": "Brown",
//     "totalprice": 111,
//     "depositpaid": true,
//     "bookingdates": {
//         "checkin": "2018-01-01",
//         "checkout": "2019-01-01"
//     },
//     "additionalneeds": "Breakfast"
// }

// 🛠 Structure of a POST Request

// HTTP Method → POST

// URL → endpoint (e.g., /booking, /addtocart)

// Headers → define content type (application/json)

// Request Body → JSON payload with data to create

// Response → usually includes an ID + created resource

// ✅ POST in Playwright

// Playwright provides request.post() for POST API calls.

// Example from your test:
// const resp1 = await request.post("https://restful-booker.herokuapp.com/booking", {
//     data: {
//         "firstname": "Jim",
//         "lastname": "Brown",
//         "totalprice": 111,
//         "depositpaid": true,
//         "bookingdates": {
//             "checkin": "2018-01-01",
//             "checkout": "2019-01-01"
//         },
//         "additionalneeds": "Breakfast"
//     }
// })

// 🔎 Validations for POST API

// After making a POST request, you should validate:

// Response status code

// expect(resp1.status()).toBe(200);   // or 201 Created


// Response is successful

// expect(resp1.ok()).toBeTruthy();


// Response body contains created resource

// const jsonResp1 = await resp1.json();
// expect(jsonResp1.booking).toMatchObject({
//     firstname: "Jim",
//     lastname: "Brown",
//     totalprice: 111
// });


// Single field validation

// expect(jsonResp1.booking.additionalneeds).toEqual("Breakfast");


// Registering a new user

// Creating a booking/order

// Adding items to a shopping cart

// Sending form submissions

// Triggering actions that change server state

