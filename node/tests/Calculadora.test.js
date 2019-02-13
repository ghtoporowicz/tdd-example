const calculator = require('../src/calculator')

test('adds a + b to equal c', () => {

    const a = 3
    const b = 15
    const expectedResult = 18

    const result = calculator.sum(a,b)
    expect(result).toBe(expectedResult);
  });

test('adds a + b to equal c', () => {

    const a = 3
    const b = 15
    const expectedResult = 18

    const result = calculator.sum(a,b)
    expect(result).toBe(expectedResult);
});