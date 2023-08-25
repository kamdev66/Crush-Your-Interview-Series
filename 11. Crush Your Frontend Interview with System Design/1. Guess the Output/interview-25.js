// GUESS THE OUTPUT??

console.log(!+[]+!![]+!![]+!![]);  //4

// NOTE:-The expression !+[] evaluates to true because +[] is equal to 0, and !0 is 
// equal to true. The other parts of the expression, !![], evaluate to
//  true because an array is an object in JavaScript and all objects are truthy. 