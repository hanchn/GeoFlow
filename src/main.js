const buildApp = require('./app');
const { app: appConfig, swagger } = require('./config');

function getPreviewHost(host) {
  if (host === '0.0.0.0' || host === '::') {
    return '127.0.0.1';
  }

  return host;
}

async function startServer() {
  const app = buildApp();

  try {
    await app.listen({
      host: appConfig.host,
      port: appConfig.port
    });

    const previewUrl = `http://${getPreviewHost(appConfig.host)}:${appConfig.port}`;

    console.log(`[GeoFlow] env: ${appConfig.appEnv}`);
    console.log(`[GeoFlow] preview: ${previewUrl}`);

    if (swagger.enabled) {
      console.log(`[GeoFlow] docs: ${previewUrl}/docs`);
    }
  } catch (error) {
    console.error('[GeoFlow] start failed');
    console.error(error);
    process.exit(1);
  }
}

module.exports = {
  startServer
};
