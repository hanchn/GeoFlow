const fastifySwagger = require('@fastify/swagger');
const fastifySwaggerUi = require('@fastify/swagger-ui');
const { app, site, swagger } = require('../config');

async function registerSwagger(fastify) {
  if (!swagger.enabled) {
    return;
  }

  await fastify.register(fastifySwagger, {
    openapi: {
      info: {
        title: `${site.name} API Docs`,
        description: `${app.appEnv} environment swagger documentation`,
        version: '0.1.0'
      }
    }
  });

  await fastify.register(fastifySwaggerUi, {
    routePrefix: '/docs',
    uiConfig: {
      docExpansion: 'list',
      deepLinking: false
    }
  });
}

module.exports = registerSwagger;
