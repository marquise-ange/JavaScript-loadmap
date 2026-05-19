// let is a block-scoped variable declaration, which means it is only accessible within the block it is defined in.(can be reassigned but can't be redeclared in the same scope).

/*let name = "John Doe";
name = "Jane Doe"; // reassigning the value of name
console.log(name); // Output: Jane Doe*/


// const is also block-scoped variable declaration that is read-only, but it is used to declare variables that cannot be reassigned after their initial assignment.
// (cannot be reassignned or redeclared in the same scope).
const PI = 3.14;
// PI = 3.14159; // This will throw an error because we cannot reassign a value to a constant variable.
console.log(PI); // Output: 3.14

// var is function-scoped, which means it is accessible throughout the entire function it is defined in, regardless of block scope.
/*var age = 30;
age = 31; // reassigning the value of age
console.log(age); // Output: 31*/