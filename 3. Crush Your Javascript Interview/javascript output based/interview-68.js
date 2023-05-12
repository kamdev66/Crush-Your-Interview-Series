//How do I remove a property from a JavaScript object?

//method1:- by using delete operator
let youtube = { channel: "DSA n Dev", video: 60 };
delete youtube.video;
console.log(youtube); // { channel: "DSA n Dev" }

//Important Note:- delete only works on object properties and does not work on 
// variables or array elements. 


//method2:- by using rest operator
let student = { name: "Dev", roll: 30, city: "Bangalore" };
let { roll, ...rest } = student;
console.log(rest); // {city: "Bangalore",name: "Dev"}

// Explanation:-The rest operator (...rest) collects all of the remaining properties 
// from student object into a new object, which is then stored in the rest variable.
// The original student object is not modified.As a result, the rest object will contain 
// all properties of student except the roll property.