// Import required modules from Playwright Test
const { test, expect } = require("@playwright/test")

// Variable to store created user ID
var userid;

// Test 1: GET request to fetch all users on page 2
test("Get all Users", async ({ request }) => {
    // Send GET request to API with custom header
    const response = await request.get("https://reqres.in/api/users?page=2", {
        headers: { 'x-api-key': 'reqres-free-v1' }  // Custom header, although not required by reqres.in
    })

    // Print response body to the console
    console.log(await response.json())

    // Assert response status is 200 (OK)  
    expect(response.status()).toBe(200)
})

// Test 2: GET request to fetch a single user with ID = 2
test("Get single Users", async ({ request }) => {
    const response = await request.get("https://reqres.in/api/users/2", {
        headers: { 'x-api-key': 'reqres-free-v1' }
    })

    console.log(await response.json())

    expect(response.status()).toBe(200)
})

// Test 3: POST request to create a new user
test("Create user", async ({ request }) => {
    const response = await request.post("https://reqres.in/api/users", {
        // Send user data (name and job) in request body
        data: { "name": "kumar", "job": "trainer" },
        headers: { 'x-api-key': 'reqres-free-v1' }
    })

    console.log(await response.json())

    // Assert response status is 201 (Created)
    expect(response.status()).toBe(201)

    // Extract the user ID from response and store in global variable `userid`
    var res = await response.json()
    userid = res.id  // This ID will be used in update and delete tests
})

// Test 4: PUT request to update the created user's job
test("Update user", async ({ request }) => {
    const response = await request.put(`https://reqres.in/api/users/${userid}`, {
        // Update job from 'trainer' to 'engineer'
        data: { "name": "kumar", "job": "engineer" },
        headers: { 'x-api-key': 'reqres-free-v1' }
    })

    console.log(await response.json())

    // Assert response status is 200 (OK)
    expect(response.status()).toBe(200)
})

// Test 5: DELETE request to delete the created user
test("Delete user", async ({ request }) => {
    const response = await request.delete(`https://reqres.in/api/users/${userid}`, {
        headers: { 'x-api-key': 'reqres-free-v1' }
    })

    // No content should be returned; status 204
    expect(response.status()).toBe(204)
})



// request in each test is Playwright's APIRequestContext used for making HTTP calls.

// expect(response.status()).toBe(...) is used to verify the response status.

// userid is a global variable used to track the ID of the user created in the POST request 
// so that it can be updated and deleted in later tests.

// headers: { 'x-api-key': 'reqres-free-v1' } is optional for reqres.in and is added for demonstration of custom headers.

// Each test runs independently unless configured otherwise. To ensure tests run in order or share state, use test.
// step or test.describe.serial() (advanced usage).


