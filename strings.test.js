const { concatenate } = require("./strings")

describe('strings', () => {
  test('it should concatenate 2 strings', () => {
    const testInput = ['marco', 'pegoraro']
    const expectedOutput = 'marco pegoraro'
    const receivedOutput = concatenate(testInput)
    expect(receivedOutput).toBe(expectedOutput)
  })
})