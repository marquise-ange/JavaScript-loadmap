let age = 30;

if (age >= 18) {
    console.log("you are not allowed to vote");

} else {
    console.log("you are allowed to vote");
}

// baker's math
let sugarweight = 200;
let flourweight = 500;
let totalWeight = flourweight + sugarweight;

let remainder = totalWeight / 3;


console.log(remainder);

//bank's math
let initialBalance = 1000;
initialBalance += 500; //deposit
initialBalance -= 150; //buys groceries
initialBalance *= 2; //the bank gives you a 100% interest on your balance, so it doubles your money

console.log(initialBalance);

//VIP lounge
let userAge = 25;
if (userAge === 21) {
    console.log("Welcome to the VIP lounge");
} else {
    console.log("Sorry, you are not allowed to enter the VIP lounge");

}

if (userAge >= 18) {
    console.log("You are eligible to enter the VIP lounge");
} else {
    console.log("Sorry, you are not eligible to enter the VIP lounge");
}

if (userAge !== 13) {
    console.log("You are not allowed to enter the VIP lounge");
} else {
    console.log("Welcome to the VIP lounge");
}

//E-Commerce discount Engine
let carTotal = 50;
let isPremiumMember = true;
let hasDiscountCode = false;
let isFraudulent = false;
if (isPremiumMember || carTotal >= 100) {
    console.log("You are eligible for a free shipping ");
} else {
    console.log("your account is flagged as fraudulent");
}