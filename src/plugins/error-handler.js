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
        message: statusCode === 500 ? 'Internal Server Error' : error.message
      });
    }

    return reply.status(statusCode).view('pages/error.njk', {
      title: 'Error',
      statusCode,
      message: statusCode === 500 ? 'Something went wrong.' : error.message
    });
  });

  fastify.setNotFoundHandler((request, reply) => {
    if (request.url.startsWith('/api/')) {
      return reply.status(404).send({
        success: false,
        message: 'Not Found'
      });
    }

    return reply.status(404).view('pages/error.njk', {
      title: 'Not Found',
      statusCode: 404,
      message: 'The page you requested does not exist.'
    });
  });
}

module.exports = registerErrorHandler;
