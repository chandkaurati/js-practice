// Using single quotes 
let string1 = 'Hello, World!';

// Using double quotes
let string2 = "JavaScript is fun!";

// Using template literals (backticks)
let string3 = `This is a template literal.`;

let string = new String("This is a string object.");


// String methods examples

// 1. Length of a string
console.log(string1.length); // Output: 13

// 2. Convert to uppercase
console.log(string2.toUpperCase()); // Output: JAVASCRIPT IS FUN!

// 3. Convert to lowercase
console.log(string2.toLowerCase()); // Output: javascript is fun!

// 4. Extract a substring
console.log(string1.substring(0, 5)); // Output: Hello

// 5. Replace a substring
console.log(string2.replace('fun', 'awesome')); // Output: JavaScript is awesome!

// 6. Split a string into an array
let words = string2.split(' ');
console.log(words); // Output: [ 'JavaScript', 'is', 'fun!' ]

// 7. Trim whitespace
let stringWithSpaces = '   Hello, World!   ';
console.log(stringWithSpaces.trim()); // Output: Hello, World!