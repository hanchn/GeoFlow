const fastifyView = require('@fastify/view');
const nunjucks = require('nunjucks');

async function registerView(fastify, options) {
  await fastify.register(fastifyView, {
    engine: {
      nunjucks
    },
    root: options.viewDir,
    options: {
      autoescape: true,
      trimBlocks: true,
      lstripBlocks: true
    }
  });
}

module.exports = registerView;
