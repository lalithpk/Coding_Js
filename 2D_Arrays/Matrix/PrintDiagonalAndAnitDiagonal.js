/*Print the Diagonals and Anti Diagonals Of a Matrix */
let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

// Printing Diagnols

let i = 0;
let N = matrix[0].length;
while (i < N) {
  console.log(matrix[i][i]);
  i++;
}

console.log("--------------------------");
// Printing Anti Diagona;
i = 0;
let j = matrix[0].length - 1;

while (i < N && j >= 0) {
  console.log(matrix[i][j]);
  i++;
  j--;
}
