function equilibriumPoint(arr) {    
    const totalSum = arr.reduce((acc, curr) => acc + curr, 0);
    console.log(totalSum);
    
    const prefixSum = new Array(arr.length);
    prefixSum[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + arr[i];
    }
    
    for (let i = 0; i < arr.length; i++) {
        const leftSum = i === 0 ? 0 : prefixSum[i - 1];
        const rightSum = totalSum - prefixSum[i];
        
        if (leftSum === rightSum) {
            return i + 1;
        }
    }
    return -1; 
}

console.log(equilibriumPoint([1, 3, 5, 2, 2]));

