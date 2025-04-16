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

// Contoh penggunaan
console.log(reverseStringWithNumberAtEnd('NEGIE1')); // Output: EIGEN1
