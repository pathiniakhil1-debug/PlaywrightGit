// JavaScript Conditional Statements Demo

// 1. if statement
// Runs a block only if the condition is true.
let age = 19;
if (age > 18) {
    console.log("Congratulations, You are eligible to drive");
}

// 2. if-else statement
// Executes one block if true, another if false.
let i = 10;
if (i < 15) {
    console.log("i is less than 15");
} else {
    console.log("I am Not in if");
}

// 3. nested-if statement
// Allows an if inside another if, checking multiple conditions step by step.
if (i == 10) {
    if (i < 15) {
        console.log("i is smaller than 15");
        if (i < 12) {
            console.log("i is smaller than 12 too");
        } else {
            console.log("i is greater than 15");
        }
    }
}

// 4. if-else-if ladder
// Used to test multiple conditions in sequence. Once one is true, others are skipped.
let j = 20;
if (j == 10) {
    console.log("j is 10");
} else if (j == 15) {
    console.log("j is 15");
} else if (j == 20) {
    console.log("j is 20");
} else {
    console.log("j is not present");
}
