let passportValid = true;
let ticketPaid = true;

//Check if the passport is valid.
if (passportValid) {
    console.log("passport is valid");
}else {
    console.log("passport is not valid");
}   

//Check if the ticket is paid.
if (ticketPaid) {
    console.log("ticket is paid");
} else {
    console.log("ticket is not paid");
}

//Check if the passenger can board.
if (passportValid && ticketPaid) {
    console.log("passenger can board");
}   else {
    console.log("passenger cannot board");
}
