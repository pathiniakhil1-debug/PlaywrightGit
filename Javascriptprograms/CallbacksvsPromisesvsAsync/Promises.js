// What is Promises?
// Promises offer a more structured approach to handle asynchronous operations, 
// addressing the callback hell problem. They represent the eventual completion (or failure) of an asynchronous task.

// Promises represent the completion of an asynchronous task.
// They are chained with .then() for successful completion and .catch() for errors.
// Promises improve readability compared to callbacks, preventing nested structures.

// 🔹 Example 1: Simple calculator using Promise
// A function that does an operation and returns a promise
function calculate(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a === "number" && typeof b === "number") {
            resolve(a + b); // success
        } else {
            reject("Both inputs must be numbers"); // error
        }
    });
}

// Using the promise
calculate(5, 3)
    .then(sum => console.log("The sum is:", sum))
    .catch(err => console.log("Error:", err));

// output: The sum is: 8


///🔹 Example 2: Using setTimeout (asynchronous with Promise)

function greet(name) {
    return new Promise((resolve) => {
        console.log("Fetching data...");
        setTimeout(() => {
            resolve("Hello, " + name);
        }, 2000);
    });
}

// Using the promise
greet("Akhil").then(message => {
    console.log(message);
    console.log("Greeting finished!");
});

// Output:              
// Fetching data...
// (2 seconds later)
// Hello, Akhil
// Greeting finished!


//Example 3: Success/Failure (Login Simulation)

function login(user, pass) {
    return new Promise((resolve, reject) => {
        if (user === "admin" && pass === "1234") {
            resolve("Login successful!");
        } else {
            reject("Login failed. Wrong credentials.");
        }
    });
}

// Using the promise
login("admin", "1234")
    .then(msg => console.log(msg))   // success
    .catch(err => console.log(err)); // failure
// Output:
//Login successful!
