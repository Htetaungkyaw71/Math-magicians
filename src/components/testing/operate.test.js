import operate from '../../logic/operate';

describe('Testing operate.js', () => {
  test('Test for add function', () => {
    expect(operate(3, 5, '+')).toBe('8');
  });
  test('Test for subtract function', () => {
    expect(operate(100, 50, '-')).toBe('50');
  });
  test('Test for multiply function', () => {
    expect(operate(10, 10, 'x')).toBe('100');
  });
  test('Test for division function', () => {
    expect(operate(10, 2, '÷')).toBe('5');
  });
});
