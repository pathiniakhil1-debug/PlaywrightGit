// JavaScript Break Statement
// JavaScript break statement is used to terminate the execution of the loop or the switch statement when the condition is true.
// It can be used in loops like for, while, and do-while, as well as in switch statements.

//example 1: Using break in a loop

// Using break in a while loop
let i = 1;
while (i <= 5) {
    console.log(i);
    if (i === 3) {
        break;
    }
    i++;
}

// Using break in a do-while loop
let j = 1;
do {
    console.log(j);
    if (j === 3) {
        break;
    }
    j++;
} while (j <= 5);



// JavaScript Continue Statement
// The continue statement in JavaScript is used to break the iteration of the loop and follow with the next iteration.
// It skips the current iteration and continues with the next one.

//example 2: Using continue in a loop

let k = 0;
while (k < 11) {
    i++;
    if (k % 2 == 0) continue;
    console.log(k);
}