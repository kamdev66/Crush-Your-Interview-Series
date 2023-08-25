let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function checkNum(num) {
    return num >= 4;
}

let newArray1 = [array.map((item) => {
    return item
})].filter(checkNum)

let newArray2 = array.filter(checkNum).map((item) => {
    return item
})

console.log(newArray1)
console.log(newArray2)
