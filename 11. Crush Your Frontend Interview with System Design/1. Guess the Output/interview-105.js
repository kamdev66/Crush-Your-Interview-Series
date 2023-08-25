TODO: 
var a=10;
if(true){
  var a=20;   //this will affect global scope
}
function simple(){
  var a=30;      //this will not affect the global scope bcoz var has function and global scope
  console.log(a) //30
}
simple();
console.log(a)  //20