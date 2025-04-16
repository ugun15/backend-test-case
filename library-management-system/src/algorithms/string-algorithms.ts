/**
 * Membalik string dengan angka tetap di akhir
 * @param str String yang akan dibalik
 * @returns String yang sudah dibalik dengan angka tetap di akhir
 */
export function reverseStringWithNumberAtEnd(str: string): string {
  // Pisahkan angka dan huruf
  const match = str.match(/^([a-zA-Z]+)(\d+)$/);
  if (!match) {
    return str; // Jika tidak sesuai format, kembalikan string asli
  }
  
  const [, letters, numbers] = match;
  
  // Balik huruf dan gabungkan dengan angka
  return letters.split('').reverse().join('') + numbers;
}

/**
 * Mencari kata terpanjang dalam kalimat
 * @param sentence Kalimat yang akan dicari kata terpanjangnya
 * @returns Kata terpanjang dalam kalimat
 */
export function findLongestWord(sentence: string): string {
  const words = sentence.split(' ');
  let longestWord = '';
  
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  
  return longestWord;
}

/**
 * Menghitung frekuensi kata dalam array
 * @param input Array input
 * @param query Array query
 * @returns Array hasil perhitungan frekuensi
 */
export function countWordFrequency(input: string[], query: string[]): number[] {
  return query.map(word => {
    return input.filter(item => item === word).length;
  });
}

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