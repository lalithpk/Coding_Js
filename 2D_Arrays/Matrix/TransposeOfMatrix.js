let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [12, 14, 15, 16],
];

const Transpose = (A) => {
  let ans = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      swap(A, i, j);
    }
  }
  return A;
};

const swap = (A, i, j) => {
  let temp = A[i][j];
  A[i][j] = A[j][i];
  A[j][i] = temp;
  return A;
};
console.log(Transpose(matrix));
