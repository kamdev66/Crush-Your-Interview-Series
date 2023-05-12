// TODO: Remove duplicates from array using SET
// :-
const numbers=[1,2,3,4,5,2,4,6,7,2,3,3]
const colors=["red","pink","yellow","red"]
const uniqueNumbers=[...new Set(numbers)];
console.log(uniqueNumbers);  //[1, 2, 3, 4, 5, 6, 7]
const uniqueColors=[...new Set(colors)];
console.log(uniqueColors); //["red", "pink", "yellow"]

// NOTE:- The spread syntax(...) is used to include all the items of the Set to a new array.
