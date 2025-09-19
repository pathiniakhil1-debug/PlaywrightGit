// JavaScript Arrays
// In JavaScript, an array is an ordered list of values. Each value, known as an element, 
// is assigned a numeric position in the array called its index. The indexing starts at 0,
// so the first element is at position 0, the second at position 1, and so on. 
// Arrays can hold any type of data—such as numbers, strings, objects, 


// =========================
// 🔹 JavaScript Arrays Guide with Explanation
// =========================

// 1. Creating Arrays
// Arrays can be created using literals [] or the Array constructor.
let arr1 = [];
console.log("Empty Array:", arr1);  //output: Empty Array: []

let arr2 = [10, 20, 30];
console.log("Array with values:", arr2);  // Output: Array with values: [10, 20, 30]

let arr3 = new Array(10, 20, 30);
console.log("Array using constructor:", arr3);  // Output: Array using constructor: [10, 20, 30]

console.log("[5] →", [5]);            // Creates [5]     // output: [5]
console.log("new Array(5) →", new Array(5)); // Creates 5 empty slots     // output: new Array(5) → [ <5 empty items> ]


// 2. Accessing Elements
// Arrays are 0-indexed → first element is arr[0], last is arr[arr.length-1].
let arr = ["HTML", "CSS", "JS"];
console.log("First element:", arr[0]);   // Output: First element: HTML
console.log("Last element:", arr[arr.length - 1]);   // Output: Last element: JS


// 3. Modifying Elements
// You can overwrite any element by assigning a new value to its index.
arr[1] = "Bootstrap";
console.log("After modifying:", arr);


// 4. Adding Elements
// push() adds at end, unshift() adds at start.
arr.push("Node.js");   // Adds to end
arr.unshift("Web Development");  // Adds to start
console.log("After adding elements:", arr);  // Output: After adding elements: [ 'Web Development', 'HTML', 'Bootstrap', 'JS', 'Node.js' ]


// 5. Removing Elements
// pop() removes last, shift() removes first, splice() removes custom items.
arr.pop();    // Removes last element
arr.shift();  // Removes first element
arr.splice(1, 2);  // Removes 2 elements starting from index 1
console.log("After removing elements:", arr);  // Output: After removing elements: [ 'HTML' ]


// 6. Array Length
// .length gives size; changing it can shrink or expand array.
let langs = ["HTML", "CSS", "JS"];
console.log("Length:", langs.length);   // Output: Length: 3

langs.length = 5;
console.log("After increasing length:", langs);   // Output: After increasing length: [ 'HTML', 'CSS', 'JS', <2 empty items> ]

langs.length = 2;
console.log("After decreasing length:", langs);   // Output: After decreasing length: [ 'HTML', 'CSS' ]


// 7. Iterating Arrays
// Use loops to access each element (for or forEach).
let skills = ["HTML", "CSS", "JS"];
console.log("Iterating with for loop:");
for (let i = 0; i < skills.length; i++) {
    console.log(skills[i]);   // Output: HTML, CSS, JS
}

console.log("Iterating with forEach:");
skills.forEach(skill => console.log(skill));  // Output: HTML, CSS, JS

for (let skill of skills) {
    console.log(skill);   // Output: HTML, CSS, JS
}


// 8. Concatenation
// concat() merges two or more arrays and returns a new one.
let a = ["HTML", "CSS"];
let b = ["JS", "React"];
let merged = a.concat(b);   // Output: ['HTML', 'CSS', 'JS', 'React']
console.log("Concatenated Array:", merged);   // Output: Concatenated Array: [ 'HTML', 'CSS', 'JS', 'React' ]


// 9. Conversion to String
// toString() converts an array into a comma-separated string.
console.log("Array to String:", merged.toString());  // Output: Array to String: HTML,CSS,JS,React


// 10. Checking Array Type
// typeof gives 'object'; better use Array.isArray() or instanceof.
console.log("typeof:", typeof merged);            // Output: typeof: object
console.log("Array.isArray():", Array.isArray(merged));   // Output: Array.isArray(): true
console.log("instanceof Array:", merged instanceof Array);    // Output: instanceof Array: true
