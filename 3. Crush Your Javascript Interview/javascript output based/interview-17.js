// GUESS THE OUTPUT ??

const array=[];
for(var i=0;i<10;i++){
  array[i]=()=>{
    return i;
  }
}
console.log(array[0]()); //10
console.log(array[5]());  //10
console.log(array[9]());  //10




