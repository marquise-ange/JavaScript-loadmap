let savedPassword = "admin123";
let inputPassword = "admin123";

//Check if passwords match.
if (inputPassword === savedPassword) {
    console.log("Passwords match");
} else {
    console.log("Passwords do not match");
}
 //Check if passwords are NOT equal.
if (inputPassword !== savedPassword ) {
    console.log("password doesn't match");
} else {
    console.log("password matches");
}

//Check if the input password equals "admin123".
if (inputPassword === "admin123") {
    console.log("input password is correct");
} else {
    console.log("input password is incorrect");
}