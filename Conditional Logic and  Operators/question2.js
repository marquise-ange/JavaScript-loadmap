let marks = 75;
let hasCertificate = true;

//Check if marks are 70 or higher.
if (marks >=70) {
    console.log("you passed the exam");
} else {
    console.log("you failed the exam");
}

//Check if the student has a certificate.
if (hasCertificate) {
    console.log("has certificate");
}else{
    console.log("does not have certificate");
}

//Check if the student qualifies using marks OR certificate.
if(marks>= 70 || hasCertificate){
    console.log("student qualifies");
}else{
    console.log("student does not qualify");
}
