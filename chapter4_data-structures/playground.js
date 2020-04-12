console.log('chapter 4 - data structures - objects & arrays');

let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
console.log(listOfNumbers[0]);

// push and pop
let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
console.log(sequence.pop());
console.log(sequence);

// objects
let day1 = {
    squirrel: false,
    events: ['work', 'touched tree', 'pizza', 'running']
};
console.log(day1.squirrel);
day1.wolf = false;
console.log(day1.wolf);