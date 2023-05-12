TODO:
let a=10;
if(true){
  let a=20;   //this will not affect global scope bcoz let is block scoped
}
function simple(){
  let a=30;      //this will not affect the global scope bcoz let is  block scoped
  console.log(a) //30
}
simple();
console.log(a)  //10