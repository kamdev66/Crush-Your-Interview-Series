// GUESS THE OUTPUT ??

let zero = new Number(0);
if (zero) {
  console.log("If");
} else {
  console.log("Else");
} 
/* output:- "If" */

//NOTE:- In JavaScript, objects have a truthy value, even if their properties have a 
//falsy value.Here,'zero' is an object with the value 0, which is truthy. 

let zero1 = 0;
if (zero1) {
  console.log("If");
} else {
  console.log("Else");
} 
/* output:- "Else" , bcoz here, zero is not an object*/

if (0) {
  console.log("If");
} else {
  console.log("Else");
} 
/* output:- "Else" , bcoz here, 0 belongs falsy values */