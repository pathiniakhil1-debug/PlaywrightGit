// JavaScript switch Statement
// Last Updated : 28 Jul, 2025
// The switch statement evaluates an expression and executes code based on matching cases.
// It’s an efficient alternative to multiple if-else statements, improving readability when handling many conditions.

// switch (expression) {
//     case value1:
//         // Code block 1
//         break;
//     case value2:
//         // Code block 2
//         break;
//     // more cases
//     default:
//         // Default code block
// }

let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName);