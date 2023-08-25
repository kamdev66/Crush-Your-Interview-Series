// GUESS THE OUTPUT ??

function naughty(c) {
  c++;
  console.log(c); //11
}
const c = 10;
naughty(c);
console.log(c); //10

// NOTE:-the variable c is passed by value, so a new variable with the same name is created inside the function scope with the value of 10. The line c++ increments this local variable to 11. 
