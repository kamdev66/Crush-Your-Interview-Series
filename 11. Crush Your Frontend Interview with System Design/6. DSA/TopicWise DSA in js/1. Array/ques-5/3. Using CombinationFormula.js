function generatePascalsTriangle(numRows) {
    const triangle = [];

    // Time complexity: O(numRows^2)
    for (let i = 0; i < numRows; i++) {
        const row = [];
        // Time complexity: O(i)
        for (let j = 0; j <= i; j++) {
            row.push(factorial(i) / (factorial(j) * factorial(i - j)));
        }
        triangle.push(row);
    }

    return triangle;
}

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    // Time complexity: O(n)
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(generatePascalsTriangle(5));
