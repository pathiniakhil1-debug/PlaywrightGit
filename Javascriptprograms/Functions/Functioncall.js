// The call() method is a predefined JavaScript method. 
// It can be used to invoke (call) a method with an owner object as an argument (parameter).
// This allows borrowing methods from other objects, executing them within a different context, 
// overriding the default value, and passing arguments.

// ===============================
// Example 1: Simple product function with call()
// ===============================

// Function that returns product of two numbers
function product(a, b) {
    return a * b;   // multiplies and returns result
}

// Calling product() function using .call()
// - 'this' → execution context (not used here, so just pass 'this')
// - 20 and 5 → arguments to the function
let result = product.call(this, 20, 5);

console.log(result); // Output: 100
// Why? product(20, 5) = 20 * 5 = 100


// ===============================
// Example 2: Using call() to borrow method from another object
// ===============================

let employee = {
    // details method accepts designation and experience
    details: function (designation, experience) {
        return this.name + " " + this.id + designation + experience;
        // 'this' refers to whichever object we set as context
    }
}

// Two employee objects (without the method)
let emp1 = {
    name: "A",
    id: "123",
}
let emp2 = {
    name: "B",
    id: "456",
}

// Use employee.details with emp2's context
// - First argument to call() → context object (emp2)
// - Next arguments → designation & experience
let x = employee.details.call(emp2, " Manager ", "4 years");

console.log(x); // Output: B 456 Manager 4 years
// Why? 'this' inside details = emp2 → "B 456 Manager 4 years"
