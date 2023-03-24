const { expect } = require('chai');
const { Helper } = require('./Helper');

describe('Helper', () => {
  describe('addition', () => {
    it('should return the sum of two numbers', () => {
      expect(Helper.addition(2, 3)).toBe(5);
      expect(Helper.addition(5, 7)).toBe(12);
      expect(Helper.addition(-1, 1)).toBe(0);
    });
  });

  describe('subtraction', () => {
    it('should return the difference between two numbers', () => {
      expect(Helper.subtraction(5, 2)).toBe(3);
      expect(Helper.subtraction(10, 5)).toBe(5);
      expect(Helper.subtraction(0, -5)).toBe(5);
    });
  });

  describe('multiplication', () => {
    it('should return the product of two numbers', () => {
      expect(Helper.multiplication(4, 6)).toBe(24);
      expect(Helper.multiplication(-3, 5)).toBe(-15);
      expect(Helper.multiplication(0, 5)).toBe(0);
    });
  });

  describe('division', () => {
    it('should return the quotient of two numbers', () => {
      expect(Helper.division(10, 2)).toBe(5);
      expect(Helper.division(25, 5)).toBe(5);
      expect(Helper.division(-10, 2)).toBe(-5);
    });

    it('should return Infinity if the divisor is 0', () => {
      expect(Helper.division(10, 0)).toBe(Infinity);
      expect(Helper.division(-5, 0)).toBe(-Infinity);
    });
  });
});