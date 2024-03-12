function maxSubArray(nums) {
    return divideAndConquer(nums, 0, nums.length - 1);
}

function divideAndConquer(nums, left, right) {
    if (left === right) {
        return nums[left];
    }

    const mid = Math.floor((left + right) / 2);
    const leftMax = divideAndConquer(nums, left, mid);
    const rightMax = divideAndConquer(nums, mid + 1, right);
    const crossingMax = maxCrossingSum(nums, left, mid, right);

    return Math.max(leftMax, rightMax, crossingMax);
}

function maxCrossingSum(nums, left, mid, right) {
    let leftSum = -Infinity;
    let sum = 0;

    for (let i = mid; i >= left; i--) {
        sum += nums[i];
        leftSum = Math.max(leftSum, sum);
    }

    let rightSum = -Infinity;
    sum = 0;

    for (let i = mid + 1; i <= right; i++) {
        sum += nums[i];
        rightSum = Math.max(rightSum, sum);
    }

    return leftSum + rightSum;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); 