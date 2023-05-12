// GUESS THE OUTPUT??

console.log('A');
async function func(){
  console.log('B');
  let res=await Promise.resolve('C');
  console.log(res);
}
func();
console.log('D');


