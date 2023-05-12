//How do I make the first letter of a string uppercase in JavaScript?

//method1:- by using the toUpperCase() method and slice() method
let str = "dsa n dev";
let firstLetter = str[0].toUpperCase();
console.log(firstLetter); //"D"
console.log(str.slice(1));//"sa n dev"
let capitalized = firstLetter + str.slice(1);
console.log(capitalized);//"Dsa n dev"



//method2:-by using the toUpperCase() method and  substr() method
let str1 = "dsa n dev";
let firstLetter1 = str1.substr(0, 1).toUpperCase();
console.log(firstLetter1);  //D
console.log(str1.substr(1));  //"sa n dev"
let capitalized1 = firstLetter1 + str1.substr(1);
console.log(capitalized1);  //"Dsa n dev"
