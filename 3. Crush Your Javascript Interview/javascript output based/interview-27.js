// GUESS THE OUTPUT??

console.log(1<2<3);  //true
console.log(3>2>1);  //false
console.log(3>2>=1);  //true

// NOTE:-In the first expression, 1 < 2 < 3, the comparison 1 < 2 evaluates to true, 
// and then true < 3 is evaluated, which is also true.

// In the second expression, 3 > 2 > 1, the comparison 3 > 2 evaluates to true, but 
// then true > 1 is evaluated, which is type-coerced to 1 > 1, which is false. 