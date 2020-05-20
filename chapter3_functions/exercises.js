console.log('chapter 3 exercises');

// Minimum - Consider Math.min. Write a function that takes two arguments and returns their minimum.
const mathMin = (a, b) => Math.min(a, b);
console.log(mathMin(2, 4));

/*
Recursion - Define a recursive function isEven corresponding to the following description.
- Zero is even, one is odd
- For any other number N, its eveness is the same as N - 2
- The function should accept a single parameter (a positive, whole number) and return a Boolean.
- Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
*/
function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n - 2);
  }

  console.log(isEven(50));
  console.log(isEven(75));
  console.log(isEven(-1));
  
/* 
Bean counting
1. Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase 'B' characters there are in a string.
2. Write a function called countChar that behaves like countBs, except takes a second argument that indicates the character that is to be counted (rather than counting uppercase 'B' characters.) Rewrite countBs to make use of this new function.
*/
function countChar(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] == ch) { // i represents letter parameter entered
        counted += 1;
      }
    }
    return counted;
  }
  
  function countBs(string) {
    return countChar(string, "B");
  }

  console.log(countBs('BBB'));
  console.log(countChar('kakkerlak', 'k'));