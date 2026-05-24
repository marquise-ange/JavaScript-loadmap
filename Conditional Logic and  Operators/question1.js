let balance = 50000;
let  withdrawAmount = 10000;

 //Check if the balance is enough for withdrawal.
if (withdrawAmount <= balance) {
    console.log("withdrawal successful");
} else {
    console.log("insufficient funds");
}

//Check if the balance is exactly 0.
if (balance === 0) {
    console.log("your account is empty");
} else {
    console.log("your account has funds");
}
  
//Check if the withdrawal amount is NOT greater than the balance.
if (!(withdrawAmount > balance)) {
    console.log("withdrawal amount is within balance");
} else {
    console.log("withdrawal amount is greater than balance");
}
