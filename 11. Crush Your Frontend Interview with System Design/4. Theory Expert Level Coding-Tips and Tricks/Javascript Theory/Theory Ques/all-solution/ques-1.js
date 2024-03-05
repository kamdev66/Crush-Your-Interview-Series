// How does the setTimeout function work?

// :- setTimeout function in JavaScript is used to schedule a
// task (usually a function) to run after a specified amount
// of time has elapsed.

// It allows you to execute code asynchronously after a
// certain delay.

// Syntax:-
// setTimeout(function, delay, param1, param2, ...);

// eg:-
function greet() {
  console.log("Algorithm Baba");
}
setTimeout(greet, 2000);

// eg2:-
function greet2(firstName, lastName) {
  console.log(`Welcome Back to, ${firstName}! ${lastName}`);
}
const firstName = "Algorithm";
const lastName = "Baba";
setTimeout(greet2, 2000, firstName, lastName);
