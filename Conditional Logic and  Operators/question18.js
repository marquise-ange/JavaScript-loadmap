let age = 15;
let parentPermission = true;

//Check if your age is 18 or older.
if (age >= 18) {
    console.log("You are 18 or older.");
} else {
    console.log("You are not 18 or older.");
}

//Check if parental permission exists.
if (parentPermission) {
    console.log("Parental permission exists.");
} else {
    console.log("Parental permission does not exist.");
}

//Check if access should be granted.
if (age >= 18 && parentPermission) {
    console.log("Access should be granted.");
} else {
    console.log("Access should not be granted.");
}
