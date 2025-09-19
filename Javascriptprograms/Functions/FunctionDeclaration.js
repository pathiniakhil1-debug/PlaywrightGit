// Key Differences:
// Function Declaration vs. Function Expression
// Function Declaration: The function is defined and can be called anywhere in the code
// (even before it’s defined, due to something called "hoisting").
// Function Expression: The function is defined as part of an expression (usually assigned to a variable), 
// and it can only be called after the line where it’s defined.

// =======================
// 1. Function Declaration
// =======================
// - Classic way of creating functions.
// - Hoisted (you can call them before definition).
// - Starts with `function` keyword.

function add(a, b) {
    console.log(a + b);
}

add(2, 3); // Output: 5


// =======================
// 2. Function Expression
// =======================
// - Function is created and stored inside a variable.
// - Not hoisted (must be defined before using).
// - Useful when passing functions as arguments.

const addExpr = function (a, b) {
    console.log(a + b);
};

addExpr(2, 3); // Output: 5


// =======================
// 3. Arrow Function
// =======================
// - Introduced in ES6.
// - Shorter syntax using =>.
// - Does NOT have its own `this` (lexical this).
// - Great for small functions like callbacks/map/filter.

let addArrow = (a, b) => a + b;
console.log(addArrow(3, 2)); // Output: 5


// Example with multiple lines
const great = (a, b) => {
    if (a > b) {
        return "a is greater";
    } else {
        return "b is greater";
    }
};

console.log(great(3, 5)); // Output: b is greater
