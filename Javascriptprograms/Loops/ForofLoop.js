// JavaScript for...of Loop

// The JavaScript for...of loop is a modern, iteration statement introduced in ECMAScript 2015 (ES6).
// Works for iterable objects such as arrays, strings, maps, sets, and more.
// It is better choice for traversing items of iterables compared to traditional for and for in loops, 
// especially when we have break or continue statements. 
// If we just want to perform an operation on all items, we prefer forEach()


// Example 1: Iterating Over an Array using for...of
// for...of gives direct access to array elements (values).
// Unlike for...in, it maintains order and is recommended for arrays.
const a = [1, 2, 3, 4, 5];

for (const item of a) {
    console.log(item);
}
// Output: 1 2 3 4 5


// Example 2: Iterating Over a String using for...of
// for...of works on any iterable, including strings.
// It returns each character one by one.
const str = "Hello";

for (const char of str) {
    console.log(char);
}
// Output: H e l l o


// Example 3: Iterating Over a Map using for...of
// Map is iterable, and for...of returns [key, value] pairs.
// Destructuring assignment [key, value] makes it easy to access both.
const m = new Map([
    ["name", "Akash"],
    ["age", 25],
    ["city", "Noida"]
]);

for (let [key, value] of m) {
    console.log(`${key}: ${value}`);
}
// Output:
// name: Akash
// age: 25
// city: Noida


// Example 4: Iterating Over a Set using for...of
// Set is also iterable, and for...of gives each unique value.
let s = new Set([1, 2, 3, 4, 5]);

for (let val of s) {
    console.log(val);
}
// Output: 1 2 3 4 5


// Example 5: Iterating Over an Object’s Properties using for...of
// Objects are NOT directly iterable. To use for...of, 
// convert object into iterable arrays using Object.keys(), Object.values(), or Object.entries().
let person = {
    name: "Akash",
    age: 25,
    city: "Noida"
};

for (let key of Object.keys(person)) {
    console.log(`${key}: ${person[key]}`);  
}
// Output:
// name: Akash
// age: 25
// city: Noida


// 🔑 Key Points about for...of:
// 1. Best suited for iterables (Arrays, Strings, Maps, Sets).
// 2. Maintains order of elements unlike for...in.
// 3. For objects, use with Object.keys(), values(), or entries().
// 4. Use for...of if you need "break" or "continue" inside loop.
// 5. Use forEach() if you want to process all elements without conditions.
