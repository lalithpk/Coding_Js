let A = [
  [1, 2, 3, 4],
  [5, 6, 7, 0],
  [9, 2, 0, 4],
];

function rowsToColumnsZero(A) {
  let row = A.length;
  let col = A[0].length;
  for (let i = 0; i < row; i++) {
    let flag = 0;
    for (let j = 0; j < col; j++) {
      if (A[i][j] == 0) {
        flag = 1;
      }
      if (flag == 1) {
        for (let j = 0; j < col; j++) {
          if (A[i][j] != 0) A[i][j] = -1;
        }
      }
    }
  }

  for (let j = 0; j < col; j++) {
    let flag = 0;
    for (let i = 0; i < row; i++) {
      if (A[i][j] == 0) {
        flag = 1;
      }
      if (flag == 1) {
        for (let i = 0; i < row; i++) {
          if (A[i][j] != 0) A[i][j] = -1;
        }
      }
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (A[i][j] == -1) A[i][j] = 0;
    }
  }
  return A;
}

console.log(rowsToColumnsZero(A));
