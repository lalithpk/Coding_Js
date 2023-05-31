let A = 5;
function SpiralMatrix(A) {
  let matrix = new Array(A).fill(0).map((el) => Array(A).fill(0));
  let row = 0;
  let col = 0;
  let number = 1;

  while (A > 1) {
    for (let i = 1; i < A; i++) {
      matrix[row][col] = number;
      number++;
      col++;
    }
    for (let i = 1; i < A; i++) {
      matrix[row][col] = number;
      number++;
      row++;
    }
    for (let i = 1; i < A; i++) {
      matrix[row][col] = number;
      number++;
      col--;
    }
    for (let i = 1; i < A; i++) {
      matrix[row][col] = number;
      number++;
      row--;
    }
    A -= 2;
    row += 1;
    col += 1;
  }
  if (A == 1) {
    matrix[row][col] = number;
  }
  return matrix;
}
console.log(SpiralMatrix(A));
