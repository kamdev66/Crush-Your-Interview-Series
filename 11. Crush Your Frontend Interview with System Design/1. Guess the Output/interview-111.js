const doSomething = (a, b) => {
    return [a + b, a - b, a * b, a / b]
}
let [...rest] = doSomething(4, 2)

console.log(rest * rest)