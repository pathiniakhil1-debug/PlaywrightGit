// JavaScript Strings
// A JavaScript String is a sequence of characters, typically used to represent text.
// In JavaScript, there is no character type (Similar to Python and different from C, C++ and Java), 
// so a single character string is used when we need a character.
// Like Java and Python, strings in JavaScript are immutable.

// Different ways to create strings in JavaScript 👇

// ==============================
// 1. Using Literals (Recommended)
// ==============================
// Strings can be created with single or double quotes.
// Best practice: stay consistent with your choice.
let s1 = 'abcd';
let s2 = "abcd";
console.log("Literal Single Quote:", s1);
console.log("Literal Double Quote:", s2);


// ==============================
// 2. Using Constructor
// ==============================
// new String() creates a String OBJECT, not a primitive.
// Not recommended because it behaves differently in comparisons.
let s3 = new String('abcd');
console.log("Constructor String:", s3);


// ==============================
// 3. Template Literals (String Interpolation)
// ==============================
// Use backticks (`) for embedding variables and expressions.
// Makes strings more readable and dynamic.
let lang = 'JavaScript';
let s4 = `You are learning ${lang} with examples`;
console.log("Template Literal:", s4);


// ==============================
// 4. Empty String
// ==============================
// Assigning '' or "" creates an empty string.
// Will print blank lines in the console.
let s5 = '';
let s6 = "";
console.log("Empty String1:", s5);
console.log("Empty String2:", s6);


// ==============================
// 5. Multiline Strings (ES6+)
// ==============================
// Backticks allow multi-line strings directly.
// Line breaks are preserved as written.
let s7 = `
This is a
multiline
string example
`;
console.log("Multiline String:", s7);  
