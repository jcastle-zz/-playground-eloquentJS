console.log('Ch3 playground');

/* Functions are the "bread and butter" of JavaScript programming. They provide a way to:
1. Structure larger programs.
2. Reduce repetition.
3. Associate names with subprograms.
4. Isolate subprograms from one another.
5. Define new vocabulary.

Ways to declare a function.
1. Functions as values (or variables) - const car = function(){}
2. Declaration notation - function(){}
3. Arrow functions - const power = () => {}
*/

// A function definition can be a regular binding where the value of the binding is the function. This function has parameter 'x'. Parameters to a function behave like regular bindings, but their initial values are given by the caller of the function, not the code in the function itself.
const square = function(x) {
    return x * x;
}
console.log(square(12));

const power = function (base, exponent) {
    let result = 1;
    // loop 10 times
    for (let i = 0; i < exponent; i++) {
        result *= base;
    };
    return result; // A return statement determines the value the function returns.
}
console.log(power(2, 10)); // Calls the function.

// Binding or variable scope - local and global. Local defined in the function by let and const, global defined outside the function or inside with var.
let x = 10;
if (true) {
    let y = 20;
    var z = 30;
    let q = 10;
    console.log(x + y + z + q);
    // -> 70
}
// y is not visible here because if it is local scope, x & z are global, z with var.
console.log(x + z);
// -> 40

function sum(a, b) {
    return a + b;
}
console.log(sum(2, 4));

// Lexical scoping - Each local scope can see all the local scopes that contain it, and all scopes can see the global scope.
const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += 's';
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, 'can', 'chickpeas');
    ingredient(0.25, 'cup', 'chickpeas');
    ingredient(0.75, 'cup', 'chickpeas');
    ingredient(2, 'tablespoon', 'chickpeas');
}
hummus(1);

// Arrow functions. Arrow comes after the parameters. Provide a simplistic way to write a function.
const example = (base, exponent) => {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
};
console.log(example(2, 4));

// When there is only one parameter, no () needed. If the body is single expression, don't need {}.
const square1 = (x) => {return x * x};
const square2 = x => x * x; // this is the same as above without () & {}

// Parameters can take default values
function power2(base, exponent = 2) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}
console.log(power2(4));
console.log(power2(2, 6));

// Recursion - is is okay for a function to call itself, as long as it doesn't do it so often that it overflows the stack.
function power3(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        return base * power3(base, exponent - 1); // calling itself within its own function - power3
    }
}
console.log(power(2, 3));

/* Consider this puzzle: by starting from the number 1 and repeatedly either adding 5 or multiplying by 3, an infinite set of numbers can be produced. 
How would you write a function that, given a number, tries to find a sequence of such additions and multiplications that produces that number?
*/
function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ||
                    find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, '1');
}
// this operation does not find the shortest sequence, it is satisfied when it finds any sequence at all
console.log(findSolution(24));

// Growing functions - extending the function to account for each parameter
function printFarmInventory(cows, chickens) {
    let cowString = String(cows);
    while (cowString.length < 3) {
        cowString = '0' + cowString;
    }
    console.log(`${cowString} Cows`);
    let chickenString = String(chickens);
    while (chickenString.length < 3) {
        chickenString = '0' + chickenString;
    }
    console.log(`${chickenString} Chickens`);
}
printFarmInventory(7, 11);

// There is another item to the inventory and instead of adding four more lines of code, we can do it this way
function printZeroPaddedWithLabel(number, label) {
    let numberString = String(number);
    while (numberString.length < 3) {
        numberString = '0' + numberString;
    }
    console.log(`${numberString} ${label}`);
}

function printFarmInventory2(cows, chickens, pigs) {
    printZeroPaddedWithLabel(cows, 'Cows');
    printZeroPaddedWithLabel(chickens, 'Chickens');
    printZeroPaddedWithLabel(pigs, 'Pigs');
}
printFarmInventory2(7, 11, 3);

// The name printZeroPaddedWithLabel is a little awkward and conflates three things - printing, zero-padding, and adding a label in a single function. Lifting out the repeating part of the function, we can focus on a single concept.
function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
        string = '0' + string;
    }
    return string;
}

function printFarmInventory3(cows, chickens, pigs) {
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
}
printFarmInventory3(7, 16, 3);