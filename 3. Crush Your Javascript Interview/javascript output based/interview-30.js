//how many ways to define a function in js

//1. Function Declaration:- Function declaration: A function declared using the function keyword, followed by the function name, a list of parameters in parentheses, and the function body in curly braces.
function add(a, b) {
  return a + b;
}
console.log(add(20, 30)); //50

//2. Function expression: A function expression can be assigned to a variable and has the same structure as a function declaration.
const sub = function (a, b) {
  return a - b;
};
console.log(sub(50, 40)); //10

//3. Arrow function: Arrow function is a shorthand for anonymous function expressions.
//anonymous function:- function which has no name
const multiply = (a, b) => {
  return a * b;
};
console.log(multiply(4, 2)); //8

//4. Constructor function: a constructor function is a function that is used to create objects using the new operator. The new operator creates a new object and sets the this keyword within the constructor function to refer to the newly created object.
function Channel(channelname, subs) {
  this.channelName = channelname;
  this.subscribers = subs;
}
const youtubeChannel = new Channel("DSAnDEV", 1000);
console.log(youtubeChannel.channelName); // "DSAnDEV"
console.log(youtubeChannel.subscribers); // 1000

//5. Immediately Invoked Function Expression (IIFE):- An IIFE is defined using an anonymous function expression, immediately followed by a pair of parentheses to invoke the function.
(function () {
  let playlist = "Crush Your Javascript Interview";
  console.log(playlist); //"Crush Your Javascript Interview"
})();
