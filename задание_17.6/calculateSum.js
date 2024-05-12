export function calculateSum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('некорректные входные данные');
    }
  
    if (a > Number.MAX_VALUE - b) {
      throw new Error('переполнение');
    }
  
    return a + b;
  }