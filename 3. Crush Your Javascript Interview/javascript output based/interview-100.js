TODO:
let a=10;
let b=a;
// Note:- when a primitive value assigned to another variable,it copies the actual value(here it is 10)
// into 'b' variable ie. New memory will be created for 'b'

let a1={a1:10};
let b1=a1;
// Note:- when a non-primitive value assigned to another variable,it copies the 'reference' instead of value
// ie. both 'a' & 'b' are pointing to same memory location.