// Objects in Javascript
// An object in JavaScript is a data structure used to store related data collections. 
// It stores data as key-value pairs, where each key is a unique identifier for the associated value. 
// Objects are dynamic, which means the properties can be added, modified, or deleted at runtime.

// There are two primary ways to create an object in JavaScript: Object Literal and Object Constructor.
// In JavaScript, there are two main ways to create objects

// Using Object Literal Syntax ({}): This is the most common and simple way to create objects.
// Using the Object Constructor (new Object()): This uses JavaScript's built-in Object constructor to create objects.

// ✅ 1. Object Creation using Object Literal
// The simplest and most common way.
// Properties are directly written as key-value pairs inside {}
let obj1 = {
    name: "Sourav",
    age: 23,
    job: "Developer"
};
console.log("Object created with literal:", obj1);
// Output: { name: 'Sourav', age: 23, job: 'Developer' }

// ✅ 2. Object Creation using new Object() Constructor
// Creates an empty object first, then properties are added individually.
let obj2 = new Object();
obj2.name = "Sourav";
obj2.age = 23;
obj2.job = "Developer";

console.log("Object created with new Object():", obj2);
// Output: { name: 'Sourav', age: 23, job: 'Developer' }

// 3. Functions are objects in javascript

function Mobile() {
    return "Mobile"
}
