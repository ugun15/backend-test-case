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

// Contoh penggunaan
const input = ['xc', 'dz', 'bbb', 'dz'];
const query = ['bbb', 'ac', 'dz'];
console.log(countWordFrequency(input, query)); // Output: [1, 0, 2]
