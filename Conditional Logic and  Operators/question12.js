let age = 22;
let membershipPaid = true;


//Check if your age is 18 or older.
if (age >= 18) {
    console.log("you are 18 or older");
} else {
    console.log("you are younger than 18");
}

//Check if membership is paid.
if(membershipPaid) {
    console.log("membership is paid");
}  else {
    console.log("membership is not paid");
}

//Check if the user can access the gym.
if (age >= 18 && membershipPaid) {
    console.log("you can access the gym");
} else {
    console.log("you cannot access the gym");
}

