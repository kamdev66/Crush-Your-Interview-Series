// QUESTION: Set Matrix Zeros

// Time Complexity: O(M * N * (M + N))
// Space Complexity: O(1)

// [1, 2, 3] is the first row, [4, 5, 6] is the second row, and [7, 8, 9] is the third row.
// the first column consists of the elements [1, 4, 7], the second column consists of the elements [2, 5, 8], and the third column consists of the elements [3, 6, 9].


function setZeroesBruteForce(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        // Set entire row to 0
        for (let k = 0; k < cols; k++) {
          if (matrix[i][k] !== 0) {
            matrix[i][k] = null;
          }
        }

        // Set entire column to 0
        for (let k = 0; k < rows; k++) {
          if (matrix[k][j] !== 0) {
            matrix[k][j] = null;
          }
        }
      }
    }
  }

  // Replace null values with 0
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === null) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
}

matrix = [[1,1,1],[1,0,1],[1,1,1]]
console.log(setZeroesBruteForce(matrix))
