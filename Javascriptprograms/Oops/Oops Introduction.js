// Object Oriented Programming in JavaScript

// Object Oriented Programming (OOP) is a style of programming that uses classes and objects to 
// model real-world things like data and behavior. 
// A class is a blueprint that defines the properties and methods an object can have, 
// while an object is a specific instance created from that class.

// Objects

// In JavaScript, an object is a collection of data (properties) and actions (methods) stored as key–value pairs.

// Properties hold values like strings, numbers, or even other objects.
// Methods are functions inside the object that define what it can do.
// Objects let you group related data and functionality together in one place.

// Classes

// In JavaScript, a class is a blueprint for creating objects with specific properties and methods. 
// A class itself doesn’t hold values, it describes what an object should have and do. 
// You create actual objects from a class using the new keyword.

// Creating Class
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    // Method
    showDetails() {
        console.log(`This car is a ${this.brand} ${this.model}.`);
    }
}

// ✅ Derived Class (Inheritance)
class ElectricCar extends Car {
    constructor(brand, model, battery) {
        super(brand, model); // calls parent constructor
        this.battery = battery;
    }

    // Overriding method
    showDetails() {
        console.log(`This electric car is a ${this.brand} ${this.model} with a ${this.battery} battery.`);
    }
}

// ✅ Creating objects
const car1 = new Car("Toyota", "Corolla"); //creating/Instantiating objects by using class
const car2 = new Car("Honda", "Civic");
const eCar1 = new ElectricCar("Tesla", "Model 3", "75 kWh");

// ✅ Using objects   //Getting/setting the properties and actions with created objects
car1.showDetails();   // This car is a Toyota Corolla.
car2.showDetails();   // This car is a Honda Civic.
eCar1.showDetails();  // This electric car is a Tesla Model 3 with a 75 kWh battery.
console.log(car1.brand)  //Toyota