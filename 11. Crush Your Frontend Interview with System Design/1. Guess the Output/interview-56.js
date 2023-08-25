//Guess the output ??

// let num = 100;
// let big = 200n;
// console.log(num + big); //error

// Explanation:-
// because you cannot add a JavaScript number (num) to a bigint (big) in JavaScript. 
// To add two bigints, both values must be bigints. To add a number and a bigint, 
// you need to convert the number to a bigint first.

let num = 100;
let big = 200n;
console.log(BigInt(num) + big); //300n