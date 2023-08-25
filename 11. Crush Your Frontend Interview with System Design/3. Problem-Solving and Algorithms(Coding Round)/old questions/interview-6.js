TODO: 
//How do you convert a string to an int?
// In JavaScript, we can convert a string to an integer using the parseInt() function:
let str = "123";
let num = parseInt(str);
console.log(num); // Output: 123

// or,we can also use the Number() function.
let str1 = "123";
let num1 = Number(str1);
console.log(num1); // Output: 123

// Note: If the string can't be converted into a valid number, both parseInt() and Number() will 
// return NaN (Not-a-Number).
// eg:- 
let str2 = "123ab";
let num2 = Number(str2);
console.log(num2); // Output: NaN