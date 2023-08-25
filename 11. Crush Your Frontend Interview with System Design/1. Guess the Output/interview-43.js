//Explain Type Coercion and rules:-
//1. It refers to the process of automatic conversion of
//   values from one data type to another.

//:-This includes conversion from 
// Number to String, String to Number, Boolean to Number


//1. Number to String:- When a number is concatenated with a string, the number will be converted to a string. 
console.log(5+'5'); //55

//2.  String to Number:- When an operation like subtraction (-),
// multiplication (*), division (/) or modulus (%) is performed,
// all the values that are not number are converted into the number data type,
console.log(10-'5')  //5


//3. Boolean to Number:- When a Boolean is added to a Number, the Boolean value is
// converted to a number
console.log(true+5) //6
console.log(5-true) //4
console.log(5*true) //5
console.log(5/true) //5
console.log(5%true) //0


//4. Equality Operator:- When comparing values of different data types, JavaScript will attempt to convert them to a common data type before performing the comparison. 
console.log(10=='10'); //true

//5. Coercion in logical operations:- When evaluating logical expressions, JavaScript will attempt to convert values to boolean values.
if(0){
    //this block of code will not be executed
}








