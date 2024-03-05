function equilibriumPoint(arr) {
  const totalSum = arr.reduce((acc, curr) => acc + curr, 0);
  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    const rightSum = totalSum - (arr[i] + leftSum);

    if (leftSum === rightSum) {
      return i + 1;
    }

    
    leftSum += arr[i];
  }

  return -1;
}

console.log(equilibriumPoint([1, 3, 5, 2, 2]));
