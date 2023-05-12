//Reverse a words of sentence in javascript?
// :--
const originalSentence = "Hey Welcome Back";
const reversedSentence = originalSentence.split(" ").reverse().join(" ");
console.log(reversedSentence); // "Back Welcome Hey" 

// Explanation:- In the example, the split method is used to split the sentence into an 
// array of words based on the space character. 
// Then reverse method is used to reverse the order of the elements in the array.
// then join method is used to join the elements of the array back into a string, 
// using the space character as the separator. 
