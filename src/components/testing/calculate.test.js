import calculate from '../../logic/calculate';

describe('Testing calculate.js', () => {
  test('Test for AC button', () => {
    const data = {
      total: null,
      next: null,
      operation: null,
    };
    expect(calculate(data, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
  test('Test for = button', () => {
    const data = {
      total: '10',
      next: '10',
      operation: '+',
    };
    expect(calculate(data, '=')).toEqual({
      total: '20',
      next: null,
      operation: null,
    });
  });

  test('Test for . button', () => {
    const data = {
      total: null,
      next: '10',
      operation: null,
    };
    expect(calculate(data, '.')).toEqual({
      total: null,
      next: '10.',
      operation: null,
    });
  });
});
