x = 1;
function func() {
  this.x = 2;
  return x;
}
let a = new func();
console.log(a.x);