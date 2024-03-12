// Explain the difference between function declaration
// and function expression.

// :- Function declaration and function expression are two
// ways to define functions in JavaScript, and they have some
//  key differences in terms of syntax and behavior.

// Difference:-
// 1. Function Expression cannot be used before initialization
// 2. Function Expression need to be assigned to be used later

// SYNTAX:-
//Function declaration
function channelName(name) {
  return `Welcome to ${name}`;
}

//Function Expression
// Anonymous function expression
const channelName = function (name) {
    return `Welcome to ${name}`;
};

// Named function expression
const channelName = function channelName(name) {
    return `Welcome to ${name}`;
};
