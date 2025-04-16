import {
  reverseStringWithNumberAtEnd,
  findLongestWord,
  countWordFrequency,
  diagonalDifference
} from '../string-algorithms';

describe('String Algorithms', () => {
  describe('reverseStringWithNumberAtEnd', () => {
    it('should reverse string with number at end', () => {
      expect(reverseStringWithNumberAtEnd('NEGIE1')).toBe('EIGEN1');
      expect(reverseStringWithNumberAtEnd('ABC123')).toBe('CBA123');
    });

    it('should return original string if format is invalid', () => {
      expect(reverseStringWithNumberAtEnd('123ABC')).toBe('123ABC');
      expect(reverseStringWithNumberAtEnd('ABC')).toBe('ABC');
    });
  });

  describe('findLongestWord', () => {
    it('should find the longest word in a sentence', () => {
      expect(findLongestWord('Saya sangat senang mengerjakan soal algoritma')).toBe('mengerjakan');
      expect(findLongestWord('The quick brown fox jumps over the lazy dog')).toBe('quick');
    });
  });

  describe('countWordFrequency', () => {
    it('should count word frequency correctly', () => {
      const input = ['xc', 'dz', 'bbb', 'dz'];
      const query = ['bbb', 'ac', 'dz'];
      expect(countWordFrequency(input, query)).toEqual([1, 0, 2]);
    });
  });

  describe('diagonalDifference', () => {
    it('should calculate diagonal difference correctly', () => {
      const matrix = [
        [1, 2, 0],
        [4, 5, 6],
        [7, 8, 9]
      ];
      expect(diagonalDifference(matrix)).toBe(3);
    });
  });
}); 