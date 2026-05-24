let donationAmount = 15000;
let isVerified = true;

//Check if the donation is above 10000.
if (donationAmount > 10000) {
    console.log("Donation is above 10000.");
} else {
    console.log("Donation is not above 10000.");
}

//Check if the user is verified.
if (isVerified) {
    console.log("User is verified.");
} else {
    console.log("User is not verified.");
}

//Check if donation qualifies for recognition.
if (donationAmount > 10000 && isVerified) {
    console.log("Donation qualifies for recognition.");
} else {
    console.log("Donation does not qualify for recognition.");
}
