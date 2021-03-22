const axios = require('axios')

describe('App', () => {
  it('should say hello', async () => {
    const fn = jest.fn()
    try {
      await axios.get('http://localhost:6173/hello')
    } catch (err) {
      fn(err.response)
    }

    expect(fn.mock.calls.length).toBe(1)

    const response = fn.mock.calls[0][0]
    expect(response.status).toBe(418)
    expect(response.data.msg).toBe('world')
  })

  it('should upper case somehting', async () => {
    const response = await axios.post('http://localhost:6173/uc', {
      name: 'foo'
    })

    expect(response.status).toBe(200)
    expect(response.data.output).toBe('FOO')
  })
})
