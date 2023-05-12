// GUESS THE OUTPUT ??

let obj1={};
let obj2={};
console.log(obj1===obj2); //false
console.log(obj1==obj2); //false
obj2=obj1;
console.log(obj1===obj2); //true

// NOTE:- In the first console.log statement, the equality operator == compares two objects, obj1 and obj2. Since objects are compared by reference, not by value, obj1 and obj2 are two different objects in memory and the comparison returns false.
// In the second console.log statement, the obj2 is assigned the value of obj1, so both obj1 and obj2 now reference the same object in memory. Thus, the strict equality operator === now returns true when comparing obj1 and obj2.




