// JavaScript While Loop
// The while loop executes a block of code as long as a specified condition is true. 
// In JavaScript, this loop evaluates the condition before each iteration and continues running as long as 
// the condition remains true.

// Syntax

// while (condition) {    
// Code block to be executed
// }

// --------------------
// WHILE LOOP
// --------------------

// Example 1: Print numbers from 1 to 5
// Condition is checked first → runs only if true
let count = 1;
while (count <= 5) {
  console.log(count);
  count++;  // update inside loop
}
// Output: 1, 2, 3, 4, 5


// Example 2: Traverse an array using while loop
let arr = [10, 20, 30, 40];
let i = 0;
while (i < arr.length) {
  console.log(arr[i]); // print each element
  i++;
}
// Output: 10, 20, 30, 40


// --------------------
// DO-WHILE LOOP
// --------------------

// Do-While loop
// A Do-While loop is another type of loop in JavaScript that is similar to the while loop, 
// but with one key difference: the do-while loop guarantees that the block of code inside the loop will be executed at least once,
// regardless of whether the condition is initially true or false .

// Syntax

// do {   
//         // code block to be executed 
//  } while (condition);

// Example: Print numbers from 1 to 5
// Do-While guarantees code executes at least once 
let num = 1;
do {
  console.log(num);
  num++;
} while (num <= 5);
// Output: 1, 2, 3, 4, 5


// Condition Checking

// While Loop → Condition is checked at the beginning of the loop.

// Do-While Loop → Condition is checked at the end of the loop.

// Execution Guarantee

// While Loop → The block may not execute even once if the condition is false initially.

// Do-While Loop → The block executes at least once no matter what, then checks the condition.

// Iterations

// While Loop → The number of iterations depends completely on the condition written in the while.

// Do-While Loop → There is always a minimum of one iteration, and further iterations depend on the condition.

// Control Flow Position

// While Loop → The loop control condition is written at the start.

// Do-While Loop → The loop control condition is written at the end.
