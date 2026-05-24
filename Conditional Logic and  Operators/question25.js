let booksBorrowed = 2;
let maxBooks = 5;

//Check if books borrowed are less than max allowed.
if (booksBorrowed < maxBooks) {
    console.log("You can borrow more books.");
} else {
    console.log("You have reached the borrowing limit.");
}

//Check if the borrowing limit is reached.
if (booksBorrowed >= maxBooks) {
    console.log("You have reached the borrowing limit.");
} else {
    console.log("You can borrow more books.");
}

//Check if another book can be borrowed.
if (booksBorrowed < maxBooks) {
    console.log("You can borrow another book.");
} else {
    console.log("You cannot borrow another book.");
}
