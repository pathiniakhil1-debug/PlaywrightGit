// Callbacks vs Promises vs Async/Await

// Handling asynchronous operations is an essential part of JavaScript programming, 
// especially when dealing with APIs, file handling, database queries, and user interactions. 
// JavaScript provides three main ways to manage asynchronous tasks:

// Callbacks: The traditional approach using functions passed as arguments.
// Promises: A better alternative that improves readability and avoids callback ne  sting.
// Async/Await: A modern and cleaner syntax that makes asynchronous code look synchronous.


// What is Callback?

// Callbacks are functions passed as arguments to other functions and are executed once a specific task is completed. 
// They are commonly used in JavaScript for handling asynchronous operations 
// but can lead to "callback hell" when nested multiple times.

// Function that accepts a callback

// Example of a simple callback function
function sayHello(name, callback) {
    console.log("Hello, " + name);
    callback(); // call the callback after greeting
}

// Passing a callback function
sayHello("Akhil", function () {
    console.log("This is the callback function running!");
});
// Output:
// Hello, Akhil
// This is the callback function running!

// Example: Simulating an API request with a callback

// 1. Callback function to process user data
function process(data, callback) {
    console.log("Processing user data:", data);
    callback();
}

// 2. Function to fetch user data with a callback
function fetch(callback) {
    // Simulating an API request
    const user = { id: 1, name: "Pushkar" };
    callback(user);   //closure function // passing argument to callback function
}

// 3. Using the callback
fetch((data) => {
    process(data, () => {
        console.log("User data processed successfully.");
    });
});

// Output:
// Processing user data: { id: 1, name: 'Pushkar' }
// User data processed successfully.

// Example: Simple calculator using a callback
// A function that does an operation and then calls back
function calculate(a, b, callback) {
    let result = a + b;
    console.log("Calculating the sum:", result);
    callback(result);
}

// Using the callback
calculate(5, 3, function (sum) {
    console.log("The sum is:", sum);
});

// Output:
// Calculating the sum: 8
// The sum is: 8    

//Example: Using setTimeout (asynchronous callback)
function greet(name, callback) {
    console.log("Fetching data...");

    setTimeout(() => { // simulating delay
        console.log("Hello, " + name);
        callback();
    }, 2000);
}

greet("Akhil", function() {
    console.log("Greeting finished!");
});

// Output after 2 seconds:
// Fetching data...
// Hello, Akhil
// Greeting finished!   


// In above examples

// Callbacks are passed as arguments to other functions.
// They execute once the asynchronous operation is completed.
// Callback hell can occur with multiple nested callbacks, making the code harder to read and maintain.
// What is Promises?