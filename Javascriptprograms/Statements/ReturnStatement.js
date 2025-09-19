// JavaScript Return Statement
// The return statement in JavaScript is used to end the execution of a function and return a value to the caller.
// It is used to control function behaviour and optimise code execution.


// 1. Returning a value from a function
// The return statement ends execution and sends a value back to the caller.
function add(a, b) {
    return a + b;
}
const res = add(5, 10);
console.log(res); // 15


// 2. Return without a value
// If no value is given, the function returns undefined.
function noReturn() {
    return;
}
console.log(noReturn()); // undefined


// 3. Returning any value type (number, string, object, etc.)
function greet(name) {
    return 'Hello, ' + name;
}
let message = greet('Pranjal');
console.log(message); // Hello, Pranjal


// 4. Exiting a function early
// return can be used to skip remaining code and exit when a condition is met.
function checkEven(number) {
    if (number % 2 !== 0) {
        return false; // exits early if odd
    }
    return true; // only runs if number is even
}
console.log(checkEven(4)); // true
console.log(checkEven(5)); // false


// 5. Returning objects
// Functions can return objects, arrays, or even other functions.
function Person(name, age) {
    return {
        name: name,
        age: age
    };
}
let person = Person('Ishank', 30);
console.log(person); // { name: 'Ishank', age: 30 }


// 6. Arrow functions returning values
// If one expression only, return keyword can be skipped.
const addArrow = (a, b) => a + b;
console.log(addArrow(3, 4)); // 7


// 7. Returning in recursion
// return is crucial to pass values back through recursive calls.
function factorial(n) {
    if (n === 0) {
        return 1; // base case
    }
    return n * factorial(n - 1); // recursive step
}
console.log(factorial(5)); // 120


// 8. No return vs return undefined
// Functions with no return implicitly return undefined.
function noRet() {
    // no return statement
}
console.log(noRet()); // undefined


// 9. Return value in expressions
// The returned value can be directly used in further calculations.
function square(x) {
    return x * x;
}
console.log(square(2) + 10); // 14 (4 + 10)
