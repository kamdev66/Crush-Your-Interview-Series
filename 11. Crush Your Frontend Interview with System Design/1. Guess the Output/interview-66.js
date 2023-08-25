// What does "use strict" do in JavaScript, and what is the reasoning behind it?

// :-When you use "use strict" at the top of your JavaScript code, or inside a specific 
// function, it tells the JavaScript engine to use stricter parsing and error handling rules. 
// :- The reason behind "use strict" is to help you write safer and more maintainable
// code. It makes it easier to catch common programming errors .


x = 10; 
console.log(x); //10
// Explanation:-Without strict mode, the code will run, and the variable x 
// would be automatically declared as a global variable.


"use strict"; 
x = 10; // This line would throw an error because x is not declared
console.log(x);
//Explanation:-the code attempts to assign a value of 10 to the variable x, which 
// has not been declared.Since strict mode is enabled, this will result in a 
// ReferenceError, and "x is not defined" will be logged to the console.

