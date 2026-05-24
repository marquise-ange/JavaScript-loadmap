let temperature = 8;
let isRaining = true;

//Check if the temperature is below 10.
if (temperature < 10) {
    console.log("The temperature is below 10.");
} else {
    console.log("The temperature is not below 10.");
}

//Check if it is raining.
if (isRaining) {
    console.log("It is raining.");
} else {
    console.log("It is not raining.");
}

//Check if a cold weather alert should be shown.
if (temperature < 10 && isRaining) {
    console.log("A cold weather alert should be shown.");
}   else {
    console.log("A cold weather alert should not be shown.");
}   