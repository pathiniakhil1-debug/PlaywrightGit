//Basic Operations on JavaScript Objects

// ✅ 1. Accessing Object Properties
let obj1 = { name: "Sourav", age: 23 };

// Using Dot Notation
console.log("Dot Notation:", obj1.name);  // Sourav

// Using Bracket Notation
console.log("Bracket Notation:", obj1["age"]);  // 23


// ✅ 2. Modifying Object Properties
let obj2 = { name: "Sourav", age: 22 };
console.log("Before modifying:", obj2);  // { name: 'Sourav', age: 22 }

obj2.age = 23; // Updating property
console.log("After modifying:", obj2);  // { name: 'Sourav', age: 23 }


// ✅ 3. Adding Properties to an Object
let obj3 = { model: "Tesla" };
obj3.color = "Red";  // Adding new property
console.log("After adding property:", obj3);  // { model: 'Tesla', color: 'Red' }


// ✅ 4. Removing Properties from an Object
let obj4 = { model: "Tesla", color: "Red" };
delete obj4.color;  // Removes 'color'
console.log("After deleting property:", obj4);   // { model: 'Tesla' }


// ✅ 5. Checking if a Property Exists
let obj5 = { model: "Tesla" };
console.log("Does 'color' exist?", "color" in obj5); // false // checking key existence
console.log("Does 'model' exist?", obj5.hasOwnProperty("model")); // true  // checking key existence using hasOwnProperty


// ✅ 6. Iterating Through Object Properties
let obj6 = { name: "Sourav", age: 23 };
for (let key in obj6) {
    console.log(key + ": " + obj6[key]);  //
}

// Output:
// name: Sourav
// age: 23

// ✅ 7. Merging Objects
let obj7a = { name: "Sourav" };
let obj7b = { age: 23 };

// Merge using spread operator
let obj7c = { ...obj7a, ...obj7b };
console.log("Merged object:", obj7c);  // { name: 'Sourav', age: 23 }


// ✅ 8. Object Length
let obj8 = { name: "Sourav", age: 23 };
console.log("Number of properties:", Object.keys(obj8).length); // 2
console.log("Object keys:", Object.keys(obj8)); // ['name', 'age']
console.log("Object values:", Object.values(obj8)); // ['Sourav', 23]


// ✅ 9. Recognizing a JavaScript Object
let obj9 = { name: "Sourav" };
console.log("Is obj9 an object?", typeof obj9 === "object" && obj9 !== null); // true
