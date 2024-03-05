//www.geeksforgeeks.org/problems/equilibrium-point-1587115620/1

function equilibriumPoint(arr) {
  for (let i = 0; i < arr.length; i++) {
    let leftSum = 0;
    let rightSum = 0;

    for (let j = 0; j < i; j++) {
      leftSum += arr[j];
    }
    
    for (let j = i + 1; j < arr.length; j++) {
      rightSum += arr[j];
    }

    if (leftSum === rightSum) {
      return i + 1;
    }
  }

  return -1;
}

console.log(equilibriumPoint([1, 3, 5, 2, 2]));

