import { test, expect } from "@playwright/test"

// ✅ Test Case: Delete Call For API Testing
test("Delete Call For API Testing", async ({ request }) => {

    // 🔹 Step 1: Send DELETE request to delete booking with ID=2
    const respDelete = await request.delete("/booking/2");

    // 🔹 Step 2: Validate response status code
    expect(respDelete.status()).toBe(201);  
    // 201 = "Created" → restful-booker API uses this code to confirm deletion

    // 🔹 Step 3: Extract raw text response
    const respDelText = await respDelete.text();
    console.log(respDelText);  
    // Expected Output: "Created"

    // 🔹 Step 4: Validate deletion response message
    expect(respDelText).toEqual("Created");  
    // API confirms successful deletion with plain text

    // 🔹 Step 5: Send GET request again for the same booking ID
    const respGet = await request.get("https://restful-booker.herokuapp.com/booking/2");

    // 🔹 Step 6: Print status code of GET request after deletion
    console.log(respGet.status());  
    // Should print 404

    // 🔹 Step 7: Validate that resource is no longer available
    expect(respGet.status()).toBe(404);  
    // 404 = Not Found → means booking was deleted successfully
})



// 📘 Understanding Methods Used

// request.delete(url) → sends a DELETE request to remove resource.

// respDelete.status() → checks HTTP status code.

// respDelete.text() → gets raw response text (here "Created").

// request.get(url) → verifies deletion by checking resource again.

// respGet.status() → ensures resource no longer exists (404).

// ✅ Why is this test important?

// Ensures the API correctly removes a booking.

// Confirms deleted resource cannot be retrieved again.

// Validates both DELETE response and GET after deletion.