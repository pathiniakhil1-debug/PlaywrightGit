//Inheritance Definition

// A mechanism where one class (child/derived class) can acquire the properties and methods of another class (parent/base class).
// This avoids code duplication and promotes reusability.

//Real life Example

// Parent Class (Base Class):
// Human → has common attributes: Name, Designation
// has common methods: Learn(), Eat(), Sleep()
// Child Classes (Derived Classes):
// Developer (inherits from Human)
// gets all properties & methods from Human
// adds extra method: Coding()
// Dancer (inherits from Human)
// gets all properties & methods from Human
// adds extra method: Dancing()

// --------------------
// #1. Creating Parent class
// --------------------
// class Person {
//   constructor(name, designation) {
//     // ✅ Properties every Person has
//     this.name = name;          // e.g., "Human"
//     this.designation = designation; // e.g., "Nothing"
//   }

//   // ✅ Common methods available to all Persons
//   learn() {
//     console.log('Learning something');
//   }

//   eat() {
//     console.log('Eating');
//   }

//   sleep() {
//     console.log('Sleeping');
//   }
// }

// // --------------------
// // #2. Creating/Instantiating objects by using class
// // --------------------
// let person = new Person('Human', 'Nothing');
// // Creates a new object with name = "Human", designation = "Nothing"
// // Internally → Person { name: "Human", designation: "Nothing" }

// console.log(person);
// // Output → Person { name: 'Human', designation: 'Nothing' }

// // --------------------
// // #3. Using methods from the class
// // --------------------
// person.learn();   // "Learning something"
// person.eat();     // "Eating"
// person.sleep();   // "Sleeping"


// Inheritance concept
// --------------------
// #1. Creating Parent class
// --------------------
class Person {
  constructor(name, designation) {
    // ✅ Common properties (shared by all children)
    this.name = name;
    this.designation = designation;
  }

  // ✅ Common methods (shared by all children)
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

// --------------------
// #2. Child class: Developer extends Person
// --------------------
class Developer extends Person {
  constructor(name, designation, companyName) {
    // ✅ Call parent constructor to set name & designation
    super(name, designation);
    // ✅ New property specific to Developer
    this.companyName = companyName; 
  }

  // ✅ Developer-specific method
  coding() {
    console.log(`${this.name} is coding at ${this.companyName}`);
  }
}

// --------------------
// #3. Child class: Dancer extends Person
// --------------------
class Dancer extends Person {
  constructor(name, designation, schoolName) {
    // ✅ Call parent constructor to set name & designation
    super(name, designation);
    // ✅ New property specific to Dancer
    this.schoolName = schoolName; 
  }

  // ✅ Dancer-specific method
  dancing() {
    console.log(`${this.name} is dancing at ${this.schoolName}`);
  }
}

// --------------------
// #4. Creating objects
// --------------------
let venkatesh = new Developer("Venkatesh","Full Stack Developer","Doodleblue");
console.log(venkatesh);
// Output → Developer { name: 'Venkatesh', designation: 'Full Stack Developer', companyName: 'Doodleblue' }

let ramani = new Dancer("Ramani","Classical Dancer","Dancing School");
console.log(ramani);   

// --------------------
// Using parent + child methods
// --------------------
venkatesh.learn();    // Inherited from Person → "Learning something"
venkatesh.eat();      // Inherited from Person → "Eating"
venkatesh.coding();   // Defined in Developer → "Venkatesh is coding at Doodleblue"

// --------------------
// Using parent + child methods
// --------------------
ramani.learn();    // Inherited from Person → "Learning something"
ramani.eat();      // Inherited from Person → "Eating"
ramani.dancing();  // Defined in Dancer → "Ramani is dancing at Dancing School"


// 🔎 Why Inheritance is important here?

// Code Reusability → Instead of writing name, designation, learn(), eat(), sleep() in every child class, 
// they are written once in Person and reused in Developer & Dancer.
// Avoids Duplication → If tomorrow you add a walk() method to Person, both Developer and Dancer will get it automatically.
// Extensibility → You can add more child classes (e.g., Singer) that reuse Person’s features but add their own behavior.
// Cleaner Design → Follows OOP principle → “IS-A relationship”. A Developer is-a Person, and a Dancer is-a Person

// ✅ Summary:
// This program demonstrates inheritance clearly:

// Person is the parent class (base).

// Developer and Dancer are child classes (derived).

// Children reuse parent methods (learn, eat) while adding their own methods (coding, dancing).