A = [
  [1, 2],
  [3, 4],
];

function sumOfAllSubMatrix(A) {
  let sum = 0;
  let M = A.length;
  let N = A[0].length;
  for (let i = 0; i < M; i++) {
    for (j = 0; j < N; j++) {
      sum += (i + 1) * (j + 1) * (M - i) * (N - j) * A[i][j];
    }
  }
  return sum;
}
console.log(sumOfAllSubMatrix(A));
