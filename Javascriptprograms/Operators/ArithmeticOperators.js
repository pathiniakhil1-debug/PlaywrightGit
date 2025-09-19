// ============================================
// JavaScript Arithmetic Operators with Examples
// ============================================

console.log("=== Addition (+) Operator ===");
// ➡️ Adds two numbers OR concatenates string + number
let add1 = 1 + 2; // Number + Number => Addition
console.log("1 + 2 =", add1); // 3

let add2 = 5 + "hello"; // Number + String => Concatenation
console.log('5 + "hello" =', add2); // "5hello"


console.log("\n=== Subtraction (-) Operator ===");
// ➡️ Subtracts the right operand from the left operand
let sub1 = 10 - 7; // Number - Number => Subtraction
console.log("10 - 7 =", sub1); // 3

let sub2 = "Hello" - 1; // String - Number => NaN
console.log('"Hello" - 1 =', sub2); // NaN


console.log("\n=== Multiplication (*) Operator ===");
// ➡️ Multiplies two numbers
let mul1 = 3 * 3;
let mul2 = -4 * 4;
let mul3 = Infinity * 0; // Infinity * 0 = NaN
let mul4 = Infinity * Infinity; // Infinity * Infinity = Infinity
let mul5 = "hi" * 2; // String * Number => NaN
console.log("3 * 3 =", mul1); // 9
console.log("-4 * 4 =", mul2); // -16
console.log("Infinity * 0 =", mul3); // NaN
console.log("Infinity * Infinity =", mul4); // Infinity
console.log('"hi" * 2 =', mul5); // NaN


console.log("\n=== Division (/) Operator ===");
// ➡️ Divides left operand by right operand (quotient)
let div1 = 5 / 2;   // Normal division
let div2 = 1.0 / 2.0; // Decimal division
let div3 = 3.0 / 0;   // Division by 0 => Infinity
let div4 = 4.0 / 0.0; // Infinity
let div5 = 2.0 / -0.0; // -Infinity
console.log("5 / 2 =", div1); // 2.5
console.log("1.0 / 2.0 =", div2); // 0.5
console.log("3.0 / 0 =", div3); // Infinity
console.log("4.0 / 0.0 =", div4); // Infinity
console.log("2.0 / -0.0 =", div5); // -Infinity


console.log("\n=== Modulus (%) Operator ===");
// ➡️ Returns the remainder of division
let mod1 = 9 % 5;
let mod2 = -12 % 5;   // Negative dividend keeps sign
let mod3 = 1 % -2;
let mod4 = 5.5 % 2;   // Works with decimals
let mod5 = -4 % 2;    // Negative number
let mod6 = NaN % 2;   // Any NaN operand => NaN
console.log("9 % 5 =", mod1); // 4
console.log("-12 % 5 =", mod2); // -2
console.log("1 % -2 =", mod3); // 1
console.log("5.5 % 2 =", mod4); // 1.5
console.log("-4 % 2 =", mod5); // -0
console.log("NaN % 2 =", mod6); // NaN


console.log("\n=== Exponentiation (**) Operator ===");
// ➡️ Raises base to the power of exponent (Right-associative)
// let wrong = -4 ** 2; ❌ invalid
let exp1 = -(4 ** 2); // Correct way to negate
let exp2 = 2 ** 5;    // 2^5 = 32
let exp3 = 3 ** 3;    // 3^3 = 27
let exp4 = 3 ** 2.5;  // Fractional exponent
let exp5 = 10 ** -2;  // Negative exponent = reciprocal
let exp6 = 2 ** 3 ** 2; // 2^(3^2) = 512
let exp7 = NaN ** 2;  // NaN
console.log("-(4 ** 2) =", exp1); // -16
console.log("2 ** 5 =", exp2); // 32
console.log("3 ** 3 =", exp3); // 27
console.log("3 ** 2.5 =", exp4); // ~15.588
console.log("10 ** -2 =", exp5); // 0.01
console.log("2 ** 3 ** 2 =", exp6); // 512
console.log("NaN ** 2 =", exp7); // NaN


console.log("\n=== Increment (++) Operator ===");
// ➡️ Increases value by 1
// Postfix (x++) => Returns old value, then increments
let incA = 2;
let incB = incA++;
console.log("a = 2; b = a++ => a =", incA, ", b =", incB); // a=3, b=2

// Prefix (++x) => Increments first, then returns new value
let incX = 5;
let incY = ++incX;
console.log("x = 5; y = ++x => x =", incX, ", y =", incY); // x=6, y=6


console.log("\n=== Decrement (--) Operator ===");
// ➡️ Decreases value by 1
// Prefix (--x)
let decA = 2;
let decB = --decA;
console.log("a = 2; b = --a => a =", decA, ", b =", decB); // 1,1

// Postfix (x--)
let decX = 3;
let decY = decX--;
console.log("x = 3; y = x-- => x =", decX, ", y =", decY); // 2,3


console.log("\n=== Unary Negation (-) Operator ===");
// ➡️ Negates the value (converts to number if string)
let unA = 3;
let unB = -unA; // Negates number
let unX = "3";
let unY = -unX; // Converts string to number and negates
console.log("a = 3; -a =", unB); // -3
console.log('"3" as number with -x =', unY); // -3


console.log("\n=== Unary Plus (+) Operator ===");
// ➡️ Converts operand into a number
let upA = +4;      // Already number
let upB = +"2";    // String to number
let upC = +true;   // true => 1
let upX = +false;  // false => 0
let upY = +null;   // null => 0
console.log("+4 =", upA); // 4
console.log('+"2" =', upB); // 2
console.log("+true =", upC); // 1
console.log("+false =", upX); // 0
console.log("+null =", upY); // 0
