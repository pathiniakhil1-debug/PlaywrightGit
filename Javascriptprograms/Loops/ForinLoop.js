// JavaScript For In Loop
// The JavaScript for...in loop iterates over the properties of an object.
// It allows you to access each key or property name of an object

// Example 1: for...in with Object
// The for...in loop is used to iterate over the properties (keys) of an object.
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

for (let key in car) {
    // key → property name
    // car[key] → value of that property
    console.log(`${key} : ${car[key]}`);
}
// Output:
// make: Toyota
// model: Corolla
// year: 2020


// Example 2: Syntax of for...in
// General form: for (key in object) { //code }
// It will loop through all enumerable properties of the object.


// Example 3: for...in with Arrays (NOT recommended)
// for...in works on arrays, but order of indexes is not guaranteed.
// Use for...of or forEach instead if order matters.
const a = [1, 2, 3, 4, 5];

for (const i in a) {
    // i → index of the array
    // a[i] → value at that index
    console.log(a[i]);
}
// Output:
// 1
// 2
// 3
// 4
// 5


// Important Notes about for...in:
// 1. Best suited for objects, not arrays.
// 2. Order of iteration is not guaranteed, especially in arrays.
// 3. Use 'for...of' or 'forEach' for arrays if order is important.

