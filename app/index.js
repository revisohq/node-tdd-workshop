const Fastify = require('fastify');

const server = Fastify({ logger: true });

server.get('/hello', (request, reply) => {
  reply.status(418).send({
    msg: 'world'
  })
})

server.listen(6173, (err, serverAddr) => {
  if (err) {
    console.log('oh no')
    process.exit(-1)
  }
  server.log.info(`Listening: ${serverAddr}`)
})
