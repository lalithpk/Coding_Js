A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// To Rotate the matrix we need to find the transpose and reverse the each row

// Finding Transpose
function Transpose(A) {
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < i; j++) {
      Swap(A, i, j);
    }
  }
  return A;
}

// Helper function for Transpose to swap
function Swap(A, i, j) {
  let temp = A[i][j];
  A[i][j] = A[j][i];
  A[j][i] = temp;
  return A;
}

let postTranspose = Transpose(A);
console.log(Rotate(postTranspose));
//Reverse Logic to find the rotated array
function Rotate(postTranspose) {
  for (let i = 0; i < postTranspose.length; i++) {
    postTranspose[i].reverse();
  }
  return postTranspose;
}
