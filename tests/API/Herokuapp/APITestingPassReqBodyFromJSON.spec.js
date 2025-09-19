import { expect, test } from "@playwright/test";
// 🔹 Import external JSON file with test data
import ApiJson from "../../../test-data/API.json";

// ------------------------ POST CALL ------------------------ //
test("API Testing - Pass Request body from JSON For Post Call", async ({ request }) => {
  // 🔹 Step 1: Send a POST request with body from API.json (postcalldata object)
  const respPost = await request.post("https://restful-booker.herokuapp.com/booking", {
    data: ApiJson.postcalldata,   // Request body comes from JSON
  });

  // 🔹 Step 2: Verify response (optional: depends on API behavior)
  const respPostJson = await respPost.json();
  console.log("POST Response:", respPostJson);

  expect(respPost.status()).toBe(200);              // POST should succeed
  expect(respPostJson.booking.firstname).toBe(ApiJson.postcalldata.firstname); // Check name
});

// ------------------------ PUT CALL ------------------------ //
test("API Testing - Pass Request Payload from JSON for Put Call", async ({ request }) => {
  // 🔹 Step 1: Send a PUT request to update booking ID=1 with data from JSON
  const respPut = await request.put("https://restful-booker.herokuapp.com/booking/1", {
    data: ApiJson.putcalldata,   // Request body comes from JSON
  });

  // 🔹 Step 2: Convert response to JSON
  const respPutJson = await respPut.json();
  console.log("PUT Response:", respPutJson);

  // 🔹 Step 3: Validate response
  expect(respPut.status()).toBe(200);                       // PUT should succeed
  expect(respPutJson).toMatchObject(ApiJson.putcalldata);   // Entire object matches
  expect(respPutJson.firstname).toEqual(ApiJson.putcalldata.firstname); // Individual field check
});



// ✅ Benefits of using JSON file for payloads

// Separation of test logic & data → Your test code stays clean.

// Reusable test data → Multiple tests can use the same JSON file.

// Easy to maintain → Just edit API.json when payload changes.

// Scalable → You can create multiple JSON payloads for different scenarios (valid, invalid, edge cases).