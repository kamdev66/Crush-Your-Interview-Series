//method 1:-
function addTwoDigits(n) {
  const tensDigit = Math.floor(n / 10);
  console.log(tensDigit);
  const onesDigit = n % 10;
  console.log(onesDigit);

  const sum=tensDigit+onesDigit
return sum;

}

console.log(addTwoDigits(29));

//method 2 :-
function addTwoDigits2(num) {
    const numArr=num.toString().split('')
    console.log(numArr);
    return parseInt(numArr[0])+parseInt(numArr[1]);
}
console.log(addTwoDigits2(33));
