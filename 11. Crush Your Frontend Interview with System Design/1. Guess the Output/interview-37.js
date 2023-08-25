// GUESS THE OUTPUT ??

if (Math.random() > 0.5) {
  const x = 1;
} else {
  const x = 2;
}
console.log(x); //ReferenceError

// NOTE:-The code will throw a ReferenceError because the const declaration x is inside the blocks of the if-else statement, so x is only declared and defined within the scope of the block it is declared in. Attempting to access x outside of its declared scope, as in the console.log statement, will result in a ReferenceError.
