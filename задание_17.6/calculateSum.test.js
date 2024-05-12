import { calculateSum } from './calculateSum.js';

describe('calculateSum', () => {
  test('успешное выполнение функции', () => {
    expect(calculateSum(5, 7)).toBe(12);
  });

  test('неуспешное выполнение функции', () => {
    expect(() => calculateSum('5', 7)).toThrow('некорректные входные данные');
  });

  test('граничные случаи', () => {
    expect(calculateSum(0, 0)).toBe(0);
    expect(() => calculateSum(Number.MAX_VALUE, Number.MAX_VALUE)).toThrow('переполнение');
  });
});