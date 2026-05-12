const fastifyStatic = require('@fastify/static');

async function registerStatic(fastify, options) {
  await fastify.register(fastifyStatic, {
    root: options.root,
    prefix: options.prefix
  });
}

module.exports = registerStatic;
