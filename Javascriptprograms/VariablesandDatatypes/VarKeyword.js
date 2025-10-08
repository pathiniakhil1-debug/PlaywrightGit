// Variables
// A variable is like a container that holds data that can be reused or updated later in the program.
// In JavaScript, variables are declared using the keywords var, let, or const.

//JavaScript Var Statement

// The var keyword is used to declare variables in JavaScript.
// It has been part of the language since its inception. When a variable is declared using var,
// it is function-scoped or globally-scoped, depending on where it is declared.

// 1. Function Scope
// Variables declared using var are function-scoped.
// This means they are accessible anywhere within the function they are declared,
// even before their declaration due to hoisting.

//1.1Example of function scope with var

function testVar() {
    var x = 10;
    console.log(x); // Output: 10
}

console.log(x); // Error: x is not defined ,cant access x outside the function

//2. Global Scope
//If var is used outside of any function, it creates a global variable,accessible anywhere in the script.

// 2.1 Example of global scope with var

var x;            // declare globally
function testVar() {
    x = 10;       // assign value
    console.log(x); // 10
}

testVar();
console.log(x); // 10

// 3. Re-declaration of Variables
// var allows you to re-declare variables within the same scope without throwing any errors,
// which can lead to unintended behavior.

// 3.1 Example of re-declaration with var

var a = 5;
var a = 10;
console.log(a); // Output: 10

// 4. Hoisting
// Variables declared with var are hoisted to the top of their scope, 
// meaning the declaration part is moved to the top, but not the initialization. 
// This can result in undefined behavior if not understood properly.

// 4.1 Example of hoisting with var

console.log(hoistedVar); // Output: undefined
var hoistedVar = "Hoisted!";

// 5. No Block Scope
// Unlike let and const, var does not have block scope. 
// Variables declared with var inside a block (like an if or for loop) are accessible outside that block.

// 5.1 Example of no block scope with var

if (true) {
    var blockVar = "I am not block scoped";
}
console.log(blockVar); // Output: I am not block scoped