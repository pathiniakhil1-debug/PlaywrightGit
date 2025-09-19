// Data Types
// A datatypes is like a container that holds data that can be reused or updated later in the program. In JavaScript,
//  variables are declared using the keywords var, let, or const
// JavaScript supports various datatypes, which can be broadly categorized into primitive and non-primitive types.

// Primitive Datatypes
// Primitive datatypes represent single values and are immutable.

//1. Number: Represents numeric values (integers and decimals).

let n = 42;
let pi = 3.14;

//2. String: Represents text enclosed in single or double quotes.

let s = "Hello, World!";

//3. Boolean: Represents a logical value (true or false).

let bool = true;

//4. Undefined: A variable that has been declared but not assigned a value.

let notAssigned;
console.log(notAssigned); // Output: undefined
typeof notAssigned; // Output: "undefined"

//5. Null: Represents an intentional absence of any value.

let empty = null;
console.log(empty); // Output: null
typeof empty; // Output: "object"  //bug in JavaScript, null is considered an object

//Difference between undefined and null and NAN
// undefined means a variable has been declared but not yet assigned a value.
// null is an assignment value that represents no value or no object.
// NaN stands for "Not-a-Number" and is a special numeric value that indicates an invalid or undefined mathematical operation.
// For example, dividing zero by zero or attempting to convert a non-numeric string to a number results in NaN.

//6. Symbol: Represents unique and immutable values, often used as object keys.

let sym = Symbol('unique');
console.log(typeof sym); // Output: "symbol"

//7. BigInt: Represents integers larger than Number.MAX_SAFE_INTEGER.

console.log(Number.MAX_SAFE_INTEGER); // Output: 9007199254740991
let bigNumber = 123456789012345678901234567890n;
console.log(bigNumber); // Output: 123456789012345678901234567890n



// Non - Primitive Datatypes
// Non - primitive types are objects and can store collections of data or more complex entities.

//1. Object: Represents key - value pairs.

let obj = {
    name: "Amit",
    age: 25
};
console.log(obj.name); // Output: Amit

//2. Array: Represents an ordered list of values.

let a = ["red", "green", "blue"];

//3. Function: Represents reusable blocks of code.

function fun() {
    console.log("GeeksforGeeks");
}
fun(); // Output: GeeksforGeeks