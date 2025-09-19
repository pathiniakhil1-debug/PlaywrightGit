// Table of Content

// Array some() Method
// Array reduce() Method
// Array map() Method
// Array every() Method
// Array flat() Method
// Array flatMap() Method
// Array filter() Method
// Array findindex() Method
// Array find() Method
// Array fill() Method
// Array forEach() Method
// Array sort() Method
// Array concat() Method
// Array includes() Method
// Array reverse() Method

// =========================
// 📘 JavaScript Array Methods
// =========================

// 1. some() → Checks if at least one element passes the condition
let array1 = [2, 5, 8, 1, 4];
console.log("some() >", array1.some(el => el > 5)); // true


// 2. reduce() → Reduces array to a single value
let numbers = [88, 50, 25, 10];
let resultReduce = numbers.reduce((total, num) => total - num);
console.log("reduce() >", resultReduce); // 3


// 3. map() → Creates a new array by applying function on each element
let nums = [4, 9, 16, 25];
let resultMap = nums.map(Math.sqrt);
console.log("map() >", resultMap); // [2, 3, 4, 5]


// 4. every() → Checks if all elements satisfy a condition
let arr2 = [11, 89, 23, 7, 98];
console.log("every() >", arr2.every(el => el > 0)); // true


// 5. flat() → Flattens nested arrays into a single-level array
let arr3 = [[11, 89], [23, 7], 98];
console.log("flat() >", arr3.flat()); // [11, 89, 23, 7, 98]


// 6. flatMap() → Maps each element and flattens the result
let myAwesomeArray = [[1], [2], [3], [4], [5]];
console.log("flatMap() >", myAwesomeArray.flatMap(x => x * 10)); // [10,20,30,40,50]


// 7. filter() → Creates a new array with elements that pass the condition
let filtered = [112, 52, 0, -1, 944].filter(x => x > 0);
console.log("filter() >", filtered); // [112, 52, 944] 


// 8. findIndex() → Returns index of first element that satisfies condition
let array2 = [10, 20, 30, 110, 60];
console.log("findIndex() >", array2.findIndex(x => x > 25)); // 2 


// 9. find() → Returns first element that satisfies the condition
let array3 = [10, 20, 30, 40, 50];
console.log("find() >", array3.find(x => x > 20)); // 30 


// 10. fill() → Fills array with a static value
let arr4 = [1, 23, 46, 58];
arr4.fill(87, 1, 3);  // fills from index 1 to 3
console.log("fill() >", arr4); // output: [1, 87, 87, 58]


// 11. forEach() → Executes function for each element (no return)
const items = [1, 29, 47];
const copy = [];
items.forEach(item => copy.push(item * item));
console.log("forEach() >", copy); // [1, 841, 2209]


// 12. sort() → Sorts array elements 
let nums2 = [88, 50, 25, 10];
nums2.sort((a, b) => a - b);
console.log("sort() >", nums2); // [10, 25, 50, 88]


// 13. concat() → Joins two or more arrays into one
let num1 = [11, 12, 13], num2 = [14, 15, 16], num3 = [17, 18, 19];
console.log("concat() >", num1.concat(num2, num3));


// 14. includes() → Checks if an array contains a value
let A = [1, 2, 3, 4, 5];
console.log("includes() >", A.includes(2)); // true


// 15. reverse() → Reverses the array in place
let arr5 = [34, 234, 567, 4];
console.log("reverse() >", arr5.reverse()); // [4, 567, 234, 34]
