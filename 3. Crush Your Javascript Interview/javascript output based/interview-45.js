// GUESS THE OUTPUT ??

function func() {
  let a = (b = 0);
  a++;
  return a;
}
func();
typeof b; // => number
typeof a; // => undefined
console.log(a); //error: ReferenceError: a is not defined


// NOTE:- let is a block-scoped variable.it seems that a and bare declared using let in let a = b = 0, the reality is variable b is declared as a global variable and assigned to a window object. 
// it is similar as:-
function func() {
    window.b = 0
    let a = b;
    a++;
    return a;
  }