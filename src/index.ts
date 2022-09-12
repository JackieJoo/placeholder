const fastify = require('fastify')({ logger: true });

fastify.get('/', async (request: any, reply: any) => {
  return { hello: 'World' };
});

fastify.post('/mirror', async (request: any, reply: any) => {
  return request.body;
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(8080, '0.0.0.0');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
