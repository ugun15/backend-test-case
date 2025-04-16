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

// Contoh penggunaan
const sentence = "Saya sangat senang mengerjakan soal algoritma";
console.log(findLongestWord(sentence)); // Output: mengerjakan
