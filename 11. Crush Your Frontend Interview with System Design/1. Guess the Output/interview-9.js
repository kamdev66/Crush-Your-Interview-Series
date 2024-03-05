//Note:- When a primitive value assigned to another variable,it copies the actual value.

// In JavaScript, there are two types of values: primitive values and non-primitive values.

// Primitive values are the basic building blocks of the language and include undefined, null, 
// boolean, number, bigint, and string. Primitive values are immutable, meaning that once they're 
// created, their value cannot be changed.

// Non-primitive values are objects, arrays, and functions. These values are mutable, meaning that
// their properties and elements can be changed after they're created.
const num=25;
const num2=num;
console.log(num);
console.log(num2);

//here,new memory will be created for num2 and then actual value will be copied into num2.


//Note:- When a non-primitive value assigned to another variable,it copies the 'reference' instead of actual value.
const myChannel={name:'Algorithm Baba',video:50}
const myNewChannel=myChannel
console.log(myChannel);
console.log(myNewChannel);
//here,both myChannel and myNewChannel referring to same memory location.both are pointing to same value.