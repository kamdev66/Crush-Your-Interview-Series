// TODO: Use includes to check for multiple criteria
// :-
const rgbColors=["red","green","blue"];
const isRGB=(color)=>{
return rgbColors.includes(color);
}
console.log(isRGB("red")) //true
console.log(isRGB("yellow")) //false