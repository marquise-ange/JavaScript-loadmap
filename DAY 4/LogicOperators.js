
let a = 5;
let b = 10;
let c = 2;
let d = "2";
let age = 18;
let password = "password123";


//greater than >
if (a > b) {
    console.log("5 is greater than 10");
} else
    console.log("5 is not greater than 10");


//less than <
if (a < b) {
    console.log("5 is less than 10");
} else {
    console.log("5 is not less than 10");
}
//greater than or equal to >=
if (password.length >= 8) {
    console.log("Password is strong enough");
} else {
    console.log("Password is too short");
}

//less than or equal to <=
if (a <= b) {
    console.log("5 is less than or equal to 10");
} else {
    console.log("5 is not less than or equal to 10");
}

//strict equality ===
//first check the values and also the datatype:
if (c === d) {
    console.log("c is equal to d");
} else {
    console.log("c is not equal to d");
}

//loose equality ==
//only checks the values, not the datatype:
if (c == d) {
    console.log("c is  equal to d");
} else {
    console.log("c is not equal to d");
}

//AND operator &&
//both conditions must be true for the whole expression to be true:
if (age >= 18 && password.length >= 8) {
    console.log("Age is valid and password is strong");
} else {
    console.log("Either age is not valid or password is not strong");
}

//OR operator ||
//only one condition needs to be true for the whole expression to be true:
if (age >= 18 || password.length >= 8) {
    console.log("Either age is valid or password is strong");
} else {
    console.log("Neither age is valid nor password is strong");
}

//NOT operator !
//negates the condition, if the condition is true it becomes false and vice versa:
if (!(age >= 18)) {
    console.log("Age is not valid");
} else {
    console.log("Age is valid");
}

//Assignment operators with logical operators:
let e = 5;
let f = 10;
console.log(e);
// +=, *=, -=, /=, %=

e += f; // e = e + f //(add f to e and assign the result back to e)
//e-= f; // e = e - f //(subtract f from e and assign the result back to e)
//e *= f; // e = e * f //(multiply e by f and assign the result back to e)
//e /= f; // e = e / f //(divide e by f and assign the result back to e)
//e %= f; // e = e % f //(divide e by f and assign the remainder back to e)
console.log(e);

