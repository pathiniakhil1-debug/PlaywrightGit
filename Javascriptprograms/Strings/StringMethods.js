// Important String Methods of JavaScript

// ===============================
// 1. slice()
// Extracts part of a string using start & end index.
// End index is exclusive.
let A = 'Geeks for Geeks';
console.log("slice(0,5):", A.slice(0, 5));   // Geeks
console.log("slice(6,9):", A.slice(6, 9));   // for
console.log("slice(10):", A.slice(10));      // Geeks


// ===============================
// 2. substring()
// Similar to slice(), but doesn't accept negative index.
let str1 = "Mind, Power, Soul";
console.log("substring(6,11):", str1.substring(6, 11)); // Power


// ===============================
// 3. substr()
// Takes (startIndex, length) → extracts given characters.
console.log("substr(6,5):", str1.substr(6, 5)); // Power


// ===============================
// 4. replace()
// Replaces the first occurrence of a substring.
console.log("replace:", str1.replace("Power", "Space")); // Mind, Space, Soul


// ===============================
// 5. replaceAll()
// Replaces ALL occurrences of a substring.
let str2 = "Mind, Power, Power, Soul";
console.log("replaceAll:", str2.replaceAll("Power", "Space")); // Mind, Space, Space, Soul


// ===============================
// 6. toUpperCase() & toLowerCase()
// Converts whole string to upper/lowercase.
let text = "stands-for-GeeksforGeeks";
console.log("toUpperCase:", text.toUpperCase()); // STANDS-FOR-GEEKSFORGEEKS
console.log("toLowerCase:", text.toLowerCase()); // stands-for-geeksforgeeks


// ===============================
// 7. concat()
// Joins two or more strings together.
let s1 = "GFG ";
let s2 = "stands for GeeksforGeeks";
console.log("concat:", s1.concat(s2));  // output: GFG stands for GeeksforGeeks


// ===============================
// 8. trim(), trimStart(), trimEnd()
// Removes whitespace → from both ends / start / end.
let s3 = "   Geeks   ";
console.log("trim:", `"${s3.trim()}"`);        // "Geeks"
console.log("trimStart:", `"${s3.trimStart()}"`); // "Geeks   "
console.log("trimEnd:", `"${s3.trimEnd()}"`);     // "   Geeks"


// ===============================
// 9. padStart() & padEnd()
// Pads string until it reaches given length.
let stone = "Soul";
console.log("padStart:", stone.padStart(9, "Mind ")); // Mind Soul
console.log("padEnd:", stone.padEnd(10, " Power"));   // Soul Power


// ===============================
// 10. charAt() & charCodeAt()
// charAt → returns character at index
// charCodeAt → returns Unicode value.
let word = "GeeksforGeeks";
console.log("charAt(0):", word.charAt(0));        // G
console.log("charCodeAt(0):", word.charCodeAt(0)); // 71


// ===============================
// 11. split()
// Splits string into an array using a separator.
let geeks = "stands-for-GeeksforGeeks";
console.log("split('-'):", geeks.split('-'));
// [ 'stands', 'for', 'GeeksforGeeks' ]


