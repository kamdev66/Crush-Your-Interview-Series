
//What is the output of the following code snippet?

function compute() {
  const condition = true;
  if (condition) {
    let a = false;
    let b = false;
  }
  return {
    a: a || null,
    b: b || null
  }
}
var r = compute();
// What do you think would be the output?
console.log(r);