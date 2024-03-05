// How does the setinterval function work?

// :- setInterval function in JavaScript is used to repeatedly
//  execute a function or code snippet at a specified interval.
//  It allows you to create intervals or timers that repeatedly
//  call a function or execute code at a set time interval.

// Syntax:- setInterval(function, delay, param1, param2, ...);

function printMessage() {
  console.log("Hello, world!");
}
const intervalId = setInterval(printMessage, 1000);

// After 5 seconds (5000 milliseconds), the repetitive execution is stopped using clearInterval.
setTimeout(() => {
  clearInterval(intervalId);
}, 6000);
