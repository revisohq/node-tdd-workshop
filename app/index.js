const Fastify = require('fastify');
const server = Fastify({ logger: true });

server.get('/healthz', (request, reply) => reply.send('ok'))

server.get('/hello', (request, reply) => {
  reply.status(418).send({
    msg: 'world',
    foo: 'bar'
  })
})

server.post('/uc', (request, reply) => {
  const name = request.body.name
  const result = name.toUpperCase() 
  reply.send({
    input: name,
    output: result
  })
})

setTimeout(() => {
  server.listen(6173, (err, serverAddr) => {
    if (err) {
      console.log('oh no')
      process.exit(-1)
    }
    server.log.info(`Listening: ${serverAddr}`)
  })
}, 500)
