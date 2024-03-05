//method 1:-
function addTwoDigits(num: any): number {
    const tensDigit = Math.floor(num / 10);
    console.log(tensDigit);
    const onesDigit = num % 10;
    console.log(onesDigit);
  
    const sum=tensDigit+onesDigit
  return sum;
}

console.log(addTwoDigits(99));

//method 2 :-
function addTwoDigits2(num: any): number {
    const numArr=num.toString().split('')
    console.log(numArr);
    return parseInt(numArr[0])+parseInt(numArr[1]);
}
console.log(addTwoDigits2(29));
