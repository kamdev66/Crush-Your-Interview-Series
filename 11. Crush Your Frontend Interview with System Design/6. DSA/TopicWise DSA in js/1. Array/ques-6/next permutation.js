// QUESTION:Next Permutation

function nextPermutation(nums) {
  let k = -1;
  let l = -1;

  // Step 1: Find the largest index k such that nums[k] < nums[k + 1]
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) {
      k = i;
    }
  }

  // If no such index exists, reverse the entire array and return
  if (k === -1) {
    nums.reverse();
    return;
  }

  // Step 2: Find the largest index l greater than k such that nums[k] < nums[l]
  for (let i = k + 1; i < nums.length; i++) {
    if (nums[i] > nums[k]) {
      l = i;
    }
  }

  // Step 3: Swap nums[k] and nums[l]
  [nums[k], nums[l]] = [nums[l], nums[k]];

  // Step 4: Reverse the sequence from nums[k + 1] to the end
  let left = k + 1;
  let right = nums.length - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
  console.log(nums);
}

nextPermutation([1, 2, 3]);
