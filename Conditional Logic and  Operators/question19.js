let fuelAvailable = 100;
let fuelNeeded = 40;

//Check if enough fuel exists.
if (fuelAvailable > 0) {
    console.log("Enough fuel exists.");
} else {
    console.log("Not enough fuel exists.");
}

//Check if fuel is empty.
if (fuelAvailable === 0) {
    console.log("Fuel is empty.");
} else {
    console.log("Fuel is not empty.");
}

//Check if fuel needed is NOT greater than available fuel.
if (!(fuelNeeded > fuelAvailable)) {
    console.log("Fuel needed is not greater than available fuel.");
} else {
    console.log("Fuel needed is greater than available fuel.");
}
