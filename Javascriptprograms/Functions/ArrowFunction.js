// Arrow functions in JavaScript
// An arrow function is a shorter syntax for writing functions in JavaScript. Introduced in ES6,
// arrow functions allow for a more concise and readable code, especially in cases of small functions. 
// Unlike regular functions, arrow functions don't have their own this, but instead, inherit it from the surrounding context.

// Arrow functions use => for a compact syntax.
// They inherit this from the surrounding context.
// Single-expression functions have an implicit return.
// They don’t have access to the arguments object.
// Best to declare with const, unless reassignment is needed.

const add1 = (a, b) => a + b;
console.log(add1(5, 3));

// ===============================
// 1. Arrow Function without Parameters
// ===============================
// - Use empty () when there are no arguments.
// - Useful for simple tasks like printing.

const greet = () => {
    console.log("Hi from GeekforGeeks!");
};

greet();
// Output: Hi from GeekforGeeks!


// ===============================
// 2. Arrow Function with Single Parameter
// ===============================
// - If only ONE parameter → parentheses () are optional.

const square = x => x * x;

console.log(square(4));
// Output: 16


// ===============================
// 3. Arrow Function with Multiple Parameters
// ===============================
// - For more than one parameter, always use ().

const sumThree = (x, y, z) => {
    console.log(x + y + z);
};

sumThree(10, 20, 30);
// Output: 60


// ===============================
// 4. Arrow Function with Default Parameters
// ===============================
// - You can assign default values to parameters.

const showNumbers = (x, y, z = 30) => {
    console.log(x + " " + y + " " + z);
};

showNumbers(10, 20);
// Output: 10 20 30


// ===============================
// 5. Returning Object Literals
// ===============================
// - Wrap object literal in () to return directly.

const makePerson = (firstName, lastName) =>
    ({ first: firstName, last: lastName });

console.log(makePerson("Pankaj", "Bind"));
// Output: { first: 'Pankaj', last: 'Bind' }


// ===============================
// 6. Async Arrow Function
// ===============================
// - Add 'async' keyword to make it asynchronous.
// - Common for API calls or DB requests.

const fetchData = async () => {
    // Example API call (dummy here, may fail if URL is invalid)
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    return data;
};

// Call async function
fetchData().then(result => console.log("Async Result →", result));

