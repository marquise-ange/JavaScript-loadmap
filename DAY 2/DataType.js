// we are starting with Primitive Data Types in JavaScript

// 1. String
let name = "John Doe";
let greeting = 'Hello, World!';
let message = "John's Doe";

// 2. Number
let age = 30;
let price = 19.99;
let temperature = -5;

//in Numbers we have some special values
let a = BigInt(1234567890123456789012345678901234567890); // BigInt for very large integers

// 3. Boolean
let isActive = true;
let isAdmin = false;

// 4. undefined
let x;
let y = undefined; //(failing to assign a value to a variable will automatically set it to undefined)

// 5. null
let z = null; // null is an assignment value that represents no value or no object.
//  It is intentionally set to indicate the absence of any object value.

// 6. Symbol (introduced in ES6)
let sym1 = Symbol('description');
let sym2 = Symbol('description'); // sym1 and sym2 are unique, even though they have the same description.

//non primitive data types in JavaScript

// 1. Object
let person = {
    name: "Alice",
    age: 25,
    isStudent: true
};

//2. arrays
let arr = [1, 2, 3, 4, 5];

//3. functions
function greet(name) {
    return `Hello, ${name}!`;
}



