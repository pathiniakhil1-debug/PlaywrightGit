//Important Array Methods of JavaScript

// 1. JavaScript push() Method
// 2. JavaScript pop() Method
// 3. JavaScript shift() Method
// 4. unshift() Method
// 5. JavaScript indexOf() Method
// 6. JavaScript includes() Method
// 7. JavaScript concat() Method
// 8. JavaScript forEach() Method
// 9. JavaScript sort() Method
// 10. JavaScript map() method
// 11. JavaScript reduce() Method
// 12. JavaScript filter() Method
// 13. JavaScript find() & findIndex() Method
// 14. JavaScript slice() & splice() Method
// 15. JavaScript some() and every() Method
// 16. Javascript forEach() method
// 17. JavaScript Array reverse() Method
// 18. Javascript Array every() method


// 1. push() → adds element(s) at the end
let arr1 = ['Hello', 'GFG', 'JS'];
arr1.push('React'); 
console.log(arr1); 
// ['Hello', 'GFG', 'JS', 'React']

// 2. pop() → removes the last element
let arr2 = ['Hello', 'GFG', 'JS'];
console.log(arr2.pop()); // JS
console.log(arr2);       // ['Hello', 'GFG']

// 3. shift() → removes first element
let arr3 = ['Hello', 'GFG', 'JS'];
console.log(arr3.shift()); // Hello
console.log(arr3);         // ['GFG', 'JS']

// 4. unshift() → adds element(s) at the beginning
let arr4 = ['Hello', 'GFG', 'JS'];
arr4.unshift('React');
console.log(arr4); 
// ['React', 'Hello', 'GFG', 'JS']

// 5. indexOf() → returns index of first occurrence
let arr5 = ['Hello', 'GFG', 'JS'];
console.log(arr5.indexOf('GFG')); 
// 1

// 6. includes() → checks if element exists
console.log(arr5.includes('GFG'));   // true
console.log(arr5.includes('Python'));// false

// 7. concat() → merges arrays
let a1 = ['Hello', 'JS'], a2 = ['React'];
let merged = a1.concat(a2);
console.log(merged); 
// ['Hello', 'JS', 'React']

// 8. forEach() → executes function for each element
arr5.forEach(el => console.log(el)); 
// Hello, GFG, JS

// 9. sort() → sorts elements alphabetically
let arr6 = ['Banana', 'Apple', 'Cherry'];
arr6.sort();
console.log(arr6); 
// ['Apple', 'Banana', 'Cherry']

// 10. map() → transforms each element, returns new array
let nums1 = [1, 2, 3];
let squares = nums1.map(n => n * n);
console.log(squares); 
// [1, 4, 9]

// 11. reduce() → reduces array to single value
let nums2 = [1, 2, 3, 4];
let sum = nums2.reduce((acc, n) => acc + n, 0);  // 0 is initial value  // sum of 1+2+3+4 // accumulator 
console.log(sum); 
// 10

// 12. filter() → filters based on condition 
let evens = nums2.filter(n => n % 2 === 0);
console.log(evens); 
// [2, 4]

// map: Transforms each element in an array and returns a new array of the same length.

// Example: [1,2,3].map(x => x*2) → [2,4,6]

// filter: Returns a new array containing only elements that pass a test (predicate function).

// Example: [1,2,3,4].filter(x => x%2===0) → [2,4]

// reduce: Combines all elements of an array into a single value using a reducer function.

// Example: [1,2,3,4].reduce((acc, x) => acc + x, 0) → 10
// Summary:

// map transforms,
// filter selects,
// reduce accumulates.

// 13. find() & findIndex() → first element / index that matches condition
let nums3 = [5, 10, 15, 20];
console.log(nums3.find(n => n > 10));      // 15
console.log(nums3.findIndex(n => n > 10)); // 2

// 14. slice() → copies part of array (does not modify original)
let arr7 = [1, 2, 3, 4];
console.log(arr7.slice(0, 2)); // [1, 2]
console.log(arr7);             // [1, 2, 3, 4]

// 15. splice() → removes/replaces elements (modifies original)
let arr8 = [1, 2, 3, 4];
console.log(arr8.splice(1, 2)); // [2, 3]
console.log(arr8);              // [1, 4]

// 16. some() → checks if at least one element passes condition
console.log(nums3.some(n => n > 18)); // true

// 17. every() → checks if all elements pass condition
console.log(nums3.every(n => n > 0)); // true

// 18. reverse() → reverses array order
let arr9 = [1, 2, 3, 4];
arr9.reverse();
console.log(arr9); 
// [4, 3, 2, 1]
