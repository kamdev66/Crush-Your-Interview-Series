// TODO: INTERVIEW-5
// method1:-
console.log(Math.min(1,3,5)) // 1
var array=[1,3,5]
console.log(Math.min(array)) //NaN
console.log(Math.min(...array)) //1

// method2:-
console.log(Math.min.apply(null,[10,35,54])) //10 

// method3:-
const arr1 = [11,30,53,78,98,56,47,41];
let minVal = arr1[0]; let maxVal = arr1[0];
for(var i = 1; i < arr1.length; i++){
    if(arr1[i] < minVal){ //3<1 //53<0
        minVal = arr1[i];
    }
    if(arr1[i] > maxVal){ //3>1 //53>0
        maxVal = arr1[i]; //3 //53
     }
}
console.log(minVal); //11
console.log(maxVal);  //98


// method4:-
var arr2 = [ 30,47,54,23,45,78,78,98 ].sort((a,b)=> { return a - b });
    mini = arr2[0],  // min
    maxi = arr2[arr2.length-1];
console.log(mini, maxi);   //23 98

// method5:-
let arr3 = [11, 22, 73, 44, 83, 20, 0];
let maxNum = arr3.reduce((prev, current) => {
  return Math.max(prev, current)
});
let minNum = arr3.reduce((prev, current) => {
  return Math.min(prev, current)
});
console.log(minNum); //0
console.log(maxNum);  //83