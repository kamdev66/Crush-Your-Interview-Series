//GUESS THE OUTPUT ??

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1); //3 3 3
}

//NOTE:-- In this example, i is declared using the var keyword, which 
// has function scope.That means that the variable i is accessible within 
// the entire function, not just within the loop. By the time the setTimeout 
// function is executed, the loop has already completed and the value of i is 3. 

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1); //0 1 2
}

//NOTE:--
// In this example, i is declared using the let keyword, which has block 
// scope. That means that the variable i is only accessible within the block in 
// which it is declared, in this case the loop. This allows for a separate 
// instance of i to be created for each iteration of the loop, so that the value 
// of i is correctly captured by the setTimeout function.