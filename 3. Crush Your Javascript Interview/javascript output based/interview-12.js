//what is nullish coalescing?

//:-nullish coalescing operator(??) provides a more refined way to handle default values 
// than the logical OR operator (||) when dealing with null or undefined values.

// Important Note:- If num1 is null or undefined, then the value of num2 is assigned to x. 
let num1;
let num2=10;
let x=num1 ?? num2;
console.log(x);//10

//Important Note:- If num1 has any other value (even if it's falsy, like 0 or an 
// empty string), x will be assigned the value of num2.
let num3=[];
let num4=10;
let ans=num3??num4;
console.log(ans);  //[]
