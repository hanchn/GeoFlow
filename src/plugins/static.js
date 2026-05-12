const fastifyStatic = require('@fastify/static');

async function registerStatic(fastify, options) {
  await fastify.register(fastifyStatic, {
    root: options.publicDir,
    prefix: '/public/'
  });
}

module.exports = registerStatic;
