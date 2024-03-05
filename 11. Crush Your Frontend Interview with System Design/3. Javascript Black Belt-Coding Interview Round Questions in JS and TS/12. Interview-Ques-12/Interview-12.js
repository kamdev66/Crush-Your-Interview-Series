function areSimilar(a, b) {
  const diffIndices = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      diffIndices.push(i);
    }
  }
  console.log(diffIndices);

  if (
    diffIndices.length === 0 ||
    (diffIndices.length == 2 &&
      a[diffIndices[0]] === b[diffIndices[1]] &&
      a[diffIndices[1]] === b[diffIndices[0]])
  ) {
    return true;
  }
  return false;
}

// Test cases
console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3, 4], [2, 1, 3, 4]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
