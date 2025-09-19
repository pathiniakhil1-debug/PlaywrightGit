// ===============================
// JavaScript Assignment Operators
// ===============================

console.log("========== Basic Assignment ==========");

let x = 10;
let y = 20;

// = (Simple Assignment)
// This assigns the value on the right (y) into the variable on the left (x).
x = y; 
console.log("x = y →", x); // 20
console.log("y →", y);     // 20


console.log("\n========== Addition Assignment (+=) ==========");

let a = 2;
const b = 3;
// += (Addition Assignment)
// Adds right operand to the left operand and assigns the result to left.
console.log("Before:", a); // 2
a += b; // same as a = a + b → 2 + 3 = 5
console.log("After a += b →", a); // 5


console.log("\n========== Subtraction Assignment (-=) ==========");

let sub = 4;
// -= (Subtraction Assignment)
// Subtracts right operand from the left operand and assigns result.
sub -= 1; // same as sub = sub - 1 → 4 - 1 = 3
console.log("sub -= 1 →", sub); // 3


console.log("\n========== Multiplication Assignment (*=) ==========");

let mul = 4;
// *= (Multiplication Assignment)
// Multiplies left operand by right operand and assigns result.
mul *= 2; // same as mul = mul * 2 → 4 * 2 = 8
console.log("mul *= 2 →", mul); // 8


console.log("\n========== Division Assignment (/=) ==========");

let div = 10;
// /= (Division Assignment)
// Divides left operand by right operand and assigns result.
div /= 2; // 10 / 2 = 5
console.log("div /= 2 →", div); // 5

// Special case: dividing by 0 → Infinity in JavaScript
div /= 0;
console.log("div /= 0 →", div); // Infinity


console.log("\n========== Remainder Assignment (%=) ==========");

let rem = 50;
// %= (Remainder Assignment)
// Divides left operand by right operand and assigns the remainder.
rem %= 10; // 50 % 10 = 0
console.log("rem %= 10 →", rem); // 0


console.log("\n========== Exponentiation Assignment (**=) ==========");

let exp = 2;
// **= (Exponentiation Assignment)
// Raises left operand to the power of right operand.
exp **= 3; // 2 ** 3 = 8
console.log("exp **= 3 →", exp); // 8


console.log("\n========== Left Shift Assignment (<<=) ==========");

let leftShift = 5;   // binary: 0101
// <<= (Left Shift Assignment)
// Shifts bits of left operand to the left by given number of positions.
// 0101 << 2 → 10100 (binary) = 20
leftShift <<= 2;
console.log("leftShift <<= 2 →", leftShift); // 20


console.log("\n========== Right Shift Assignment (>>=) ==========");

let rightShift = 5;  // binary: 0101
// >>= (Right Shift Assignment)
// Shifts bits of left operand to the right by given number of positions.
// 0101 >> 2 → 0001 = 1
rightShift >>= 2;
console.log("rightShift >>= 2 →", rightShift); // 1


console.log("\n========== Bitwise AND Assignment (&=) ==========");

let bitAnd = 5;  // binary: 0101
// &= (Bitwise AND Assignment)
// Performs AND on each bit: 0101 & 0010 = 0000
bitAnd &= 2;     
console.log("bitAnd &= 2 →", bitAnd); // 0


console.log("\n========== Bitwise OR Assignment (|=) ==========");

let bitOr = 5;   // binary: 0101
// |= (Bitwise OR Assignment)
// Performs OR on each bit: 0101 | 0010 = 0111
bitOr |= 2;      
console.log("bitOr |= 2 →", bitOr); // 7


console.log("\n========== Bitwise XOR Assignment (^=) ==========");

let bitXor = 5;  // binary: 0101
// ^= (Bitwise XOR Assignment)
// Performs XOR on each bit: 0101 ^ 0010 = 0111
bitXor ^= 2;     
console.log("bitXor ^= 2 →", bitXor); // 7


console.log("\n========== Logical AND Assignment (&&=) ==========");

let name = { firstName: "Ram", lastName: "" };
// &&= (Logical AND Assignment)
// Assigns right operand only if left operand is truthy.
console.log("Before:", name.firstName); // Ram
name.firstName &&= "Shyam"; 
console.log("After firstName &&= →", name.firstName); // Shyam

console.log("Before:", name.lastName); // "" (falsy)
name.lastName &&= "Kumar"; // since "" is falsy, no assignment happens
console.log("After lastName &&= →", name.lastName); // ""


console.log("\n========== Logical OR Assignment (||=) ==========");

let nameOr = { firstName: "Ram", lastName: "" };
// ||= (Logical OR Assignment)
// Assigns right operand only if left operand is falsy.
console.log("Before:", nameOr.firstName); // Ram (truthy)
nameOr.firstName ||= "Shyam"; // no change
console.log("After firstName ||= →", nameOr.firstName); // Ram

console.log("Before:", nameOr.lastName); // "" (falsy)
nameOr.lastName ||= "Kumar"; // assigns "Kumar"
console.log("After lastName ||= →", nameOr.lastName); // Kumar


console.log("\n========== Nullish Coalescing Assignment (??=) ==========");

let xNull = 12;
let yNull = null;
let zNull = 13;
// ??= (Nullish Coalescing Assignment)
// Assigns right operand only if left operand is null or undefined.
xNull ??= zNull; // 12 is not null → no change
yNull ??= zNull; // null → assigned 13

console.log("xNull ??= zNull →", xNull); // 12
console.log("yNull ??= zNull →", yNull); // 13
