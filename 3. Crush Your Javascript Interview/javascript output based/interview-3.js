//How do you convert a string to an int?
// In JavaScript, we can convert a string to an integer using the parseInt() function:

let str='123';
let num=parseInt(str);
console.log(num); //123

// or,we can use Number() function
let str1='1234';
let num1=Number(str1);
console.log(num1); //123

// Note:- if the string can't be converted into a  valid number,both will return NaN