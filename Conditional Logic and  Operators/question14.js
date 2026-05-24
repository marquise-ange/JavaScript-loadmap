let roomsAvailable = 12;
let roomsRequested = 3;

//Check if rooms are available.
if (roomsAvailable > 0) {
    console.log("Rooms are available.");
} else {
    console.log("No rooms available.");
}

//Check if the hotel is full.
if (roomsAvailable === 0) {
    console.log("The hotel is full.");
} else {
    console.log("The hotel is not full.");
}

//Check if requested rooms can be booked.
if (roomsRequested <= roomsAvailable) {
    console.log("Requested rooms can be booked.");
} else {
    console.log("Requested rooms cannot be booked.");
}
