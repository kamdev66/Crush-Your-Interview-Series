// GUESS THE OUTPUT ??

const array=[];
for(var i=0;i<10;i++){
  array[i]=()=>{
    console.log(i);
    return i;
  }
}
console.log(array[0]()); 
console.log(array[5]());  
console.log(array[9]()); 




