// Polymorphism = 

// many forms → same method name (learn()), but different behavior depending on the class (Developer vs Dancer).
// Parent (Human) defines a common interface, and children (Developer, Dancer) override it.

// -------------------------------
// #1. Creating Parent class
// -------------------------------
class Person {
    constructor(name, designation) {
        this.name = name;           // every person has a name
        this.designation = designation; // and a designation (role)
    }

    // ✅ Common methods shared by all persons
    learn() {
        console.log('Learning something');
    }

    eat() {
        console.log('Eating');
    }

    sleep() {
        console.log('Sleeping');
    }
}

// -------------------------------
// #2. Child class: Developer (extends Person)
// -------------------------------
class Developer extends Person {
    constructor(name, designation, companyName) {
        super(name, designation);        // call parent constructor
        this.companyName = companyName;  // add new property specific to Developer
    }

    coding() {
        console.log(`${this.name} is coding at ${this.companyName}`);
    }

    // ✅ Polymorphism: method overriding
    // Instead of parent's "learn", Developer provides its own version
    learn() {
        console.log('Learning OOPs concept');
    }
}

// -------------------------------
// #3. Child class: Dancer (extends Person)
// -------------------------------
class Dancer extends Person {
    constructor(name, designation, schoolName) {
        super(name, designation);       // call parent constructor
        this.schoolName = schoolName;   // add new property specific to Dancer
    }

    dancing() {
        console.log(`${this.name} is dancing at ${this.schoolName}`);
    }

    // ✅ Polymorphism: method overriding
    // Instead of parent's "learn", Dancer provides its own version
    learn() {
        console.log('Learning Bharatha natyam');
    }
}

// -------------------------------
// #4. Creating/Instantiating objects
// -------------------------------
let person = new Person("Human", "Nothing");
console.log(person);
// Person { name: 'Human', designation: 'Nothing' }

let venkatesh = new Developer("Venkatesh", "Full Stack Developer", "Doodleblue");
console.log(venkatesh);
// Developer { name: 'Venkatesh', designation: 'Full Stack Developer', companyName: 'Doodleblue' }

let ramani = new Dancer("Ramani", "Classical Dancer", "Dancing School");
console.log(ramani);
// Dancer { name: 'Ramani', designation: 'Classical Dancer', schoolName: 'Dancing School' }

// -------------------------------
// #5. Method calls demonstrating Polymorphism
// -------------------------------

// Developer object calling overridden learn()
venkatesh.learn();
// Output → "Learning OOPs concept"
// Even though parent Person has a "learn()", child Developer overrides it

// Dancer object calling overridden learn()
ramani.learn();
// Output → "Learning Bharatha natyam"
// Same parent method "learn()" → different child implementations

// Base Person object calling original learn()
person.learn();
// Output → "Learning something"

// 🔑 Importance of Polymorphism in this Code

// One method name, multiple behaviors
// learn() is same method name, but behavior changes based on object type (Person, Developer, Dancer).
// This avoids writing differently named methods (learnCoding, learnDancing, etc.) → improves code readability and reusability.

// Flexibility

// Parent references (Person) can hold child objects (Developer, Dancer) and still call learn() → behavior adapts dynamically.
// Example:

// let people = [person, venkatesh, ramani];
// for (let p of people) {
//     p.learn(); // different output for each
// }

// Scalability

// You can add new child classes (e.g., Singer) with its own learn() → no need to change existing code.


//========================Method Overloading.==========================

// In other languages (Java, C#, etc.), we can create multiple functions
// with the same name but different parameters = Method Overloading.
// Example in Java:
//   void add(int a, int b)
//   void add(double a, double b)
// ✅ Java picks correct version based on argument types (type checking).

// In JavaScript, function declarations with the same name will
// overwrite the previous ones because JS doesn't support strict type checking.

// // First definition
// function a() {
//     return 5;
// }

// // Second definition → overwrites the first one
// function a(name) {
//     return name;
// }

// // Third definition → overwrites the second one
// function a(name, designation) {
//     return name + " " + designation;
// }

// // Now only the LAST definition is active
// console.log(a("Venkatesh", "Fullstack"));
// // Output: "Venkatesh Fullstack"


// 🔑 Why Overloading is NOT Available in JavaScript

// No compile-time type checking → JS is dynamically typed, so it cannot differentiate between:

// a(10)   // integer
// a("hi") // string

// Both look the same to JS (function a(arg)).

// Function declarations overwrite previous ones when names are identical.
// That’s why only the last definition of a survives.

// ✅ Workarounds in JavaScript

// Although true overloading doesn’t exist, you can mimic method overloading using:

// Default parameters & optional parameters:

// function a(name, designation) {
//     if (name && designation) return name + " " + designation;
//     if (name) return name;
//     return 5;
// }

// console.log(a());                        // 5
// console.log(a("Venkatesh"));             // Venkatesh
// console.log(a("Venkatesh", "Fullstack")) // Venkatesh Fullstack


// Checking arguments.length:

// function a() {
//     if (arguments.length === 0) return 5;
//     if (arguments.length === 1) return arguments[0];
//     if (arguments.length === 2) return arguments[0] + " " + arguments[1];
// }

// console.log(a());                        // 5
// console.log(a("Venkatesh"));             // Venkatesh
// console.log(a("Venkatesh", "Fullstack")) // Venkatesh Fullstack


// Rest parameters (...args):

// function a(...args) {
//     if (args.length === 0) return 5;
//     if (args.length === 1) return args[0];
//     if (args.length === 2) return args[0] + " " + args[1];
// }

// console.log(a());                        // 5
// console.log(a("Venkatesh"));             // Venkatesh
// console.log(a("Venkatesh", "Fullstack")) // Venkatesh Fullstack


// ✅ Conclusion:

// JavaScript does not support method overloading like strongly-typed languages (Java, C#).

// Instead, use default parameters, arguments object, or rest parameters to simulate overloading behavior.