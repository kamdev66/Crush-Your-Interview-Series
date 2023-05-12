//GUESS THE OUTPUT ??

function foo() {
  let x = (y = 0);
  x++;
  y++;
  return x;
}
console.log(foo(), typeof x, typeof y); //1, "undefined", "number"

// NOTE:-The expression let x = (y = 0) creates a variable x and assigns
//it the value of the assignment expression (y = 0).
// The assignment expression sets the value of the variable y to 0. The
// variable y is declared as a global variable because it is not declared with
// the let or const keywords.The typeof operator applied to x returns "undefined"
//because x is a local variable to the function foo and it is not accessible outside 
//the function. The typeof operator applied to y returns "number" because y was 
//declared as a global variable 
