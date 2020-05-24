console.log('chapter 4 - data structures - objects & arrays');

let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
// → 5
console.log(listOfNumbers[0]);
// → 2
console.log(listOfNumbers[2 - 1]);
// → 3

let doh = "Doh";
console.log(typeof doh.toUpperCase);
// → function
console.log(doh.toUpperCase());
// → DOH

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]
console.log(sequence.pop());
// → 5
console.log(sequence);
// → [1, 2, 3, 4]

let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
  };
  console.log(day1.squirrel);
  // → false
  console.log(day1.wolf);
  // → undefined
  day1.wolf = false;
  console.log(day1.wolf);
  // → false

  let descriptions = {
    work: "Went to work",
    "touched tree": "Touched a tree"
  };

  let anObject = {left: 1, right: 2};
console.log(anObject.left);
// → 1
delete anObject.left;
console.log(anObject.left);
// → undefined
console.log("left" in anObject);
// → false
console.log("right" in anObject);
// → true

console.log(Object.keys({x: 0, y: 0, z: 2}));
// → ["x", "y", "z"]

let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);
// → {a: 1, b: 3, c: 4}

let journal = [
    {events: ["work", "touched tree", "pizza",
              "running", "television"],
     squirrel: false},
    {events: ["work", "ice cream", "cauliflower",
              "lasagna", "touched tree", "brushed teeth"],
     squirrel: false},
    {events: ["weekend", "cycling", "break", "peanuts",
              "beer"],
     squirrel: true},
    /* and so on... */
  ];

  let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false

object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10

const score = {visitors: 0, home: 0};
// This is okay
score.visitors = 1;
// This isn't allowed
score = {visitors: 1, home: 1};

let journal = [];

function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}

addEntry(["work", "touched tree", "pizza", "running",
          "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
          "beer"], true);

          function phi(table) {
            return (table[3] * table[0] - table[2] * table[1]) /
              Math.sqrt((table[2] + table[3]) *
                        (table[0] + table[1]) *
                        (table[1] + table[3]) *
                        (table[0] + table[2]));
          }
          
          console.log(phi([76, 9, 4, 1]));
          // → 0.068599434

          function tableFor(event, journal) {
            let table = [0, 0, 0, 0];
            for (let i = 0; i < journal.length; i++) {
              let entry = journal[i], index = 0;
              if (entry.events.includes(event)) index += 1;
              if (entry.squirrel) index += 2;
              table[index] += 1;
            }
            return table;
          }
          
          console.log(tableFor("pizza", JOURNAL));
          // → [76, 9, 4, 1]

          for (let i = 0; i < JOURNAL.length; i++) {
            let entry = JOURNAL[i];
            // Do something with entry
          }


          function journalEvents(journal) {
            let events = [];
            for (let entry of journal) {
              for (let event of entry.events) {
                if (!events.includes(event)) {
                  events.push(event);
                }
              }
            }
            return events;
          }
          
          console.log(journalEvents(JOURNAL));
          // → ["carrot", "exercise", "weekend", "bread", …]