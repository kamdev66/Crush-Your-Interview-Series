function generatePascalsTriangle(numRows) {
    const triangle = [];

    function generateRow(rowNum) {
        // Base case: When rowNum is 0
        if (rowNum === 0) return [1];
        const prevRow = generateRow(rowNum - 1);
        const row = [1];
        // Time complexity: O(rowNum)
        for (let i = 1; i < rowNum; i++) {
            row.push(prevRow[i - 1] + prevRow[i]);
        }
        row.push(1);
        return row;
    }

    // Time complexity: O(numRows^2)
    for (let i = 0; i < numRows; i++) {
        triangle.push(generateRow(i));
    }

    return triangle;
}

console.log(generatePascalsTriangle(5));
