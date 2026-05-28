//Functions in javaScript are a way to encapsulate a block of code that performs a specific task. They can be defined using the function keyword, followed by the function name and parentheses. The code to be executed is enclosed in curly braces {}.
//in a function is made up of parameter and arguments
//parameter is a variable that is defined in the function definition and is used to receive a value when the function is called. Arguments are the actual values that are passed to the function when it is called.
//Arguments are passed to the function in the same order as the parameters are defined. The function can then use these arguments to perform its task and return a value if necessary.

function greet(greeting){
  return greeting + " " + "Marquise";
}
 console.log(greet("Hello"));

//addition of two numbers using a function
 let a=5;
 let b=10;
 let c=a + b;
  console.log(c);

function add(a,b){
    return a+b;
}
console.log(add(5,10));
console.log(add(20,30));

//an obect {key:"value"}
//an array [1,2,3,4,5]
function sayHi(){
    console.log("Hi")
}
sayHi(); // function recursion is when function calls itself, either directly or indirectly. This can be useful for solving problems that can be broken down into smaller, similar subproblems. However, it is important to ensure that there is a base case to prevent infinite recursion, which can lead to a stack overflow error.
//we are seeing the output because hoisting in javaScript. Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use a function or variable before it is declared in the code, and it will still work as expected. However, it is generally recommended to declare functions and variables before using them to improve code readability and avoid potential issues with hoisting.

//type of parameter
// rest parameter is a feature in JavaScript that allows a function to accept an indefinite number of arguments as an array. It is denoted by three dots (...) followed by the parameter name. The rest parameter collects all remaining arguments passed to the function into an array, which can then be accessed and manipulated within the function. This is particularly useful when you want to create functions that can handle a variable number of arguments without having to specify each one individually.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//in rest operators these are used to pass and array as a parameter to a function
function sum(...numbers){ 
    let sumNumbers =0;
    for (let i =0; i < numbers.length; i++){
        sumNumbers +=numbers[i];
    }
    return sumNumbers;
}


console.log(sum(1,2,3,4,5,6,7,8,9,10));
//function sumer(...numbers)// spread operator is used to expand an array into individual elements. It is denoted by three dots (...) followed by the array name. The spread operator can be used in various contexts, such as function calls, array literals, and object literals. When used in a function call, it allows you to pass an array of arguments as individual parameters to the function. When used in an array literal, it allows you to create a new array by combining existing arrays or adding new elements. When used in an object literal, it allows you to create a new object by combining existing objects or adding new properties.

//destructing  these is a methodof extracting values form arrays or objects and assigning them to variables.
// destructuring in arrays:

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 const [d,e,f]=arr;
 console.log(d);
    console.log(e);
    console.log(f);


    // destructuring in objects:
    const obj ={
        name:"Marquise",
        age: 25,
        country: "USA",
        city: "New York",
        email: "angewdcef@gmail.com",
    }
 function createUser({name,age}){
    console.log(name);
    console.log(age);
 };
  createUser(obj);

  let x =10;
  function int(){
    console.log(x);
}
int();

const user2={
    name:"Marquise",
    getName(){
        return this.name;
    }
}

  

//closures
function outer(){
    let counter =0;
    return function inner(){
        counter++;
        return counter;
    }
}

const increment = outer();
console.log(increment());

//types of function with syntax
//arrow function
const get = (a,b) => {
    return a + b;
}

//function declaration
function get(){
    console.log("This is a function declaration");  

}

//function expression
const get = function(){
    return "This is a function expression";
}

//anonymous function
function   (){
    console.log("This is an anonymous function");
}

//Asynchronous function
const get = async () => {
    return"hello world";
}
