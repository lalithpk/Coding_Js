A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
B = 2;

function MatrixScaslerProduct(A, B) {
  for (let i = 0; i < A.length; i++) {
    for (j = 0; j < A[0].length; j++) {
      A[i][j] = B * A[i][j];
    }
  }
  return A;
}

console.log(MatrixScaslerProduct(A, B));
