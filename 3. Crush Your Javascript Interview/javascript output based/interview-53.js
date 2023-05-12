//GUESS THE OUTPUT ??

function demo(a,b,a){return a+b}
console.log(demo(10,20,30)) // 50

// Explanation:- 
// In JavaScript, function parameters follow the principle of "last value wins." 
// That means that if multiple parameters have the same name, only the value of the 
// last parameter with that name will be used.

// In the code function demo(a,b,a){return a+b}, the first a is overwritten by the 
// last a. So, when the function is called with demo(10,20,30), the value of a is 30
// and the value of b is 20.