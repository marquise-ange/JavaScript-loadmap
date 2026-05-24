let temperature = 40;
let heartRate = 55;

//Check if the temperature is above 39.
if (temperature > 39) {
    console.log("temperature is above 39");
} else {
    console.log("temperature is below 39");
}

//Check if the heart rate is below 60.
if (heartRate < 60) {
    console.log("heart rate is below 60");
} else {
    console.log("heart rate is above 60");
}

//Check if both conditions are true.
if (temperature > 39 && heartRate < 60) {
    console.log("both conditions are true");
} else {
    console.log("at least one condition is false");
}

