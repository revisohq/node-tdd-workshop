const { sum } = require('./index')

describe('some meaningful tests', () => {

  test('it should work', () => {
    const result = sum(1, 2)
    expect(result).toBe(3)
  });
  
});


