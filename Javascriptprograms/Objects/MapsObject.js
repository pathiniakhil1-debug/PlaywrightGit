// What is a Map?
// A Map is a collection of key-value pairs (similar to an object).
// But unlike objects:
// Keys can be of any data type (objects, arrays, numbers, strings, etc.).
// Map remembers the insertion order of elements.
// Provides built-in methods for easy access, iteration, and modification.

// Create a Map
const myMap = new Map();

// Set key-value pairs
myMap.set("name", "Akhil");
myMap.set("age", 25);
myMap.set(100, "Hundred");   // Number as key
myMap.set(true, "Yes");      // Boolean as key
console.log(myMap);          // Output: Map(4) { 'name' => 'Akhil', 'age' => 25, 100 => 'Hundred', true => 'Yes' }

// Get value by key
console.log(myMap.get("name"));  // Output: Akhil
console.log(myMap.get(100));     // Output: Hundred

// Check if a key exists
console.log(myMap.has("age"));   // Output: true

// Delete a key
myMap.delete(true);

// Size of Map
console.log(myMap.size);  // Output: 3



// Iterate over Map using for...of
const m = new Map([
    ["name", "Akhil"],
    ["age", 25],
    ["city", "Noida"]
]);

// Iterate using for...of
for (let [key, value] of m) {
    console.log(`${key}: ${value}`);
}
// Output:
// name: Akhil
// age: 25
// city: Noida