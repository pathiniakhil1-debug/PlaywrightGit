// Exploring JavaScript Datatypes & Common Expressions
// This file contains various JavaScript expressions and comparisons to understand how different datatypes behave.
// It includes comparisons between different types, edge cases, and common pitfalls in JavaScript. 

// 1. null vs undefined
console.log(null === undefined);  // false
// Both represent "empty" values, but they are different types.
// null is an object type, undefined means not assigned.
// Strict equality (===) does not allow type coercion → false.

// 2. Chained comparison
console.log(5 > 3 > 2);  // false
// JavaScript evaluates left to right.
// (5 > 3) → true, then true becomes 1 → 1 > 2 is false.

// 3. Comparing arrays
//console.log([] === []);  // false
// Arrays are objects in memory.
// Even if contents are same, they are different references → false.

// 4. String comparison
console.log("10" < "9");  // true
// String comparison is lexicographic (like dictionary order).
// "1" comes before "9", so "10" is considered smaller → true.

// 5. NaN comparison
console.log(NaN === NaN);   // false
// NaN (Not-a-Number) is a special numeric value in JavaScript.
// NaN is a special value meaning "Not-a-Number".
// It is never equal to itself → false.

// 6. Loose equality with boolean
console.log(true == 1);  // output: true
// Loose equality (==) allows type coercion.
// true is converted to 1 → 1 == 1 → true.

// 7. Undefined in numeric comparison
console.log(undefined > 0);   // output: false
// When compared, undefined is converted to NaN.
// Any comparison with NaN is false → false.

// 8. Strict equality between number & string
console.log("5" === 5);  // output: false
// Strict equality checks both type and value.
// One is string, one is number → false.

// 9. Comparing arrays with same elements
console.log([1, 2] == [1, 2]); // output: false
// Arrays are compared by reference, not by content.
// Each is a different object in memory → false.

// 10. Infinity comparison
console.log(Infinity > 1000);  // output: true
// Infinity is a special numeric value in JS.
// It is larger than any finite number → true.
