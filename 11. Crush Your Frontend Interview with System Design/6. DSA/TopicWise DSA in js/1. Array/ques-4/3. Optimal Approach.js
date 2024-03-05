// Time Complexity: O(M * N)
// Space Complexity: O(1)

function setZeroesOptimalApproach(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let firstRowHasZero = false;
  let firstColHasZero = false;

  // Check if the first row has any zero
  for (let j = 0; j < cols; j++) {
    if (matrix[0][j] === 0) {
      firstRowHasZero = true;
      break;
    }
  }

  // Check if the first column has any zero
  for (let i = 0; i < rows; i++) {
    if (matrix[i][0] === 0) {
      firstColHasZero = true;
      break;
    }
  }

  // Mark zero elements in the first row and first column
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  // Set entire row to zero if the first element of the row is zero
  for (let i = 1; i < rows; i++) {
    if (matrix[i][0] === 0) {
      for (let j = 1; j < cols; j++) {
        matrix[i][j] = 0;
      }
    }
  }

  // Set entire column to zero if the first element of the column is zero
  for (let j = 1; j < cols; j++) {
    if (matrix[0][j] === 0) {
      for (let i = 1; i < rows; i++) {
        matrix[i][j] = 0;
      }
    }
  }

  // Set first row to zero if it has any zero
  if (firstRowHasZero) {
    for (let j = 0; j < cols; j++) {
      matrix[0][j] = 0;
    }
  }

  // Set first column to zero if it has any zero
  if (firstColHasZero) {
    for (let i = 0; i < rows; i++) {
      matrix[i][0] = 0;
    }
  }

  return matrix;
}

matrix = [[1,1,1],[1,0,1],[1,1,1]]
console.log(setZeroesOptimalApproach(matrix))
