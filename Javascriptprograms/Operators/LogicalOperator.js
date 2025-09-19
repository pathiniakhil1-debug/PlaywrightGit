// ===============================
// JavaScript Comparison Operators
// ===============================

console.log("========== Equality Operator (==) ==========");
// == checks only VALUE equality (ignores type)
let x = 5;
let y = '5';

// Checking operands
console.log(x == 5);   // true → both are 5
console.log(y == 5);   // true → '5' (string) is converted to number 5
console.log(x == y);   // true → number 5 equals string '5' after type conversion

console.log();

// Check against special values
console.log(NaN == NaN);   // false → NaN is never equal to anything (even itself)
console.log(0 == false);   // true → false converts to 0
console.log(0 == null);    // false → null is only loosely equal to undefined


console.log("\n========== Inequality Operator (!=) ==========");
// != checks only VALUE inequality (ignores type)
x = 5;
y = '5';

// Checking operands
console.log(x != 6);   // true → 5 != 6
console.log(y != '5'); // false → both are string '5'
console.log(x != y);   // false → 5 == '5' (same value after conversion)

console.log();

// Special values
console.log(0 != false);   // false → false becomes 0 → same
console.log(0 != null);    // true  → null is not equal to 0
console.log(NaN != NaN);   // true  → NaN is not equal to itself


console.log("\n========== Strict Equality Operator (===) ==========");
// === checks VALUE and TYPE
x = 5;
y = '5';

// Checking operands
console.log(x === 6);   // false → 5 !== 6
console.log(y === '5'); // true  → both are string '5'
console.log(x === y);   // false → number vs string (different types)

console.log();

// Special values
console.log(NaN === NaN);   // false → NaN never equals NaN
console.log(0 === false);   // false → number vs boolean
console.log(0 === null);    // false → number vs null


console.log("\n========== Strict Inequality Operator (!==) ==========");
// !== checks VALUE and TYPE
x = 5;
y = '5';

// Checking operands
console.log(x !== 6);   // true  → 5 !== 6
console.log(y !== '5'); // false → both same string
console.log(x !== y);   // true  → number vs string

console.log();

// Special values
console.log(0 !== false);   // true  → number vs boolean
console.log(0 !== null);    // true  → number vs null
console.log(NaN !== NaN);   // true  → NaN not equal to itself


console.log("\n========== Greater Than Operator (>) ==========");
// > checks if left is strictly greater
x = 5;
y = "5";

// Checking operands
console.log(x > 0);      // true  → 5 > 0
console.log(y > "10");   // true  → "5" → 5 > 10 → false? Wait!
// Actually → "5" > "10" (string comparison) → true (lexical order)
console.log(x > "10");   // false → 5 > 10
console.log(y > 0);      // true  → "5" → 5 > 0


console.log("\n========== Greater Than or Equal Operator (>=) ==========");
// >= checks left is greater or equal
x = 5;
y = "5";

// Checking operands
console.log(x >= 5);     // true → equal
console.log(y >= "15");  // true → "5" >= "15" → false? (lexical order)
// Actually → "5" >= "15" → true ("5" > "1")
console.log(x >= "5");   // true → 5 >= 5
console.log(y >= 15);    // false → "5" → 5 >= 15? no


console.log("\n========== Less Than Operator (<) ==========");
// < checks if left is strictly less
x = 5;
y = "5";

// Checking operands
console.log(x < 15);     // true → 5 < 15
console.log(y < "0");    // false → "5" < "0" → false
console.log(x < "0");    // false → 5 < 0
console.log(y < 15);     // true  → "5" → 5 < 15


console.log("\n========== Less Than or Equal Operator (<=) ==========");
// <= checks left is less or equal
let val1 = 5;
let val2 = "5";

// Checking operands
console.log(val1 <= 15);   // true → 5 <= 15
console.log(val2 <= "0");  // false → "5" <= "0"
console.log(val1 <= "0");  // false → 5 <= 0
console.log(val2 <= 15);   // true → "5" → 5 <= 15
