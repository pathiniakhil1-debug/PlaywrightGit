// Abstraction

const { error } = require("console");
const { METHODS } = require("http");

// Shows only essential attributes and hides unnecessary details.
// Purpose = Reduce complexity for the user.

// Example =
// A user provides Name, Address, Contact Number, Tax Info → only relevant info is used by Bank, Employee, Hospital, Government systems.

// ✅ Difference Recap:

// Encapsulation → How data is stored & controlled (data hiding via getters/setters).
// Abstraction → What functionalities are exposed (hiding complex implementation, showing only essential features).

// ---------------------------
// #1. First Version of Mobile class
// ---------------------------

// // ✅ Class definition
// class Mobile {
//   constructor(name, color, initialCharging) {

//     // ✅ Public properties
//     this.name = name;          // accessible outside
//     this.color = color;        // accessible outside
//     this.initialCharging = initialCharging;  // accessible outside

//     // ❌ currentCharging is also public here
//     this.currentCharging = 0;     

//     // ✅ Method for charging
//     this.plugInCharge = (charge) => {
//       // Adds new charge on top of initialCharging (not cumulative)
//       this.currentCharging = this.initialCharging + charge;
//     };
//   }
// }

// // ---------------------------
// // #2. Creating objects
// // ---------------------------
// let redmi = new Mobile('Redmi Note 7', 'Black', 20);
// let apple = new Mobile('Apple', 'Silver', 20);

// // ---------------------------
// // #3. Actions
// // ---------------------------
// redmi.plugInCharge(30);          // sets currentCharging = 20 + 30 = 50
// console.log(redmi.currentCharging); // ✅ prints 50

// // ❌ But problem: public properties can be directly modified
// redmi.currentCharging = 200;       
// console.log(redmi.currentCharging) // ❌ prints 200 (broken! bypassed logic)


// ---------------------------
// #2. Second Version of Mobile class
// ---------------------------

// class Mobile {
//     constructor(name, color, initialCharging) {

//         // ✅ Public properties
//         this.name = name;              
//         this.color = color;            
//         this.initialCharging = initialCharging;  

//         // ✅ Private property (encapsulated)
//         var currentCharging = 0;     

//         // ✅ Private method (encapsulated)
//         var chargingDetails = (charge) => {
//             // Calculates new charging
//             currentCharging = this.initialCharging + charge  
//             console.log("Current Charging " + currentCharging)
//         }

//         // ✅ Public method (abstraction)
//         // Exposed method → outside world can only call this
//         this.plugInCharge = (charge) => {
//             chargingDetails(charge)  
//         };
//     }
// }

// // ---------------------------
// // #2. Creating objects
// // ---------------------------
// let redmi = new Mobile('Redmi Note 7', 'Black', 20);
// let apple = new Mobile('Apple', 'Silver', 20);

// // ---------------------------
// // #3. Getting/Setting actions
// // ---------------------------

// // ❌ This does nothing → currentCharging is private
// redmi.currentCharging = 200   

// // ✅ Only way is via plugInCharge
// console.log(redmi.plugInCharge(30))   // "Current Charging 50"
// console.log(redmi.plugInCharge(200))  // "Current Charging 220" ❌ Problem: no restriction


// 🔎 Where Abstraction is applied

// In version 1 → Everything (name, color, initialCharging, currentCharging) is public.
// User has full access (bad, breaks encapsulation).
// Not really abstracted → too much detail is exposed.
// In version 2 →
// Only plugInCharge() is exposed as the abstract interface.
// User doesn’t know how charging is calculated.
// Abstraction works → user only worries about “charging the phone,” not about the internal logic.
// ⚠️ Problems
// Version 1 (Public currentCharging)
// redmi.currentCharging = 200 bypasses the charging rules.
// No abstraction/encapsulation → breaks logic.
// Version 2 (Private currentCharging)
// Logic resets each time: currentCharging = this.initialCharging + charge.
// Should increment instead (currentCharging += charge).
// No validation: mobile can exceed 100% charge (e.g., 220).
// throw error is missing (should be throw new Error).



// -------------------------------
// ✅ Mobile Class Example (with Encapsulation + Abstraction concepts)
// -------------------------------
class Mobile {
    constructor(name, color, initialCharging) {

        // -------------------------------
        // Public properties (Abstraction)
        // These are visible and accessible outside the class
        // -------------------------------
        this.name = name;              // anyone can access/change
        this.color = color;            // anyone can access/change
        this.initialCharging = initialCharging;  // initial battery %

        // -------------------------------
        // Private property (Encapsulation)
        // Declared with 'var', so only accessible inside constructor
        // -------------------------------
        var currentCharging = 0;

        // -------------------------------
        // Private method (Encapsulation)
        // Hidden logic to calculate charging
        // Cannot be accessed outside the class
        // -------------------------------
        var chargingDetails = (charge) => {
            // BUG ❌ each time it resets based on initialCharging only
            currentCharging = this.initialCharging + charge

            // BUG ❌ wrong error usage (should be new Error)
            if (currentCharging > 100) {
                throw error("Mobile is fully charged")
            }

            console.log("Current Charging: " + currentCharging)
        }

        // -------------------------------
        // Public method (Abstraction)
        // This is the "exposed API" → outside world just calls plugInCharge
        // It internally calls private chargingDetails
        // -------------------------------
        this.plugInCharge = (charge) => {
            chargingDetails(charge)
        };
    }
}

// -------------------------------
// ✅ Creating objects
// -------------------------------
let redmi = new Mobile('Redmi Note 7', 'Black', 20);
let apple = new Mobile('Apple', 'Silver', 20);

// -------------------------------
// ✅ Testing Properties & Methods
// -------------------------------

// ❌ Attempt to directly modify private property
// "currentCharging" is not public, so this has no effect
redmi.currentCharging = 200;

// ✅ Call plugInCharge → works because it accesses the private logic
console.log(redmi.plugInCharge(30))
// Expected: 50 (20 + 30), but actually just prints inside chargingDetails

console.log(redmi.plugInCharge(200))
// BUG ❌ gives 220 (20 + 200), condition to restrict >100 fails 
// because of wrong error handling

// ✅ Public property is accessible (Abstraction)
console.log(redmi.color)  // "Black"

// ❌ Private property is not accessible → undefined
console.log(redmi.currentCharging)
//setters methods




// 🔎 Where Abstraction is applied here:

// The user of the class (redmi object) only sees:

// Public properties: name, color, initialCharging

// Public method: plugInCharge

// They don’t need to know how charging is actually being calculated (chargingDetails and currentCharging are hidden).

// That’s abstraction: showing only what is necessary (essential features), hiding unnecessary implementation details.

// 🔎 Where Encapsulation is applied here:

// currentCharging and chargingDetails are hidden using var.

// They are not attached to this, so cannot be directly accessed/modified.

// Only the method plugInCharge() can touch them.

// ⚠️ Problems in this code:

// Logic Bug

// currentCharging = this.initialCharging + charge
// → It resets on every call instead of incrementing.
// Example: plug 30 (→ 50), plug 200 (→ 220), but it should have stopped at 100.

// Error Handling Bug

// throw error("Mobile is fully charged")
// → ❌ should be throw new Error("Mobile is fully charged").

// No true Abstraction control

// Even though plugInCharge is abstracted, public properties (initialCharging) can still be manipulated directly from outside.

// Example: redmi.initialCharging = 500; would break charging logic.

// ✅ Why Abstraction is Important here

// You (the user of the class) don’t care how the charging system is implemented.

// You only interact with a simple method (plugInCharge) and essential properties (name, color).

// This keeps the interface clean and prevents confusion.