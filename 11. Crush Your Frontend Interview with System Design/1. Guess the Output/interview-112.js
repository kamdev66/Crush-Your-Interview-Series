const doSomething = (a, b) => {
    return [a + b, a - b, a * b, a / b]
}
let someVariable = 5;
let [...rest] = doSomething(4, 2)

someVariable = rest.reduce((acc, total) => {
  return 0 + total;
});

console.log(someVariable)