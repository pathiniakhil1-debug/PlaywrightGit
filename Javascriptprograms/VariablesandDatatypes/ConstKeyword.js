// JavaScript const

// The const keyword in JavaScript is a modern way to declare variables, introduced in (ES6). 
// It is used to declare variables whose values need to remain constant throughout the lifetime of the application.

// const is block-scoped, similar to let, and is useful for ensuring immutability in your code. 
// Unlike let, the primary feature of const is that it cannot be reassigned once it has been initialized.

// 1. Block Scope
// Variables declared with const are block-scoped, which means they are accessible only within the block, statement,
// or expression in which they are defined.

// 1.1 Example of block scope with const

// if (true) {
//     const x = 10;
//     console.log(x); // Output: 10
// }
// console.log(x); // ReferenceError: x is not defined
// if (true) {
//     const x = 10;
//     console.log(x); // Output: 10
// }
// console.log(x); // ReferenceError: x is not defined

// 2. No Reassignment

// Variables declared with const cannot be reassigned after their initial declaration.
// Attempting to do so results in a TypeError.

// 2.1 Example of no reassignment with const

//const y = 20;
//y = 30; // TypeError: Assignment to constant variable.

// 3. Must Be Initialized

// Unlike let, a const variable must be initialized at the time of declaration.
// Declaring a const variable without assigning a value will throw a SyntaxError.

// 3.1 Example of must be initialized with const

//const z; // SyntaxError: Missing initializer in const declaration

// 4. Immutable Binding, Not Value

// const makes the variable binding immutable, but if the value is an object or array,
// you can still modify its properties or contents.

// 4.1 Example of immutable binding with const
const obj = { name: "Pranjal" };
obj.name = "Nanda";
console.log(obj.name); // Output: Nanda

const arr = [1, 2, 3];
arr.push(4); 
console.log(arr); // Output: [1, 2, 3, 4]

// 5. No Redeclaration

// Variables declared with const cannot be redeclared within the same scope, similar to let.

// 5.1 Example of no redeclaration with const

const a = 10;
//const a = 20; // SyntaxError: Identifier 'a' has already been declared