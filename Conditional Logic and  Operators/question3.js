let orderAmount = 25000;
let isPremiumUser = false;
 
//Check if the order amount is greater than 20000.
if(orderAmount > 20000){
    console.log("you amount is greater than 20000");
}else{
    console.log("your amount is less than 20000");
}

//Check if the customer is premium.
if(isPremiumUser){
    console.log("the customer is a premium user");
}else{
    console.log("the customer is not a premium user");
}

//Check if free delivery applies.
if(orderAmount > 20000 || isPremiumUser){
    console.log("free delivery applies");
}else{
    console.log("free delivery does not apply");
}
