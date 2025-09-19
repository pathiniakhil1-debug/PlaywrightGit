import { test, expect } from "@playwright/test";

// ✅ Test Case: Update booking with PUT and verify with GET
test("API Testing - Put Call 1", async ({ request }) => {

    // -------------------- [ STEP 1: PUT Request to Update Booking ] --------------------
    // PUT -> Used to UPDATE an existing resource (booking with ID=1 in this case).
    // request.put(url, {headers, data}) -> sends HTTP PUT request with headers and body.
    const respPut = await request.put("/booking/1", {
        headers: {
            // Basic Authentication (username=admin, password=password123 encoded in Base64)
            Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },
        data: {
            "firstname": "Wish",            // updated firstname
            "lastname": "Infinite",         // updated lastname
            "totalprice": 999,              // updated price
            "depositpaid": true,            // boolean value
            "bookingdates": {               // nested JSON object
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "Pan Cakes"  // updated needs
        }
    });

    // -------------------- [ STEP 2: Parse Response as JSON ] --------------------
    // respPut.json() -> Extracts the response body into JSON object
    const jsonresp = await respPut.json();
    console.log("PUT Response JSON:", jsonresp);

    // -------------------- [ STEP 3: Validate PUT Response ] --------------------
    // respPut.status() -> returns HTTP status code (200 = OK)
    expect(respPut.status()).toBe(200);

    // respPut.statusText() -> returns text for status (OK, Created, etc.)
    expect(respPut.statusText()).toBe("OK");

    // respPut.ok() -> returns true if status is between 200-299
    expect(respPut.ok()).toBeTruthy();

    // toMatchObject() -> checks partial deep match of object
    expect(jsonresp).toMatchObject({
        firstname: 'Wish',
        lastname: 'Infinite',
        totalprice: 999,
        depositpaid: true,
        bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
        additionalneeds: 'Pan Cakes'
    });

    // toEqual() -> strict equality check for single value
    expect(jsonresp.additionalneeds).toEqual("Pan Cakes");


    // -------------------- [ STEP 4: GET Request to Verify Update ] --------------------
    // request.get(url) -> Fetches data of booking with ID=1 after PUT update
    const respGet = await request.get("https://restful-booker.herokuapp.com/booking/1");

    // respGet.json() -> Extracts GET response as JSON object
    const jsonGet = await respGet.json();
    console.log("GET Response JSON:", jsonGet);

    // -------------------- [ STEP 5: Validate GET Response Matches Updated Data ] --------------------
    expect(jsonGet).toMatchObject({
        firstname: 'Wish',
        lastname: 'Infinite',
        totalprice: 999,
        depositpaid: true,
        bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
        additionalneeds: 'Pan Cakes'
    });
});




// 🔹 What is a PUT Call in API?

// PUT is one of the main HTTP methods used in REST APIs.

// Purpose: To update an existing resource (or create if it doesn’t exist, depending on API design).

// Unlike POST (which usually adds new resources), PUT replaces the entire resource at a given
// endpoint with the data you send.

// 🔹 Characteristics of PUT

// Idempotent

// Calling the same PUT request multiple times will always give the same result.

// Example: If you update a user’s name to "Akhil", calling the same request again won’t create duplicates,
// it will just keep it as "Akhil".

// Requires Resource Identifier (ID)

// Usually needs a unique identifier in the URL (e.g., /booking/1) to know which resource to update.

// Request Body = Full Resource Representation

// A PUT call generally expects you to send all fields of the object, not just the one you want to update.

// If you send partial data, some APIs may overwrite missing fields with defaults.

// For partial updates, APIs usually provide PATCH instead of PUT.

// 🔹 Example of PUT API Call
// Request:
// PUT https://restful-booker.herokuapp.com/booking/1


// Headers:

// {
//   "Content-Type": "application/json",
//   "Authorization": "Basic YWRtaW46cGFzc3dvcmQxMjM="
// }


// Body:

// {
//   "firstname" : "Wish",
//   "lastname" : "Infinite",
//   "totalprice" : 999,
//   "depositpaid" : true,
//   "bookingdates" : {
//     "checkin" : "2018-01-01",
//     "checkout" : "2019-01-01"
//   },
//   "additionalneeds" : "Pan Cakes"
// }

// Response (200 OK):
// {
//   "firstname" : "Wish",
//   "lastname" : "Infinite",
//   "totalprice" : 999,
//   "depositpaid" : true,
//   "bookingdates" : {
//     "checkin" : "2018-01-01",
//     "checkout" : "2019-01-01"
//   },
//   "additionalneeds" : "Pan Cakes"
// }

// 🔹 Benefits of PUT

// Ensures full replacement of a resource.

// Predictable and idempotent (safe to retry).

// Good for synchronization (if client always sends the latest state of resource).

// 🔹 Difference Between PUT vs POST vs PATCH

// POST → Create a new resource. (e.g., POST /booking)

// PUT → Replace an existing resource fully. (e.g., PUT /booking/1)

// PATCH → Update part of a resource (e.g., just firstname).

// 👉 In your Playwright API test, you used request.put() to update a booking, then confirmed with request.
// get() that the booking was updated correctly.
// That’s exactly the right way to validate PUT behavior.