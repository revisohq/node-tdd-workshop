const { curriedSum } = require('./math')

describe('currying', () => {

  it('should be able to sum 1 + 1', () => {
    const fn = curriedSum(1)
    const result = fn(1)
    expect(result).toBe(2)
  })


  // test('it should work', () => {

  //   const sayHi = (name, strategy) => {
  //     strategy(name)
  //   }
  //   sayHi('marco', console.log)


  //   const sayHiC = (strategy) => (name) => {
  //     const change = name.toUpperCase()
  //     strategy(change)
  //   }

  //   const sayHiConsole = sayHiC(console.log)
  //   const sayHiCustom = sayHiC((input) => {
  //     console.log(`custom ${input}`)
  //   })


  //   sayHiConsole('khalaf')
  //   sayHiCustom('janis')

  // })
})