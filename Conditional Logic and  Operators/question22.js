let subscriptionActive = true;
let internetConnected = true;

//Check if the subscription is active.
if (subscriptionActive) {
    console.log("The subscription is active.");
} else {
    console.log("The subscription is not active.");
}

//Check if the internet exists.
if (internetConnected) {
    console.log("The internet is connected.");
} else {
    console.log("The internet is not connected.");
}

//Check if streaming can start.
if (subscriptionActive && internetConnected) {
    console.log("Streaming can start.");
} else {
    console.log("Streaming cannot start.");
}
