//🔹 1. Callback Version

function fetchUser(callback) {
    setTimeout(() => {
        callback({ id: 1, name: "Akhil" });
    }, 1000);
}

function processUser(user, callback) {
    setTimeout(() => {
        console.log("Processing user:", user.name);
        callback();
    }, 1000);
}

// Using callbacks
fetchUser((user) => {
    processUser(user, () => {
        console.log("✅ User processed (callback).");
    });
});


// 🖥️ Output:

// Processing user: Akhil
// ✅ User processed (callback).

//👉 Problem: If tasks get bigger, callbacks start nesting deeply → callback hell.


//🔹 2. Promise Version
function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: "Akhil" });
        }, 1000);
    });
}

function processUser(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Processing user:", user.name);
            resolve();
        }, 1000);
    });
}

// Using promises
fetchUser()
    .then(user => processUser(user))
    .then(() => console.log("✅ User processed (promise)."))
    .catch(err => console.log("Error:", err));

//👉 Cleaner than callbacks → no deep nesting, just chaining.


//🔹 3. Async/Await Version

function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: "Akhil" });
        }, 1000);
    });
}

function processUser(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Processing user:", user.name);
            resolve();
        }, 1000);
    });
}

// Using async/await
async function run() {
    try {
        const user = await fetchUser();     // wait for fetch
        await processUser(user);           // wait for process
        console.log("✅ User processed (async/await).");
    } catch (err) {
        console.log("Error:", err);
    }
}

run();
//output:

// Processing user: Akhil
// ✅ User processed (async/await). 