// GUESS THE OUTPUT ??

console.log(1 +  +"2" + "2"); // 32
// NOTE:- "2" is converted to a number using the unary plus operator +, which results in the number 2.
// 1 + 2 is 3.
// 3 + "2" results in the string "32".
// So, the expression evaluates to "32".

console.log(1 +  -"1" + "2"); // 02
// NOTE:-  -"1" is converted to a number using the unary minus operator -, which results in the number -1.
// 1 + -1 is 0.
// 0 + "2" results in the string "02".

console.log(+"1" +  "1" + "2"); // 112
// NOTE:- +"1" is converted to a number using the unary plus operator +, which results in the number 1.
// 1 + "1" results in the string "11".
// "11" + "2" results in the string "112".

console.log( "A" - "B" + "2"); //NaN2
// NOTE:- "A" and "B" are both strings, so they cannot be subtracted from each other. The result of "A" - "B" is NaN (Not a Number).
// NaN + "2" results in the string "NaN2".

console.log( "A" - "B" + 2); //ans: NaN 
// NOTE:-"A" and "B" are both strings, so they cannot be subtracted from each other. The result of "A" - "B" is NaN (Not a Number).
// NaN + 2 is still NaN.

console.log("20,11" == [[[[20]],11]]); // true
// NOTE:-The equality operator == performs type coercion, meaning it tries to convert the operands to the same type before comparing 
// their values. In this case, "20,11" is a string and [[[[20]],11]] is an array.


console.log("[object Object]" == {name: "DSAnDEV"});// true
//NOTE:- The equality operator == performs type coercion, meaning it tries to convert the operands to the same 
// type before comparing their values. 