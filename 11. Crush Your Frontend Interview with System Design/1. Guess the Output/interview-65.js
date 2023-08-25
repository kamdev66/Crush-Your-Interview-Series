//Question:-Remove a specific item from an array in JavaScript?

//method1:-we can use the filter() method to remove a specific item from an array 
//in JavaScript. The filter() method creates a new array with all elements that 
//pass the test implemented by the provided function.

let removeItem = 10;
let array = [1, 2, 10, 4, 5, 10,10];
let updatedArray = array.filter(item => item !== removeItem);
console.log(updatedArray); //[ 1, 2, 4, 5 ]

// Explanation:-In this example, the filter() method loops through each item in the 
// array and returns a new array containing all the items that are not equal
//  to removeItem (10 in this case).


//method2:-we can use the indexOf() method to find the index of the element in 
// the array that we want to remove, and then use the splice() method to remove 
// that element from the array.
let rollNo = [10, 20, 30, 40, 50];
let removeRollNo = 30;
let index = rollNo.indexOf(removeRollNo);
if (index > -1) {   //or index!== -1
    rollNo.splice(index, 1);
}
console.log(rollNo); // Output: [10, 20, 40, 50]

//Explanation:-In this example, the indexOf() method is used to find the index of
//the removeRollNo in the rollNo array. If the index is not equal to -1 or greater than -1
//(which means the element is found in the array), the splice() method is used to  
//remove that element from the array by specifying the index as the first argument 
//and 1 as the second argument (which means one element will be removed).


//method3:- we can also use only splice method
// let token = [10, 20, 30, 40, 50];
// let removeToken = 40;
// for (var index=0; index< token.length; index++) {
//     if (token[index] === removeToken) {
//       token.splice(index, 1);
//     }
//  }
// console.log(token); //[10, 20, 30, 50];

