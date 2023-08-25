//GUESS THE OUTPUT ??

function foo3(a = b, b){return a+b}
console.log(foo3(1,2)) //1+2 = 3
console.log(foo3(undefined,2)) //ReferenceError

// Explanation:-
// The error is caused by the fact that a is defined as a = b, meaning that it takes 
// on the value of b, but b is not defined yet,when foo3 is called with 
// foo3(undefined, 2).


// In JavaScript, parameters are evaluated from left to right, so b would need to 
// be defined before it can be used as the default value for a. 

