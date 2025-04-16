/**
 * Menghitung selisih diagonal matriks
 * @param matrix Matriks NxN
 * @returns Selisih diagonal
 */
export function diagonalDifference(matrix: number[][]): number {
  const n = matrix.length;
  let diagonal1 = 0;
  let diagonal2 = 0;
  
  for (let i = 0; i < n; i++) {
    diagonal1 += matrix[i][i];
    diagonal2 += matrix[i][n - 1 - i];
  }
  
  return Math.abs(diagonal1 - diagonal2);
}

// Contoh penggunaan
const matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(diagonalDifference(matrix)); // Output: 3
