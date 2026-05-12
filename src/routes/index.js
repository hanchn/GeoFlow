const siteController = require('../controllers/site-controller');
const messages = require('../messages');

async function routes(fastify) {
  fastify.get('/', siteController.renderHome);
  fastify.get('/departments/:slug', siteController.renderDepartment);
  fastify.get('/experts', siteController.renderExperts);
  fastify.get('/experts/:slug', siteController.renderExpertDetail);
  fastify.get('/articles', siteController.renderArticles);
  fastify.get('/articles/:slug', siteController.renderArticleDetail);
  fastify.get('/cases', siteController.renderCases);
  fastify.get('/cases/:slug', siteController.renderCaseDetail);

  fastify.get('/health', {
    schema: {
      summary: '健康检查',
      tags: ['system'],
      response: {
        200: {
          type: 'object',
          properties: {
            status: { type: 'string' },
            message: { type: 'string' }
          }
        }
      }
    }
  }, async () => ({
    status: 'ok',
    message: messages.success.HEALTH_CHECK_OK
  }));

  fastify.get('/api/ping', {
    schema: {
      summary: '接口连通测试',
      tags: ['system'],
      response: {
        200: {
          type: 'object',
          properties: {
            success: { type: 'boolean' },
            message: { type: 'string' }
          }
        }
      }
    }
  }, async () => ({
    success: true,
    message: messages.success.API_PING_OK
  }));
}

module.exports = routes;
