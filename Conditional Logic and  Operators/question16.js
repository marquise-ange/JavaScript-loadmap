let completedLessons = 15;
let quizPassed = true;
 
//Check if completed lessons are above 10.
if (completedLessons > 10) {
    console.log("completed lessons are above 10");
} else {
    console.log("completed lessons are not above 10");
}

//Check if the quiz is passed.
if (quizPassed) {
    console.log("quiz is passed");
} else {
    console.log("quiz is not passed");
}

//Check if a certificate should be awarded.
if (completedLessons > 10 && quizPassed) {
    console.log("certificate should be awarded");
} else {
    console.log("certificate should not be awarded");
}
