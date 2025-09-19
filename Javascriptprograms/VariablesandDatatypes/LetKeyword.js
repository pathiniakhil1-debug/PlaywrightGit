// JavaScript Let
// Last Updated : 11 Jul, 2025
// The let keyword is a modern way to declare variables in JavaScript and was introduced in ECMAScript 6 (ES6).
// Unlike var, let provides block-level scoping. 
// This behaviour helps developers avoid unintended issues caused by variable hoisting and scope leakage that are common with var.

// 1. Block Scope

// Variables declared with let are block-scoped, meaning they are only accessible within the block, 
// statement, or expression where they are defined. This is a significant improvement over var, 
// which has function scope and can lead to unexpected behaviour.

// 1.1 Example of block scope with let

// if (true) {
//     let x = 10;
//     console.log(x); // Output: 10
// }
// console.log(x); // ReferenceError: x is not defined

// 2. No Hoisting Issues

// While variables declared with let are hoisted, they are not initialized. 
// This creates a temporal dead zone (TDZ) where accessing the variable before its declaration results in a ReferenceError, 
// helping prevent unintended access.

// 2.1 Example of no hoisting issues with let

// console.log(y); // ReferenceError: Cannot access 'y' before initialization
// let y = 20;
// console.log(y); // ReferenceError: Cannot access 'y' before initialization
// let y = 20;

// 3. No Redeclaration

// A major benefit of let is that it does not allow redeclaration of the same variable in the same scope. 
// This prevents accidental overwrites of variables, reducing bugs and improving code readability.

// let z = 30;
// let z = 40; // SyntaxError: Identifier 'z' has already been declared

// 4. Suitable for Loops

// Using let in loops is particularly beneficial because the variable declared with let is scoped to the loop block, 
// and each iteration gets a new instance of the variable.

for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}