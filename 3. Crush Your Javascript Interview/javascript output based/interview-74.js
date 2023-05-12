//How do I check if an array includes a value in JavaScript?

//method1:- by using includes() method
let rollNo = [1, 2, 3, 4, 5];
let searchRoll = 3;
let result = rollNo.includes(searchRoll);
console.log(result); //true

//Explanation:- Array.includes() method returns 'true' if the specified element is
// found in the array, and false .


//method2:-by using indexOf() method
let token = [1, 2, 3, 4, 5];
let searchToken = 3;
let result1 = (token.indexOf(searchToken) !== -1);
console.log(result1); //true

//Explanation:- indexOf() method returns the index of the first occurrence 
// of the specified element in the array, or -1 if it's not found.