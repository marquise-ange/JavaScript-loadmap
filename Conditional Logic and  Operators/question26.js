let tablesAvailable = 4;
let customers = 2;

//Check if tables are available.
if (tablesAvailable > 0) {
    console.log("Tables are available.");
} else {
    console.log("No tables available.");
}

//Check if the restaurant is full.
if (customers >= tablesAvailable) {
    console.log("The restaurant is full.");
} else {
    console.log("The restaurant is not full.");
}

//Check if reservation can proceed.
if (tablesAvailable > 0 && customers < tablesAvailable) {
    console.log("Reservation can proceed.");
} else {
    console.log("Reservation cannot proceed.");
}
