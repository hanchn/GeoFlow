const Fastify = require('fastify');
const formbody = require('@fastify/formbody');
const env = require('./config/env');
const registerView = require('./plugins/view');
const registerStatic = require('./plugins/static');
const registerErrorHandler = require('./plugins/error-handler');
const routes = require('./routes');

function buildApp() {
  const app = Fastify({
    logger: !env.isProd
  });

  app.decorate('appEnv', env.appEnv);
  app.register(formbody);
  app.register(registerView, { viewDir: env.viewDir });
  app.register(registerStatic, { publicDir: env.publicDir });
  app.register(registerErrorHandler);
  app.register(routes);

  return app;
}

module.exports = buildApp;
