// GUESS THE OUTPUT ??

let a=10;
let b=30;
[b,a]=[a,b];
console.log(a,b);  //30, 10

// NOTE:-The line [b,a]=[a,b] uses destructuring assignment to swap the values of a and b. The right-hand side of the assignment [a,b] creates an array with the values of a and b, which are then destructured and assigned to b and a, respectively.