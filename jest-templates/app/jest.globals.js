const axios = require('axios')

const pause = (delay = 0) => new Promise((r) => setTimeout(r, delay));

module.exports = {
  pause,
  axios: {
    get: (uri, ...args) => axios.get(`http://localhost:6173${uri}`, ...args),
    post: (uri, ...args) => axios.post(`http://localhost:6173${uri}`, ...args),
  }
}