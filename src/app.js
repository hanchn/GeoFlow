const Fastify = require('fastify');
const formbody = require('@fastify/formbody');
const { app: appConfig, view, assets, site, database } = require('./config');
const registerDatabase = require('./plugins/database');
const registerView = require('./plugins/view');
const registerStatic = require('./plugins/static');
const registerErrorHandler = require('./plugins/error-handler');
const registerSwagger = require('./plugins/swagger');
const registerJobs = require('./jobs');
const routes = require('./routes');

function buildApp() {
  const app = Fastify({
    logger: appConfig.logger
  });

  app.decorate('appEnv', appConfig.appEnv);
  app.decorate('appName', appConfig.appName);
  app.decorate('siteConfig', site);
  app.decorate('databaseSettings', database);
  app.register(formbody);
  app.register(registerDatabase);
  app.register(registerView, view);
  app.register(registerStatic, assets);
  app.register(registerSwagger);
  app.register(registerErrorHandler);
  app.register(routes);
  app.register(registerJobs);

  return app;
}

module.exports = buildApp;
