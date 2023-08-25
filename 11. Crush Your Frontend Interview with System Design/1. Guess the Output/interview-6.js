//Reverse an Array

//method1:- by reverse() method
var a=[14,45,78,12,48];
a.reverse();
console.log(a); //[ 48, 12, 78, 45, 14 ]

//method2:- by using two pointers approach
function Reverse(originalArray){
    let leftIndex=0;
    let rightIndex=originalArray.length-1;

    while(leftIndex<rightIndex){
        let temp=originalArray[leftIndex];
        originalArray[leftIndex]=originalArray[rightIndex];
        originalArray[rightIndex]=temp;
        leftIndex++;
        rightIndex--;
    }
}
let myArray=[10,20,47,58,98];
Reverse(myArray);
console.log(myArray); //[ 98, 58, 47, 20, 10 ]


// method3
let numArr=[14,78,45,98];
let reversedArr=[];
for(let i=numArr.length-1;i>=0;i--){
    reversedArr.push(numArr[i]);
}
console.log(reversedArr); //[ 98, 45, 78, 14 ]

//method4
var newArray=[];
var origArr=[4,87,96,75];
for(var i=0;i<origArr.length;i++){
    newArray[i]=origArr[origArr.length-1-i]
}
console.log(newArray);  //[ 75, 96, 87, 4 ]
