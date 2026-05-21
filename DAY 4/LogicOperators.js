
let a = 5;
let b = 10;
let c=2;
let d= "2";
let age = 12;
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
  if(password.length >= 8) {
    console.log("Password is strong enough");
  } else{
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
}else { 
    console.log("c is not equal to d");
}

//loose equality ==
//only checks the values, not the datatype:
if (c == d) {
    console.log("c is  equal to d");
}  else {
    console.log("c is not equal to d");
}

//AND operator &&
if (age >=18 && password.length >= 8) {
    console.log("Age is valid and password is strong");
} else {
    console.log("Either age is not valid or password is not strong");
}
