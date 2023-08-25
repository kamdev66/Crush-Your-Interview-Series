//Do not use delete to remove entries from objects or arrays

//:- Bcoz The delete keyword is slow compared to other ways of removing elements

// :- Deleting array elements with `delete` leaves gaps in the array
const num=[1,2,3];
delete num[1];
console.log(num); //[1,undefined,3]

//To solve this issue,we can use slice or, rest operator
const nums=[1,2,3,4,5];
console.log(...nums.slice(3)); //4 5
const nums2=[1,...nums.slice(3)] 
console.log(nums2); //[1,4,5]