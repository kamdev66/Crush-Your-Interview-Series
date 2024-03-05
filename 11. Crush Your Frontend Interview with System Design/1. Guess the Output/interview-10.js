
//method1:-
const arr=[10,20,30];
arr.length=0;
console.log(arr);

//method2:-
let arr2=[41,52,36,47];
arr2=[];
console.log(arr2); 

//method3:- by using splice

// NOTE:- splice() method in JavaScript is used to modify an array by adding or 
// removing elements. It can be used to add new elements to an array at a specific 
// index, or to remove elements from the array.

// Syntax:- 
// array.splice(startIndex, deleteCount, elementsToAdd1, elementsToAdd2, ...)
let arr3=[10,20,30,40,50];
arr3.splice(0,arr3.length);
console.log(arr3);

