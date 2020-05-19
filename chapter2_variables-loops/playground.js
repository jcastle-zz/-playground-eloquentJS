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

// let result = 1;
// let counter = 0;
// while (counter < 10) {
//     result = result * 2;
//     counter = counter + 1;
// }
// console.log(result);

// Will continue to loop until youName value is entered into the prompt
// let yourName;
// do {
//     yourName = prompt("Who are you?");
// } while (!yourName);
// console.log(yourName);

console.log("This is the first line. \nThis is the second.");

if (false != true) {
    console.log("That makes sense");
    if (1 < 2) {
        console.log("There's no surprise there");
    }
}

// For loops
for (let number = 0; number <= 12; number = number +2) {
    console.log(number);
}

let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
    result = result * 2;
}
console.log(result)

// Breaking out of a loop
// Can do counter with ++ for counter + 1 or -- for counter - 1
for (let current = 20; ; current = current + 1) {
    if (current % 7 === 0) {
        console.log(current);
        break;
    }
}

const testFunction = (someVar) => {
    console.log(someVar);
};

testFunction('this worked');
// Dispatching on a value with switch
// switch(prompt("What is the weather like?")) {
//     case "rainy":
//         console.log("Remember to bring an umbrella");
//         break;
//     case "sunny":
//         console.log("Dress lightly");
//         break;
//     case "cloudy":
//         console.log("Go outside");
//         break;
//     default:
//         console.log("Unknown weather type");
//         break;
// }

