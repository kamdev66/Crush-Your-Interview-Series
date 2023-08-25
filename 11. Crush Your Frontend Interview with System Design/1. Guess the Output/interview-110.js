let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function checkNum(num) {
    return num > 4;
}
let newArray = [array.filter(checkNum).map((item, index) => {
    return item - array[index]
}).reduce((acc, curr) => {
    return acc + curr
})]

console.log(newArray)