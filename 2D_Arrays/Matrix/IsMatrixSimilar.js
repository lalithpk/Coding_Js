A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
B = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 10],
];

function isMatrixSimilar(A, B) {
  let row1 = A.length;
  let col1 = A[0].length;
  let row2 = B.length;
  let col2 = B[0].length;

  if (row1 != row2 || col1 != col2) {
    return "No";
  }
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      if (A[i][j] != B[i][j]) return "NO";
    }
  }
  return "YES";
}
console.log(isMatrixSimilar(A, B));
