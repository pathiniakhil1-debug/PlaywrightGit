//Functions in JavaScript
//Functions in JavaScript are reusable blocks of code designed to perform specific tasks.
//They allow you to organize, reuse, and modularize code. It can take inputs, perform actions, and return outputs.

function sum(x, y) {
    return x + y;
}
console.log(sum(6, 9));

// Function Syntax and Working

// A function definition is sometimes also termed a function declaration or function statement. 
// Below are the rules for creating a function in JavaScript:
// Begin with the keyword function Keyword
// A user-defined function name (In the above example, the name is sum)
// A list of parameters enclosed within parentheses and separated by commas (In the above example, parameters are x and y)
// A list of statements composing the body of the function enclosed within curly braces {} 
// (In the above example, the statement is "return x + y").

//Return Statement

//A function can return a result using the return keyword. 
//This is optional but useful when you want to send data back from the function.

//Function Parameters

//Parameters are input passed to a function. 
//In the above example, sum(x , y) takes two parameters, x and y.

// Calling Functions
// After defining a function, the next step is to call them to make use of the function. 
// We can call a function by using the function name separated by the value of parameters enclosed between the parenthesis.

// Function Definition
function welcomeMsg(nameVal) {
    return ("Hello " + nameVal + " welcome to GeeksforGeeks");
}
let nameVal = "User";
// calling the function
console.log(welcomeMsg(nameVal)); // Output: Hello User welcome to GeeksforGeeks

// Why Functions?

// Functions can be used multiple times, reducing redundancy.
// Break down complex problems into manageable pieces.
// Manage complexity by hiding implementation details.
// Can call themselves to solve problems recursively.

// Function Invocation

// The function code you have written will be executed whenever it is called.
// Triggered by an event (e.g., a button click by a user).
// When explicitly called from JavaScript code.
// Automatically executed, such as in self-invoking functions.

// Characteristics of Functions

// Parameters vs Arguments: Parameters are placeholders for function and arguments are actual value for those placeholders.
// Return Values: Functions can return a value using the return keyword.
// Default Parameters: Default values can be assigned to function parameters.


// =======================
// 1. Function Expression
// =======================
// - Function without a name, stored in a variable.
// - Can be used like normal functions.

const mul = function (x, y) {
    return x * y;
};
console.log("Function Expression →", mul(4, 5)); 
// Output: 20


// =======================
// 2. Arrow Functions
// =======================
// - Shorter syntax for functions (ES6).
// - Do not bind their own 'this'.

const elements = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

// Normal way using function expression
const lengths1 = elements.map(function (s) {
    return s.length;
});
console.log("Normal way →", lengths1); 
// Output: [ 8, 6, 7, 9 ]

// Using Arrow Function
const lengths2 = elements.map((s) => s.length);
console.log("Arrow function way →", lengths2); 
// Output: [ 8, 6, 7, 9 ]



// =======================
// 3. Immediately Invoked Function Expression (IIFE)
// =======================
// - Runs immediately after being defined.
// - Used to create isolated scope.

(function () {
    console.log("IIFE executed immediately!");
})();
// Output: IIFE executed immediately!



// =======================
// 4. Callback Functions
// =======================
// - A function passed as an argument to another function.

function processNum(n, callback) {
    return callback(n); 
}

const double = (n) => n * 2;
console.log("Callback result →", processNum(5, double));
// Output: 10



// =======================
// 5. Anonymous Functions
// =======================
// - Functions without a name.
// - Often used inside other functions.

setTimeout(function () {
    console.log("Anonymous function executed after 1s!");
}, 1000);  
//output (after 1 second): Anonymous function executed after 1s!


// =======================
// 6. Nested Functions
// =======================
// - Functions inside another function.
// - Inner function can access outer function’s variables.

function outerFun(a) {
    function innerFun(b) {
        return a + b;  // inner function has access to 'a'
    }
    return innerFun;
}

const addTen = outerFun(10);
console.log("Nested Function result →", addTen(5)); 
// Output: 15



// =======================
// 7. Pure Functions
// =======================
// - Always return same output for same inputs.
// - No side effects (does not modify global state).

function pureAdd(a, b) {
    return a + b;
}

console.log("Pure Function result →", pureAdd(2, 3));
// Output: 5

