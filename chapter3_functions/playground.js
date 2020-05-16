console.log('Ch3 playground');

/* Functions are the "bread and butter" of JavaScript programming. They provide a way to:
1. Structure larger programs.
2. Reduce repetition.
3. Associate names with subprograms.
4. Isolate subprograms from one another.
5. Define new vocabulary.
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
    console.log(x + y + z);
    // -> 60
}
// y is not visible here because if it is local scope, x & z are global, z with var.
console.log(x + z);
// -> 40