//Find Min and Max element in javascript

//method1:-
// console.log(Math.min.apply(null,[10,87,14,45])); //10
// console.log(Math.max.apply(null,[10,87,14,45])); //87

//method2:-
console.log(Math.min(4,5,6)); //4
console.log(Math.max(4,5,6)); //6
var arr=[14,10,12,35];
console.log(Math.min(arr)); //NaN
console.log(Math.min(...arr)); //10
console.log(Math.max(...arr)); //35

//method3:-
var arr2=[10,2,0,3,4,7].sort((a,b)=>{return a-b});  //[0,2,3,4,7,10]
console.log(arr2[0]); //0
console.log(arr2[arr2.length-1]);  //10

//method4:-
const array=[11,25,47,87,1000];
let minVal=array[0];
let maxVal=array[0];
for(var i=0;i<array.length;i++){
    if(array[i]<minVal){
        minVal=array[i];
    }
    if(array[i]>maxVal){
        maxVal=array[i];
    }
}
console.log(minVal); //11
console.log(maxVal); //1000





