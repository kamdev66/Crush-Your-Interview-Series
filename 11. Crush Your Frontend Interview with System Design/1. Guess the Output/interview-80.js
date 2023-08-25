// GUESS THE OUTPUT ??

const arr1=[10];
const arr2=[20,30,40,50];
const [num, ,...rest]=[...arr1,...arr2];
console.log(...rest);  //30,40,50

// Explanation:-At first,  it is used to spread the elements of arr1 and arr2 
// into a new array, [...arr1,...arr2]. This new array has the elements 
// 10, 20, 30, 40, 50. and then it is used as part of the destructuring pattern.

// num is a variable that will be assigned the first element of the array, which is 10.

// The comma , is used to skip the second element of the array, which is 20.
// ...rest is the rest parameter, which collects all the remaining elements of the array 
// into a new array. In this case, ...rest collects the elements 3, 4, 5 into the array rest.