// Encapsulation

// hiding the data inside a single unit (class) + controlling access.
// Data of an object should not be directly exposed → instead, use getter/setter methods.

// Example given: Calculator
// We only press buttons (2 + 2 =) and see the result.
// We don’t see how the processor, circuits, or logic is implemented internally.

// ✅ Encapsulation in JavaScript

// In older JS (before ES6), developers used var or function closures to mimic private data.
// In modern JS (ES2020+), we use #privateFields.

// -------------------------------
// ✅ Creating a Basic Bank Class (WITHOUT encapsulation)
// -------------------------------
// class Bank {
//     constructor(name, account_no, account_type) {
//         // ❌ Public properties (attached to "this")
//         // They are directly accessible outside the class
//         this.name = name;
//         this.account_no = account_no;
//         this.account_type = account_type;
//     }

//     // -------------------------------
//     // ✅ Getters - return values of properties
//     // -------------------------------
//     getName() {
//         return this.name;
//     }
//     getAccountNum() {
//         return this.account_no;
//     }
//     getAccountType() {
//         return this.account_type;
//     }

//     // -------------------------------
//     // ✅ Setters - modify values of properties
//     // -------------------------------
//     setName(newName) {
//         this.name = newName;
//     }
//     setAccountNumber() {
//         // Random 9-digit account number
//         this.account_no = Math.floor(Math.random() * 900000000);
//     }
//     setAccountType(accountType) {
//         this.account_type = accountType;
//     }
// }

// // -------------------------------
// // ✅ Object Creation
// // -------------------------------
// let venkatesh = new Bank("Venkatesh", null , "Savings");
// let chinni = new Bank("chinni", null, "current");

// // -------------------------------
// // ✅ Accessing Data via Getters
// // -------------------------------
// console.log(venkatesh.getName());        // Venkatesh
// console.log(venkatesh.getAccountNum());  // null
// console.log(venkatesh.getAccountType()); // Savings

// // -------------------------------
// // ✅ Using Setters
// // -------------------------------
// console.log(venkatesh.getName());        // Venkatesh
// venkatesh.setAccountNumber();            // sets random account_no
// console.log(venkatesh.getAccountNum());  // e.g. 345678912

// console.log(chinni.getName());           // chinni
// chinni.setAccountNumber();
// console.log(chinni.getAccountNum());     // e.g. 456789123

// // -------------------------------
// // ❌ PROBLEM: Data Exposure without Encapsulation
// // -------------------------------
// console.log(venkatesh.name);   // Direct access to property → "Venkatesh"
// venkatesh.setName("vivek");    // Works fine
// console.log(venkatesh.name);   // vivek (changed)

// venkatesh.setAccountNumber();  
// venkatesh.account_no = 123;    // ❌ Directly overriding data (BAD PRACTICE)
// console.log(venkatesh.getAccountNum()); // 123 (Encapsulation broken)

// 🔎 Explanation of Encapsulation Importance:

// Problem in this code
// Properties (name, account_no, account_type) are public (declared with this).
// Anyone outside the class can directly read or modify them.
// Example: venkatesh.account_no = 123 overrides the secure account number.
// Why Encapsulation is Needed
// Encapsulation hides internal data from direct access.
// Users should only interact with data via getters/setters.
// This ensures validation, security, and controlled updates.
// Comparison
// Current Code (❌ Problematic):
// venkatesh.account_no = 123; // Direct override

// Encapsulation (✅ Safe):

// venkatesh.setAccountNumber(); // Controlled update (random only)
// console.log(venkatesh.getAccountNum());




//Creating Encapsulation class:

// ✅ Encapsulation Example in JavaScript
// "Encapsulation" = binding data + methods together + hiding internal details

class Bank {
    constructor(name, account_no, account_type) {
        // 🔒 Private variables (using var inside constructor scope)
        // These are not attached to 'this', so they can't be accessed directly outside
        var name = name;          
        var account_no = account_no;
        var account_type = account_type;

        // -------------------------------
        // ✅ GETTER METHODS
        // -------------------------------
        // Expose read-only access to private variables
        this.getName = () => {
            return name;   // returns private 'name'
        }

        this.getAccountNum = () => {
            return account_no;   // returns private 'account_no'
        }

        this.getAccountType = () => {
            return account_type; // returns private 'account_type'
        }

        // -------------------------------
        // ✅ SETTER METHODS
        // -------------------------------
        // Allow controlled modification of private variables

        this.setName = (newName) => {
            name = newName;   // updates private 'name'
        }

        // Alternate way: we could hide this setter by using var instead of this
        // var setName = (newName) => { name = newName; } // then it's private too

        this.setAccountNumber = () => {
            // Automatically assign a random 9-digit account number
            account_no = Math.floor(Math.random() * 900000000);
        }

        this.setAccountType = (accountType) => {
            account_type = accountType;  // updates private 'account_type'
        }
    }
}

// -------------------------------
// ✅ OBJECT CREATION (Instances)
// -------------------------------
let venkatesh = new Bank("Venkatesh", null, "Savings");
let chinni = new Bank("Chinni", null, "Current");

// -------------------------------
// ✅ USING METHODS
// -------------------------------

// ❌ Direct property access is not possible (they are private)
// console.log(venkatesh.name);  // undefined

// 🔒 Controlled modification
venkatesh.setAccountNumber();             // Assigns random account number
console.log(venkatesh.getAccountNum());  // ✅ Prints random account number

// ❌ Direct override attempt (does NOT affect private variable)
venkatesh.account_no = 123;  
// This creates a *new property* on the object, 
// but doesn't change the private 'account_no' inside constructor.

console.log(venkatesh.getAccountNum());  
// ✅ Still prints the random number (not 123), proving encapsulation


// 🔑 Key Takeaways:

// Private variables are declared with var inside constructor → they’re not attached to this.
// Getters/Setters are exposed via this so outside code can safely access/modify private data.
// If someone tries venkatesh.account_no = 123, it does not override the internal account_no, 
// it just creates a new public property on that object.
// This is true encapsulation — hiding internal data and exposing controlled access.
