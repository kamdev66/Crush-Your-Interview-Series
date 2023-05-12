// GUESS THE OUTPUT ??
console.log(false===false);  //true
console.log("hi"==="hi");    //true
console.log([1,2,3]===[1,2,3]);   //false
console.log([1,2,3]==[1,2,3]);   //false


//NOTE:- In the third console.log statement, the strict equality operator === compares two arrays [1,2,3] and [1,2,3], which are different objects in memory even though they have the same values, so the comparison returns false.