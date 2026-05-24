let hoursParked = 7;
let paymentCompleted = false;

//Check if parking exceeded 5 hours.
if (hoursParked > 5) {
    console.log("Parking exceeded 5 hours.");
} else {
    console.log("Parking did not exceed 5 hours.");
}

//Check if payment is completed.
if (paymentCompleted) {
    console.log("Payment is completed.");
} else {
    console.log("Payment is not completed.");
}

//Check if the penalty applies.
if (hoursParked > 5 && !paymentCompleted) {
    console.log("Penalty applies.");
} else {
    console.log("Penalty does not apply.");
}
