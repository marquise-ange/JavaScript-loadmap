let doorLocked = true;
let alarmOn = true;

//Check if the door is locked.
if (doorLocked) {
    console.log("door is locked");
} else {
    console.log("door is not locked");
}

//Check if the alarm is active.
if (alarmOn) {
    console.log("alarm is active");
} else {
    console.log("alarm is not active");
}

//Check if the house is secure.
if (doorLocked && alarmOn) {
    console.log("house is secure");
} else {
    console.log("house is not secure");
}
