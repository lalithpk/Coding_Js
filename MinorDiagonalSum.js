A = [
  [3, 2],
  [2, 3],
];

function minorDiagonalSum() {
  let i = 0;
  let j = A.length - 1;
  let sum = 0;
  while (i < A.length && j >= 0) {
    sum += A[i][j];
    i++;
    j--;
  }
  return sum;
}

console.log(minorDiagonalSum(A));
