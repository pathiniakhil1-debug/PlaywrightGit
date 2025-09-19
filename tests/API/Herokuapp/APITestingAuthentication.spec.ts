import { expect, test } from "@playwright/test"

// 🔹 Variable to store the token globally for later tests
let tokenValue;

// ------------------------ BEFORE ALL TESTS ------------------------ //
test.beforeAll("Basic Auth", async ({ request }) => {
    // 🔹 Step 1: Send a POST request to /auth to generate token
    const respToken = await request.post("https://restful-booker.herokuapp.com/auth", {
        data: {
            "username": "admin",       // username required for authentication
            "password": "password123"  // password required for authentication
        }
    })

    // 🔹 Step 2: Extract the token from response JSON and store in global variable
    tokenValue = (await respToken.json()).token;
})

// ------------------------ PUT CALL WITH TOKEN ------------------------ //
test("Authentication of Put Call using basic auth", async ({ request }) => {
    // 🔹 Step 1: Send PUT request to update booking with ID=1
    const respPut = await request.put("https://restful-booker.herokuapp.com/booking/1", {
        headers: {
            // 🔹 Pass token in Cookie header for authentication
            Cookie: "token=" + tokenValue
        },
        data: {
            "firstname": "WishInfinite",  // updating firstname
            "lastname": "Brown",          // updating lastname
            "totalprice": 111,            // updating price
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "Breakfast" // updating extra field
        }
    });

    // 🔹 Step 2: Validate that PUT request succeeded
    expect(respPut.status()).toBe(200);
})

// ------------------------ DELETE CALL WITH TOKEN ------------------------ //
test("Authentication of Delete Call using basic auth", async ({ request }) => {
    // 🔹 Step 1: Send DELETE request for booking with ID=1
    const respDelete = await request.delete("https://restful-booker.herokuapp.com/booking/1", {
        headers: {
            // 🔹 Pass token again for authentication
            Cookie: "token=" + tokenValue
        }
    })

    // 🔹 Step 2: Validate that Delete request succeeded
    expect(respDelete.status()).toBe(201); // 201 → resource deleted
})


// ------------------------ API KEY EXAMPLE (Commented) ------------------------ //
// test("Authentication with API Key",async({request})=>{
//     // 🔹 Alternative way using Basic Auth (base64 encoded username:password)
//     const resp = await request.put("https://restful-booker.herokuapp.com/booking/1",{
//         headers:{
//             Authorization:"Basic YWRtaW46cGFzc3dvcmQxMjM="   // base64 of admin:password123
//         },
//         data:{
//             "firstname" : "WishInfinite",
//             "lastname" : "Brown",
//             "totalprice" : 111,
//             "depositpaid" : true,
//             "bookingdates" : {
//                 "checkin" : "2018-01-01",
//                 "checkout" : "2019-01-01"
//             },
//             "additionalneeds" : "Breakfast"
//         }
//     })
//
//     expect(resp.status()).toBe(200);
// })





// 🔑 Authentication vs Authorization Key
// 1. Authentication
// Means: Who are you? (identity verification)

// Example:

// Username: admin

// Password: password123

// These credentials are sent to /auth endpoint.

// In return → Server gives back a token.

// That token proves you are a valid user.

// 2. Authorization
// Means: What are you allowed to do? (permissions)

// Example:

// After login, you use token=xyz123 in headers.

// This token authorizes you to update (PUT) or delete (DELETE) booking data.

// Without this token → You are not authorized to perform these actions.

// 👉 In your code:

// username + password → Authentication (identity check).

// token in Cookie header → Authorization (permission to update/delete booking).

