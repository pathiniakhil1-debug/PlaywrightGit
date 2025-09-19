// 🔹 1. Callback

// 👉 A callback is a function passed as an argument to another function, executed after a task is finished.

//Example:

function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

greet("Akhil", () => {
    console.log("Callback executed!");
});


// 🖥️ Output:

// Hello, Akhil
// Callback executed!

// 🔹 2. Promise

// 👉 A Promise is an object that represents the eventual completion (resolve) or failure (reject) of an async operation.
// They are used to handle asynchronous operations more gracefully than callbacks, especially to avoid "callback hell".

//Example:

let promise = new Promise((resolve, reject) => {
    let success = true;
    success ? resolve("Success!") : reject("Error!");
});

promise
    .then(result => console.log(result))
    .catch(err => console.log(err));


// 🖥️ Output:

// Success!


// 🔹 3. Async/Await

// 👉 async/await is syntax built on top of Promises that makes asynchronous code look synchronous and easier to read.

//Example:

function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Data fetched!"), 1000);
    });
}

async function getData() {
    const result = await fetchData();
    console.log(result);
}

getData();


// 🖥️ Output:

// Data fetched!


// ✅ Quick Interview Notes

// Callback → Function passed inside another function (can lead to callback hell).

// Promise → Handles async results with .then() and .catch().

// Async/Await → Cleaner way to write promises, looks synchronous.