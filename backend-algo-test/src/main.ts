import {
  reverseStringWithNumberAtEnd,
  findLongestWord,
  countWordFrequency,
  diagonalDifference
} from './algorithms';

// Algoritma 1: Membalik string dengan angka tetap di akhir
console.log('Algoritma 1: Membalik string dengan angka tetap di akhir');
console.log('Input: NEGIE1');
console.log('Output:', reverseStringWithNumberAtEnd('NEGIE1'));
console.log('-------------------');

// Algoritma 2: Mencari kata terpanjang dalam kalimat
console.log('Algoritma 2: Mencari kata terpanjang dalam kalimat');
const sentence = "Saya sangat senang mengerjakan soal algoritma";
console.log('Input:', sentence);
console.log('Output:', findLongestWord(sentence));
console.log('-------------------');

// Algoritma 3: Menghitung frekuensi kata dalam array
console.log('Algoritma 3: Menghitung frekuensi kata dalam array');
const input = ['xc', 'dz', 'bbb', 'dz'];
const query = ['bbb', 'ac', 'dz'];
console.log('Input:', input);
console.log('Query:', query);
console.log('Output:', countWordFrequency(input, query));
console.log('-------------------');

// Algoritma 4: Menghitung selisih diagonal matriks
console.log('Algoritma 4: Menghitung selisih diagonal matriks');
const matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9]
];
console.log('Input:', matrix);
console.log('Output:', diagonalDifference(matrix));
console.log('-------------------'); 