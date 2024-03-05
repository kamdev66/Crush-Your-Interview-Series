function medianValues(numArray1) {
  const isEven = numArray1.length % 2 === 0;
  return isEven
    ? numArray1[numArray1.length / 2 - 1]
    : numArray1[Math.floor(numArray1.length / 2)];
}

console.log(medianValues([2, 4, 7]));
console.log(medianValues([2, 4, 7, 6]));
console.log(medianValues([2, 4, 7, 6, 6]));
console.log(medianValues([2, 4, 7, 6, 6, 8]));
