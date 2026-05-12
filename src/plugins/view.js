const fastifyView = require('@fastify/view');
const fastifyPlugin = require('fastify-plugin');
const nunjucks = require('nunjucks');

async function registerView(fastify, options) {
  await fastify.register(fastifyView, {
    engine: {
      nunjucks
    },
    root: options.root,
    options: options.options
  });
}

module.exports = fastifyPlugin(registerView, {
  name: 'register-view'
});
