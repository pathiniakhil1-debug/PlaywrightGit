// JavaScript Loops
// Loops in JavaScript are used to reduce repetitive tasks by repeatedly executing 
// a block of code as long as a specified condition is true. This makes code more concise and efficient.

// Choosing the Right Loop
// Use for loop when the number of iterations is known.
// Use while loop when the condition depends on dynamic factors.
// Use do-while loop to ensure the block executes at least once.
// Use for...in loop to iterate over object properties.
// Use for...of loop for iterating through iterable objects.



// JavaScript For Loop

// JavaScript for loop is a control flow statement that allows code to be executed repeatedly based on a condition. 
// It consists of three parts: initialization, condition, and increment/decrement.

// Syntax

// for (statement 1 ; statement 2 ; statement 3){    code here...}
// Statement 1: It is the initialization of the counter. It is executed once before the execution of the code block.
// Statement 2: It defines the testing condition for executing the code block
// Statement 3: It is the increment or decrement of the counter & executed (every time) after the code block has been executed.

// 1. Basic for loop
// Initialization: x = 2
// Condition: run till x <= 4
// Update: x++ after each iteration
for (let x = 2; x <= 4; x++) {
    console.log("Value of x: " + x);
}
// Output: 2, 3, 4


// 2. For loop to print table of 5
// i starts from 1 and goes till 10
let x = 5;
for (let i = 1; i <= 10; i++) {
    console.log(x * i);
}
// Output: 5, 10, 15, ..., 50


// 3. For loop to print array elements
let arr = [10, 20, 30, 40];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// Output: 10, 20, 30, 40


// --------------------
// Statements inside for loop
// --------------------

// Statement 1 → Initialization
// This sets up the counter variable before loop starts.
let y = 2;
for (; y <= 4; y++) {
    console.log("Value of y: " + y);
}
// Output: 2, 3, 4


// Statement 2 → Condition
// This checks whether loop should continue.
// If omitted, treated as true (infinite loop unless break is used).
let z = 2;
for (; ; z++) {
    console.log("Value of z: " + z);
    break; // exits immediately, otherwise infinite loop
}
// Output: 2


// Statement 3 → Update
// Normally done in the loop header, but can also be done inside the body.
const subjects = ["Maths", "Science", "Polity", "History"];
let i = 0;
let len = subjects.length;
let gfg = "";
for (; i < len;) {       // no update in header
    gfg += subjects[i];  // append subject name
    i++;                 // update done inside body
}
console.log(gfg);
// Output: MathsSciencePolityHistory
