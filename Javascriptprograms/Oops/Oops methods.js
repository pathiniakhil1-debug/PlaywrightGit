//4 pillars of Object-Oriented Programming (OOPs) —
// Encapsulation, Abstraction, Inheritance, and Polymorphism — in JavaScript with real-time examples (interview-ready).

// Let’s go step by step with definitions + JS examples + real-world analogy.

// 🔹 1. Encapsulation

// 👉 Definition: Wrapping up data (variables) and methods (functions) into a single unit (class),
// and restricting direct access to some of the object’s properties.

// 👉 In JS: Achieved using class, private fields (#), closures, or by exposing getters/setters.

// Example: Bank Account (Encapsulation)
class BankAccount {
    #balance; // private property

    constructor(owner, initialBalance) {
        this.owner = owner;
        this.#balance = initialBalance; // Encapsulated
    }

    deposit(amount) {
        this.#balance += amount;
        console.log(`${this.owner} deposited ${amount}. New balance: ${this.#balance}`);
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            console.log("Insufficient balance!");
        } else {
            this.#balance -= amount;
            console.log(`${this.owner} withdrew ${amount}. New balance: ${this.#balance}`);
        }
    }

    getBalance() {
        return this.#balance; // controlled access
    }
}

const account = new BankAccount("Akhil", 1000);
account.deposit(500);
account.withdraw(300);
console.log(account.getBalance()); // 1200
// console.log(account.#balance); ❌ Error: Private field cannot be accessed


// ✅ Real-time analogy: ATM — You can deposit/withdraw but can’t directly touch the bank’s internal database.

// 🔹 2. Abstraction

// 👉 Definition: Hiding implementation details and showing only the necessary features.

// In JavaScript, we use abstract-like classes (not truly abstract) or interfaces (via duck typing).

// Achieved by exposing only essential methods and keeping the complex logic hidden.

// Example: Payment System (Abstraction)
class Payment {
    pay(amount) {
        throw new Error("This method must be implemented in subclass");
    }
}

class CreditCardPayment extends Payment {
    pay(amount) {
        console.log(`Paid ₹${amount} using Credit Card.`);
    }
}

class UpiPayment extends Payment {
    pay(amount) {
        console.log(`Paid ₹${amount} using UPI.`);
    }
}

function checkout(paymentMethod, amount) {
    paymentMethod.pay(amount); // abstraction: doesn’t care HOW payment is done
}

checkout(new CreditCardPayment(), 500);
checkout(new UpiPayment(), 300);


// ✅ Real-time analogy: When you shop online, you just click “Pay” (abstracted).
// You don’t care about how UPI, credit card, or net banking internally works.

// 🔹 3. Inheritance

// 👉 Definition: One class can inherit properties and methods from another class using extends.

// Promotes code reusability.

// Example: Employees (Inheritance)
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    work() {
        console.log(`${this.name} is working.`);
    }
}

class Developer extends Employee {
    constructor(name, salary, language) {
        super(name, salary); // call parent constructor
        this.language = language;
    }

    code() {
        console.log(`${this.name} is coding in ${this.language}.`);
    }
}

class Manager extends Employee {
    constructor(name, salary, teamSize) {
        super(name, salary);
        this.teamSize = teamSize;
    }

    manage() {
        console.log(`${this.name} is managing a team of ${this.teamSize}.`);
    }
}

const dev = new Developer("Akhil", 60000, "JavaScript");
dev.work();
dev.code();

const manager = new Manager("Sita", 90000, 10);
manager.work();
manager.manage();


// ✅ Real-time analogy: A company has Employee (base), then Developer, Manager inherit from it.

// 🔹 4. Polymorphism

// 👉 Definition: One method can have many forms (same method name, different behavior).

// In JS, achieved mainly through method overriding.

// Overloading isn’t supported, but we simulate using default/rest params.

// Example: Notification System (Polymorphism)
class Notification {
    send() {
        console.log("Sending generic notification...");
    }
}

class EmailNotification extends Notification {
    send() {
        console.log("Sending Email Notification 📧");
    }
}

class SMSNotification extends Notification {
    send() {
        console.log("Sending SMS Notification 📱");
    }
}

class PushNotification extends Notification {
    send() {
        console.log("Sending Push Notification 🔔");
    }
}

const notifications = [
    new EmailNotification(),
    new SMSNotification(),
    new PushNotification()
];

notifications.forEach(noti => noti.send()); // same method, different behavior


// ✅ Real-time analogy: When a system sends a notification — it could be email, SMS, or push.
// The action is the same (“send notification”), but the behavior changes.

// 🎯 Summary (for Interview Quick Answer)

// Encapsulation → Hiding data inside class (Bank Account example).

// Abstraction → Hiding implementation, showing only necessary actions (Payment example).

// Inheritance → Child class acquires parent’s properties/methods (Employee → Developer/Manager).

// Polymorphism → Same method name, different behaviors (Notification example).