//How to check whether a string contains a substring in JavaScript?

//method1:- Using the includes() method: This method returns true if the substring is 
// found in the string, and false otherwise.
let str = "DSA n Dev";
console.log(str.includes("DSA")); // true
console.log(str.includes("Interview")); // false


//method2:- Using the indexOf() method: This method returns the index of the first
// occurrence of the substring in the string, or -1 if the substring is not found.
let str1 = "DSA n DEV";
console.log(str1.indexOf("DEV") !== -1); // true
console.log(str1.indexOf("Javascript") !== -1); // false

//method3:- Using regular expression:-
let str2 = "DSA n Dev";
console.log(/n/.test(str2)); // true
console.log(/react/.test(str2)); // false


// explanation:- The first console.log statement uses the test method of a regular 
// expression to test whether the substring "n" is present in str2. The regular
// expression /n/ is a pattern that matches the characters "n" anywhere 
// within the string being tested. The test method returns true if the pattern 
// matches any part of the string, and false otherwise. 