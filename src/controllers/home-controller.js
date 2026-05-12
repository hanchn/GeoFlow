const env = require('../config/env');
const homeService = require('../services/home-service');

async function renderHome(request, reply) {
  const pageData = await homeService.getHomePageData(env);

  return reply.view('pages/home.njk', {
    title: 'Home',
    page: 'home',
    ...pageData
  });
}

module.exports = {
  renderHome
};
