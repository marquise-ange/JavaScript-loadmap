let availableSeats = 20;
let requestedSeats = 5;

//Check if enough seats exist.
if (requestedSeats <= availableSeats) {
    console.log("seats are available");
} else {
    console.log("not enough seats available");
}
 //Check if the bus is full.
if (availableSeats === 0) {
    console.log("the bus is full");
} else {
    console.log("seats are still available");
}

//Check if requested seats are NOT more than available seats.
if (!(requestedSeats > availableSeats)) {
    console.log("requested seats are not more than available seats");
} else {  
      console.log("requested seats are more than available seats");
}
