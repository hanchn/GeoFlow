const homeController = require('../controllers/home-controller');

async function routes(fastify) {
  fastify.get('/', homeController.renderHome);

  fastify.get('/health', async () => ({
    status: 'ok'
  }));

  fastify.get('/api/ping', async () => ({
    success: true,
    message: 'pong'
  }));
}

module.exports = routes;
