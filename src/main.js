const buildApp = require('./app');
const { app: appConfig } = require('./config');

async function startServer() {
  const app = buildApp();

  try {
    await app.listen({
      host: appConfig.host,
      port: appConfig.port
    });

    app.log.info(`GeoFlow server started in ${appConfig.appEnv}`);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
}

module.exports = {
  startServer
};
