// Explain different types of scopes in javascipt?

// 1. Global Scope:-

// A. Global scope refers to variables or functions that are declared
// outside of any function.
// B. Variables/functions in the global scope can be accessed from anywhere in your JavaScript code.
// C. They are accessible in all functions and blocks.

// eg:-
var globalVariable = "I am a global variable";
function globalFunction() {
  console.log("I am a global function");
}
console.log(globalVariable);
globalFunction();

//2. Local Scope (Function Scope):

// A. Local scope refers to variables or functions that are
// declared inside a function.
// B. Variables/functions in the local scope are only accessible
// within that function.
// C. They cannot be accessed from outside the function.
// eg:-
function outerFunction() {
  var localVariable = "I am a local variable";
  function innerFunction() {
    console.log(localVariable); 
  }
  innerFunction();
}
outerFunction();


// 3. Block Scope (ES6 and later):

// A. Block scope refers to variables declared using let and const 
// within a block (enclosed within curly braces {}).
// B. Block-scoped variables are only accessible within the block 
// in which they are defined.
// C. This type of scope is introduced in ECMAScript 6 (ES6) and
//  later versions.
// eg:-
if (true) {
    let blockScopedVariable = 'Algorithm baba';
    console.log(blockScopedVariable);
  }
console.log(blockScopedVariable);


// 4. Lexical Scope (Static Scope):

// A. Lexical scope means that the visibility of variables is 
// determined by their location within the code.
// B. Variables are resolved based on where they are defined in 
// the code, not where they are called.
// C. JavaScript uses lexical scoping, meaning variables are 
// resolved based on their position in the code's hierarchy.
// eg:-
var outsideVariable = 'I am outside';

function myFunction() {
  var insideVariable = 'I am inside';
  console.log(insideVariable); 
  console.log(outsideVariable);
}
myFunction();