TODO: 
console.log(num);  //undefined bcoz of hoisting
var num=1000;
console.log(num);  //1000

console.log(num);  
const num=1000;    //will give referenceError - can't access num before initialization
console.log(num);  

console.log(num);  
let num=1000;     //will give referenceError - can't access num before initialization
console.log(num);  

// Note:- What is Hoisting?
// :- Hoisting is a concept in JavaScript where variables and function 
// declarations are moved to the top of their scope.
//  In other words, it allows you to use a variable or a function before it's declared in the code. 
