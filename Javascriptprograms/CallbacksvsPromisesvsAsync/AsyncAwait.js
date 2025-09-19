// What is Async/Await?
// Async/Await is built on top of Promises and allows asynchronous code to be written in a synchronous style, 
// making it easier to read and understand.

// 🔹 1. Basic Example
// // A function that returns a Promise
function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("✅ Data fetched!");
        }, 2000);
    });
}

// Using async/await
async function fetchData() {
    console.log("Fetching...");
    let result = await getData(); // waits until Promise resolves
    console.log(result);
    console.log("Done");
}

fetchData();

// 🖥️ Output:

// Fetching...
// (2 seconds later)
// ✅ Data fetched!
// Done


//👉 Here, await makes JavaScript wait until the Promise is resolved before moving forward.

//🔹 2. Handling Errors with try...catch
function getUser() {
    return new Promise((resolve, reject) => {
        let success = false;
        setTimeout(() => {
            if (success) {
                resolve({ id: 1, name: "Akhil" });
            } else {
                reject("❌ Failed to fetch user");
            }
        }, 1500);
    });
}

async function showUser() {
    try {
        const user = await getUser(); // waits for Promise
        console.log("User:", user);
    } catch (error) {
        console.log("Error:", error);
    } finally {
        console.log("Operation finished");
    }
}

showUser();


// 🖥️ Output (when success = false):

// Error: ❌ Failed to fetch user
// Operation finished

//🔹 3. Multiple Await Calls (Sequential)
function task(message, time) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(message), time);
    });
}

async function runTasks() {
    const first = await task("Task 1 completed", 1000);
    console.log(first);

    const second = await task("Task 2 completed", 2000);
    console.log(second);

    const third = await task("Task 3 completed", 500);
    console.log(third);

    console.log("All tasks finished!");
}

runTasks();


// 🖥️ Output:

// Task 1 completed   (after 1 sec)
// Task 2 completed   (after 2 more sec)
// Task 3 completed   (after 0.5 sec)
// All tasks finished!

//🔹 4. Running in Parallel with Promise.all
async function runParallel() {
    const results = await Promise.all([
        task("Task A", 1000),
        task("Task B", 2000),
        task("Task C", 500)
    ]);
    console.log(results);
}

runParallel();


// 🖥️ Output (after ~2 sec):

// [ 'Task A', 'Task B', 'Task C' ]


// ✅ Summary

// async makes a function always return a Promise.

// await pauses inside async until the Promise resolves or rejects.

// Easier to read than .then() / .catch().
