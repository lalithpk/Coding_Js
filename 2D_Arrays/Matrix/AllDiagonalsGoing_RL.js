let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

for (let i = 0; i < matrix[0].length; i++) {
  let x = 0;
  j = i;
  let str = "";
  while (x < matrix[0].length && j >= 0) {
    str += matrix[x][j];
    x++;
    j--;
  }
  console.log(str);
}

for (let i = 0; i < matrix.length; i++) {
  let x = i;
  j = matrix[0].length - 1;
  let str = "";
  while (x < matrix.length && j >= 0) {
    str += matrix[x][j];
    x++;
    j--;
  }
  console.log(str);
}
