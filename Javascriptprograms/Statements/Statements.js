// JavaScript Statements
// JavaScript statements are programming instructions that a computer executes.
// A computer program is essentially a list of these "instructions" designed to perform tasks.
// In a programming language, such instructions are called statements.

// Types of Statements

// 1. Variable Declarations
// Variables store data values. 'var' is function-scoped, 'let' and 'const' are block-scoped.
// 'const' cannot be reassigned once initialized.
let name = "Mohan";
const age = 25;
var isActive = true;

// 2. Assignment Statement
// The '=' operator assigns values to variables.
// Here, number gets 10 and message gets a string.
let number = 10;
let message = "Hello, World!";

// 3. Expression Statements
// Expressions evaluate to a value. They can be assignments or function calls.
let x = number + 5;         // Expression: calculates number + 5
console.log(x);             // Expression: function call that prints a value

// 4. Control Flow Statements
// Control flow decides which block of code should run based on conditions.
if (number > 5) {
    console.log("Number is greater than 5");
} else {
    console.log("Number is 5 or less");
}

// Example with loop (for loop executes repeatedly until condition is false)
for (let i = 0; i < 3; i++) {
    console.log("Loop count:", i);
}

// 5. Function Declarations
// Functions are reusable blocks of code that can be called with arguments.
function greet(name) {
    return "Hello, " + name;
}
console.log(greet("Alisha"));

// 6. Return Statement
// The 'return' statement exits a function and sends back a value to the caller.
function add(a, b) {
    return a + b;
}
console.log("5 + 3 =", add(5, 3));

// 7. Throw Statement
// 'throw' is used to create custom errors and stop execution.
function checkAge(age) {
    if (age < 18) {
        throw new Error("Age must be 18 or older");
    }
    return "Access granted!";
}

// 8. Try...Catch Statement
// 'try' executes code and 'catch' handles errors without stopping the program.
try {
    console.log(checkAge(15)); // Will throw error
} catch (error) {
    console.error("Error Caught:", error.message);
}

// 9. Break and Continue Statements
// 'break' exits the loop immediately. 'continue' skips the current iteration.
for (let i = 0; i < 10; i++) {
    if (i === 5) break;         // stop loop when i = 5
    if (i % 2 === 0) continue;  // skip even numbers
    console.log("Odd number:", i);
}
