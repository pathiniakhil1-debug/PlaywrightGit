// JavaScript Ternary Operator
// The Ternary Operator in JavaScript is a conditional operator that evaluates a condition and 
// returns one of two values based on whether the condition is true or false. 
// It simplifies decision-making in code, making it more concise and readable.

// Syntax

// condition ? trueExpression : falseExpression
// Condition: A condition that evaluates to true or false.
// expressionIfTrue: The value or expression is returned if the condition is true.
// expressionIfFalse: The value or expression returned if the condition is false.


// ==============================
// JavaScript Ternary Operator (? :)
// ==============================

// 🔹 Example 1: Simple Ternary
let PMarks = 50;
// (condition) ? valueIfTrue : valueIfFalse
let res = (PMarks > 39) ? "Pass" : "Fail";

console.log("Example 1 (Pass/Fail):", res);
// Output → Pass
// ✔ Here, 50 > 39 → condition true → result = "Pass"


// 🔹 Example 2: Nested Ternary
let day = 3;
let greeting = (day === 1) ? 'Start of the week' :
               (day === 2) ? 'Second day' :
               (day === 3) ? 'Midweek' :
               (day === 4) ? 'Almost weekend' :
                              'Weekend';

console.log("Example 2 (Nested Ternary):", greeting);
// Output → Midweek
// ✔ Since day = 3, the third condition is true → result = "Midweek"


// 🔹 Example 3: Ternary in Function
function checkAge(age) {
  // Returns 'Adult' if age >= 18, otherwise 'Minor'
  return (age >= 18) ? 'Adult' : 'Minor';
}

console.log("Example 3 (Function):", checkAge(20)); // Adult
console.log("Example 3 (Function):", checkAge(15)); // Minor
// ✔ If age is 20 → >=18 → "Adult"
// ✔ If age is 15 → <18 → "Minor"
