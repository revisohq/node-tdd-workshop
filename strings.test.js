const { concatenate, onlyString } = require("./strings")
const each = require('jest-each').default;

describe('strings', () => {
  test('it should concatenate marco pegoraro', () => {
    const testInput = ['marco', 'pegoraro']
    const expectedOutput = 'marco pegoraro'
    const receivedOutput = concatenate(testInput)
    expect(receivedOutput).toBe(expectedOutput)
  })

  test('it should concatenate Aras pegoraro', () => {
    const testInput = ['Aras', 'pegoraro']
    const expectedOutput = 'Aras pegoraro'
    const receivedOutput = concatenate(testInput)
    expect(receivedOutput).toBe(expectedOutput)
  })

  test('it should concatenate a b c d', () => {
    const testInput = ['A', 'B', 'C', 'D']
    const expectedOutput = 'A B C D'
    const receivedOutput = concatenate(testInput)
    expect(receivedOutput).toBe(expectedOutput)
  })

  test('it should not concatenate number 1', () => {
    const testInput = [1, 'B', 'C', 'D']
    const expectedOutput = 'B C D'
    const receivedOutput = concatenate(testInput)
    expect(receivedOutput).toBe(expectedOutput)
  })

  test('it should not concatenate weird stuff', () => {
    const testInput = [{}, true, 'C', 1.5, [1,2], () => {}]
    const expectedOutput = 'C'
    const receivedOutput = concatenate(testInput)
    expect(receivedOutput).toBe(expectedOutput)
  })

  test('it should concatenate A+B+C+D', () => {
    const testInput = ['A', 'B', 'C', 'D']
    const expectedOutput = 'A+B+C+D'
    const receivedOutput = concatenate(testInput, "+")
    expect(receivedOutput).toBe(expectedOutput)
  })
})

describe('onlyString', () => {
  test('it should validate a string', () => {
    expect(onlyString('a')).toBe(true)
  })

  // Test a lot of bad values...
  const listOfBadValues = [undefined, null, true, false, 0, 1, -1, {}, [], () => {}, NaN, Infinity, Object, String]
  listOfBadValues.forEach((value) => {
    test(`it should NOT validate "${String(value)}"`, () => {
      expect(onlyString(value)).toBe(false)
    })
  })

})

describe('test jest-each', () => {
  test('it should validate a string using jest-each', () => {
    expect(onlyString('a')).toBe(true)
  })
  each`
    input           | expectedResult
    ${undefined}    | ${false}
    ${null}         | ${false}
    ${true}         | ${false}
    ${'a'}          | ${true}
  `.test('converts $input to $expectedResult', ({ input, expectedResult }) => {
    expect(onlyString(input)).toBe(expectedResult)
  })
})