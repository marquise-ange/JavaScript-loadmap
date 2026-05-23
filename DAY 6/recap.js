// switch statement
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Theme is red");
        break;
    case "Tuesday":
        console.log("Theme is blue");
        break;
    case "Wednesday":
        console.log("Theme is green");
        break;
    case "Thursday":
        console.log("Theme is yellow");
        break;
    case "Friday":
        console.log("Theme is purple");
        break;
    default:
        console.log("Invalid day")
}

// calculator
let num1 = 10;
let num2 = 5;
let operator = "+";

switch (operator) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
        case "*":   
        console.log(num1 * num2);  
        break;
    case "/":
        console.log(num1 / num2);
        break;
    default:
        console.log("Invalid operator")
}   

// Atm machine
let balance = 1000;
let withdrawalAmount = 100;
let checkBalance = 500;


let 

//  restaurant menu
// 1 drink:water, juice, soda,milk
// 2 fast food:burger, pizza, fries, hotdog
// 3 coffee : espresso, latte, cappuccino, americano

// order is greater than 50 discount

let order= "drink";
let price=0;

switch (order) {
    case"drink":
    console.log("1.water, 2.juice, 3.soda,4.milk");
    console.log("enter the number of the drink you want to order");
    console.log("enter the quality");
    console.log("enter");
    break;

    case"fast food":
    console.log("1.burger, 2.pizza, 3.fries,4.hotdog");
    console.log("enter the number of the fast food you want to order");
    console.log("enter the quality");
    console.log("total price is:");
    break;

     case"coffee":
    console.log("1.espresso, 2.latte, 3.cappuccino,4.americano");
    console.log("enter the number of the coffee you want to order");
    console.log("enter the quality");
    console.log("total price is:");
    break;

    default:
        console.log("invalid order");
}

