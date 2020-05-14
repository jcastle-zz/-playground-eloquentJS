// Scratch pad for Ch2 examples
// Bindings - using variables and assigning values
let ten = 10;
console.log(ten * 10);

let mood = 'light';
console.log(mood);
mood = 'dark';
console.log(mood);

let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);

let one = 1, two = 2;
console.log(one + two);

var name = "Ayda";
const greeting = "Hello";
console.log(greeting + " " + name);

// Using functions to return values
console.log(Math.max(2, 4));
console.log(Math.min(2, 4) + 100);

// Control flow
// let theNumber = Number(prompt("Pick a number"));
// if (!Number.isNaN(theNumber)) {
//     console.log("Your number is the square root of " + theNumber * theNumber);
// }

if (1 + 1 == 2) console.log("it's true");

// let theNumber = Number(prompt('Pick a number'));
// if (!Number.isNaN(theNumber)) {
//     console.log("Your number is the square root of " + theNumber * theNumber);
// } else {
//     console.log("Hey, you didn't give me a number");
// }

// Can chain multiple if/else statements together
// let num = Number(prompt("Pick a number"));

// if (num < 10) {
//     console.log("Small");
// } else if (num < 100) {
//     console.log("Medium");
// } else {
//     console.log("Large");
// }

// Looping control flow - Output equals 0, 2, 4...12
let number = 0;
while (number <= 12) {
    console.log(number);
    number = number + 2;
}

let result = 1;
let counter = 0;
while (counter < 10) {
    result = result * 2;
    counter = counter + 1;
}
console.log(result);

// Will continue to loop until youName value is entered into the prompt
let yourName;
do {
    yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);