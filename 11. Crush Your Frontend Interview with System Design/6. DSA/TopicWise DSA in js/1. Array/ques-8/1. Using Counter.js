function sortColors(nums) {
    const counts = [0, 0, 0]; // Store counts of red, white, and blue respectively
    for (let num of nums) {
        counts[num]++;
    }
    let i = 0;
    for (let color = 0; color <= 2; color++) {
        while (counts[color] > 0) {
            nums[i++] = color;
            counts[color]--;
        }
    }
}
console.log(sortColors([2, 0, 2, 1, 1, 0]));
