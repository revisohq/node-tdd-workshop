describe('currying', () => {
  test('it should work', () => {

    const sayHi = (name, strategy) => {
      strategy(name)
    }
    sayHi('marco', console.log)


    const sayHiC = (strategy) => (name) => {
      const change = name.toUpperCase()
      strategy(change)
    }

    const sayHiConsole = sayHiC(console.log)
    const sayHiCustom = sayHiC((input) => {
      console.log(`custom ${input}`)
    })


    sayHiConsole('khalaf')
    sayHiCustom('janis')

  })
})