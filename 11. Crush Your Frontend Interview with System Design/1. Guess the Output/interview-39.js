// GUESS THE OUTPUT ??

let text='dsandev';
text[1]='z';
console.log(text);  //dsandev

// NOTE:- In JavaScript, strings are immutable, meaning that their values cannot be changed once they are created. When you attempt to change the value of a character in a string using the square bracket notation, as in text[1] = 'z', the operation will not modify the original string.

// In this case, the value of text remains "dsandev", and the console.log statement outputs the unchanged string. If you want to change the value of the string, you can create a new string using concatenation or string manipulation methods.