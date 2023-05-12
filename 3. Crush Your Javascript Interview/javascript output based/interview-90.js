//Flatten an array

const nestedArray=[
    [10,20],
    [30,40,50],
    [60,70,80,90]
]
console.log(nestedArray); //[[10, 20], [30, 40, 50], [60, 70, 80, 90]]
const flatArray=nestedArray.flat();
console.log(flatArray);//[10, 20, 30, 40, 50, 60, 70, 80, 90]

//Explanation:-'flat' method  allows us to flatten a nested array into a 
// single-level array.