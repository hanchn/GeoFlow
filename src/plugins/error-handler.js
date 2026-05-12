const messages = require('../messages');
const { app, site } = require('../config');

async function registerErrorHandler(fastify) {
  fastify.setErrorHandler((error, request, reply) => {
    request.log.error({
      err: error,
      method: request.method,
      url: request.url
    });

    const statusCode = error.statusCode && error.statusCode >= 400
      ? error.statusCode
      : 500;

    if (request.url.startsWith('/api/')) {
      return reply.status(statusCode).send({
        success: false,
        message: statusCode === 500
          ? messages.error.INTERNAL_SERVER_ERROR
          : error.message || messages.error.UNKNOWN_ERROR
      });
    }

    const pageName = statusCode === 404 ? 'pages/404.njk' : 'pages/500.njk';

    return reply.status(statusCode).view(pageName, {
      title: statusCode === 404 ? '404' : '500',
      statusCode,
      site,
      currentEnv: app.appEnv,
      message: statusCode === 500
        ? messages.error.INTERNAL_SERVER_ERROR
        : error.message || messages.error.UNKNOWN_ERROR
    });
  });

  fastify.setNotFoundHandler((request, reply) => {
    if (request.url.startsWith('/api/')) {
      return reply.status(404).send({
        success: false,
        message: messages.error.NOT_FOUND
      });
    }

    return reply.status(404).view('pages/404.njk', {
      title: '404',
      statusCode: 404,
      site,
      currentEnv: app.appEnv,
      message: messages.error.NOT_FOUND
    });
  });
}

module.exports = registerErrorHandler;
