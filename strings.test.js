const { concatenate } = require("./strings")

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

})