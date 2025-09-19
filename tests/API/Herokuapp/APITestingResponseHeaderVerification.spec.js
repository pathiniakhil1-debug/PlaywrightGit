import { test, expect } from "@playwright/test";

// ✅ Test case to fetch and validate response headers
test("Fetch and Validate Response Header", async ({ request }) => {

    // 🔹 Step 1: Make a GET request to the endpoint
    const getResponse = await request.get("/booking/1");
    // Here `/booking/1` → fetches details of booking with ID=1

    // 🔹 Step 2: Get all headers in key:value object format
    const headersValue = getResponse.headers();
    console.log(headersValue);
    // Example output: { 'server': 'Cowboy', 'x-powered-by': 'Express', ... }

    // 🔹 Step 3: Validate specific headers from the response
    expect(headersValue.server).toEqual("Cowboy");
    // Checking if "server" header = Cowboy  
    expect(headersValue["x-powered-by"]).toEqual("Express");
    // Checking if "x-powered-by" header = Express  

    console.log("*****************************************************************")

    // 🔹 Step 4: Get headers in array format (array of objects → { name, value })
    const headersArrayValues = getResponse.headersArray();
    console.log(headersArrayValues);
    // Example: [ { name: 'server', value: 'Cowboy' }, { name: 'x-powered-by', value: 'Express' } ... ]

    // 🔹 Step 5: Validate total number of headers in response
    expect(headersArrayValues.length).toBe(11);
    // Making sure response has exactly 11 headers

    // 🔹 Step 6: Print each header name & value
    headersArrayValues.forEach((header) => {
        console.log(header.name + "::" + header.value);
        // Output like: server::Cowboy, x-powered-by::Express
    })
})




// 📘 Understanding methods used

// request.get(url) → sends a GET request.

// response.headers() → returns headers in object format (key:value).

// response.headersArray() → returns headers in array format → [ {name, value}, ... ].

// expect(...).toEqual(...) → assertion to check header values.

// headersArrayValues.forEach(...) → loop through each header and print values.

// ✅ Why validate headers?

// To confirm server technology (server, x-powered-by)

// To check CORS policies (access-control-allow-origin)

// To verify content type (content-type)

// To ensure security headers are set (strict-transport-security, x-frame-options)