// Describe the concept of closures.How do you create a closure in JavaScript?

// :- A closure gives you access to an outer function’s scope
// from an inner function.

// eg:-
function outerFunction() {
  let outerVariable = "Algorithm Baba";
  function innerFunction() {
    console.log(outerVariable); // Accessing outerVariable from the outer function's scope
  }
   innerFunction(); // Returning the inner function
}
 outerFunction(); // Creating a closure by calling outerFunction
