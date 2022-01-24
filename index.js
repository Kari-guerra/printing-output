// TASK 1


// Declare three variables, a and b and c.
// If a has value 3, b has value 5, and c doesn't have a value, alert the following expressions ( one after another ). Alert popup box has to show the following content for each expression (concatenate everything in one long expression using "\n" to make new lines):


let a = 3;
let b = 5;
let c = undefined; 


// Use the following template for each expression below:
// alert( "description of alerted_value: " + alerted_value );

let output = '';

output += 'let a = 3\n';
output += 'let b = 5\n';
output += 'let c =  undefined \n';
output += '---------\n';
output += `a + b = ${(a + b)}\n`; // a + b = 8
output += `a - b = ${(a - b)}\n`; // a - b = -2
output += `a * b = ${(a * b)}\n`; // a * b = 15
output += `a / b = ${(a / b)}\n`; // a / b = 0.6
output += `a % b = ${(a % b)}\n`; // a % b = 3
output += `(a += b): ${(a += b)}\n`; // (a += b) = 8
output += `(a -= b): ${(a -= b)}\n`; // (a -= b) = 3
output += `(a *= b): ${(a *= b)}\n`; // (a *= b) = 15
output += `(a /= b): ${(a /= b)}\n`; // (a /= b) = 3
output += `(a %= b): ${(a %= b)}\n`; // (a %= b) = 3
output += `(a == b): ${(a == b)}\n`; // (a == b) = false
output += `(a != b): ${(a != b)}\n`; // (a != b) = true
output += `(a > b): ${(a > b)}\n`; // (a > b) = false
output += `(a < b): ${(a < b)}\n`; // (a < b) = true
output += `(!a && !c): ${(!a && !c)}\n`; // (a && b) = false
output += `(!a || !c): ${(!a || !c)}\n`; // (a || b) = true

alert(output);

/*
// TASK 2

// Declare the variable first_name and assign it with the value of your first name;
let first_name = 'Karidia';
// Declare the variable last_name and assign it with the value of your last name;
let last_name = 'Guerra';
// Declare the variable email and assign it with the value of your email;
let email = 'niet0005@algonquinlive.com';
// Declare the variable output;
let output = '';
// Create the expression concatenating variables first_name, last_name, email and string literals needed to complete the sentence reading: "My name is Your-first-name Your-last-name. You can contact me at your-email@mail.com.";
// Assign output with gotten expression;
output += `My name is ${(first_name)} ${(last_name)}. You can contact me at ${(email)}`;
// Alert output.

alert(output);
*/