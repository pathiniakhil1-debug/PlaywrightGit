// Key Characteristics of Global Variables:

// Scope: Accessible throughout the entire script, including inside functions and blocks.
// Automatic Global Variables: If a variable is declared inside a function without var, let, or const, 
// it automatically becomes a global variable (a common source of bugs).

// Example 1: In this example, we will declare variables in the global scope 
// so that they can be accessed anywhere in the program.

// let petName = 'Rocky' // Global variable
// myFunction()

// function myFunction() {
//     fruit = 'apple'; // Considered global
//     console.log(typeof petName +
//         '- ' +
//         'My pet name is ' +
//         petName)
// }

// console.log(
//     typeof petName +
//     '- ' +
//     'My pet name is ' +
//     petName +
//     'Fruit name is ' +
//     fruit)

// Output: string- My pet name is Rocky
// Output: string- My pet name is RockyFruit name is apple

// Explanation: We can see that the variable petName is declared in the global scope and is easily accessed inside functions.
// Also, the fruit was declared inside the function without any keyword so it was considered global and
//  was accessible inside another function.

// Key Characteristics of Local Variables:

// Scope: Limited to the function or block in which they are declared.
// Function-Specific: Each function can have its own local variables, even if they share the same name

// Example 1: In this example, we will declare variables in the global scope 
// so that they can be accessed anywhere in the program.

myfunction();
anotherFunc();
let petName;
function myfunction() {
    let petName = "Sizzer"; // local variable
    console.log(petName);
}
function anotherFunc() {
    let petName = "Tom"; // local variable
    console.log(petName);
}
console.log(petName);

// Output: Sizzer
// Output: Tom
// Output: undefined