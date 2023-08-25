// TODO: INTERVIEW-6:
//Reverse an Array

//Method 1:-
var a = [1, 2, 3, 4, 5];
a.reverse();
console.log(a); //[5, 4, 3, 2, 1]

//method 2:-
function Reverse(originalArray) {
  let leftIndex = 0;
  let rightIndex = originalArray.length - 1;

  while (leftIndex < rightIndex) {
    let temp = originalArray[leftIndex];
    originalArray[leftIndex] = originalArray[rightIndex];
    originalArray[rightIndex] = temp;
    leftIndex++;
    rightIndex--;
  }
}
let myArray = [1, 2, 3, 4, 5];
Reverse(myArray);
console.log(myArray); //[5, 4, 3, 2, 1]

//Method 3:-
let num = [1, 2, 3, 5];
let reversedNum = [];
for (let i = num.length - 1; i >= 0; i--) {
  reversedNum.push(num[i]);
}
console.log(reversedNum); //[5, 3, 2, 1]

//Method 4:-
var newArray = [];
var arr = [1, 2, 5];
for (var i = 0; i < arr.length; i++) {
  newArray[i] = arr[arr.length - 1 - i];
}
console.log(newArray); //[5, 2, 1]