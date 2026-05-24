let paymentMade = true;
let coursePrice = 75000;

//Check if payment was made.
if (paymentMade) {
    console.log("Payment was made.");
} else {
    console.log("Payment was not made.");
}

//Check if the course price is above 50000.
if (coursePrice > 50000) {
    console.log("The course price is above 50000.");
} else {
    console.log("The course price is not above 50000.");
}

//Check if students can access the course.
if (paymentMade && coursePrice > 50000) {
    console.log("Students can access the course.");
} else {
    console.log("Students cannot access the course.");
}
