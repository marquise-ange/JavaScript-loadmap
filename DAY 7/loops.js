// loops

//for loop
//for (let i = 0; i <= 5; i++) {
   // console.log(i);
//}

//while loop
//dice game simulation (keep rolling the dice until we get a 6 using while loop)
/*let roll =0;
while (roll !== 6) {
    roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}

while(counter <= 5){
    console.log(counter);
    counter++;
}*/

//ATM system simulation (keep asking for correct pin until user enters it using while loop)

/*let pin= true;
while(pin!==true){
    console.log("incorrect pin, try again");
}
 console.log("correct pin, welcome to your account");

 //do while loop
 
 let i= 0;
 do {
    console.log("i is" + i);
    i++;
 }

 while(i < 3);

 // example of do while loop
 // this means do while loop will execute what is in the body  if its false we get the output ,
 //  if it is true we  test the condition until it becomes false.

 let i= 5;
 do {
    console.log("i is" + i);
    i++;
 }

 while(i < 3);


 //rewrite the dice game simulation using do while loop
 let diceroll;
 do {
    diceroll =Math.floor(Math.random() * 6) + 1;
    console.log(diceroll);

 }
  while (diceroll !==6);
console.log("congrats you rolled dice 6");*/


//continue and break statements
//continue statement

/*for(let i = 0; i <= 5; i++) {
    if(i === 3) continue; // skip the rest of the loop when i is 3
    console.log(i);
}

//break statement
const password = false;
while (password !== true) {
    console.log("incorrect password, try again");
    break; // exit the loop immediately (stop a code infinity loop)
}
console.log("correct password, welcome to your account"); 

//there is an example of an infinity loop
/*let w=1;
while(w <= 5) {
    console.log(w);
}*/

/*const arr =["banana", "apple", "orange", "grape", "kiwi", "melon", "peach", "pear", "plum", "strawberry"]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}*/

//given an array of numbers that is
//numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]
//1. log the even numbers 
//2.log the odd numbers
//3.log the numbers that are divisible by 3
//4. multiply all the numbers by 2 and log the result
//5. find the largest number in the array and log it
//6. find the smallest number in the array and log it


/*const numbers = [1,2,3,4,5,6,7,8,9,10,80,12,81,14,15,90,17,18,19,20,21,22,23,24,25];
//1. log the even numbers
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}


//2.log the odd numbers
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 !==0){
        console.log(numbers[i]);

    }
}

//3.log the numbers that are divisible by 3
for(let z=0; z<numbers.length; z++){
    if (numbers[z] % 3 ===0){
        console.log(numbers[z]);
    }
}

//4. multiply all the numbers by 2 and log the result
for(let x=0; x < numbers.length; x++){
    console.log(numbers[x] * 2);
}
    

//5. find the largest number in the array and log it
let largest =numbers[0];
for (let i = 1; i < numbers.length; i++){
    if (numbers[i]> largest){
        largest = numbers[i];
    }
}
console.log("the largest number is " + largest);

//6. find the smallest number in the array and log it
 let smallest =numbers[0];
 for (let i=1; i <numbers.length; i++){
    if (numbers[i] < smallest){
        smallest = numbers[i];
    }
}
console.log("the smallest number is " + smallest);// bubble sort algorithm
*/


//simple game where the user guesse a randomly generated number.

// 1. Generate the secret random number (between 1 and 10)
let guessNumber;
let randomNumber = Math.floor(Math.random() * 10) + 1;
 while (guessNumber !== randomNumber) {
    console.log("guess the number between 1 and 10");
 }

console.log