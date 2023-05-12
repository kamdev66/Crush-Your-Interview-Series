TODO:
const a = 10;
if (true) {
  const a = 20; //this will not affect global scope bcoz let is block scoped
}
function simple() {
  const a = 30; //this will not affect the global scope bcoz let is  block scoped
  console.log(a); //30
}
simple();
console.log(a); //10
// const can't be re-assigned or re-declared.
// Note:- const should always have initial value 
// eg:- const a; //it will give error