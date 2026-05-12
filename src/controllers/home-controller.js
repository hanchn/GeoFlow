const { app, site, database } = require('../config');
const homeService = require('../services/home-service');

async function renderHome(request, reply) {
  const pageData = await homeService.getHomePageData({
    app,
    site,
    database
  });

  return reply.view('pages/home.njk', {
    title: '首页',
    page: 'home',
    site,
    currentEnv: app.appEnv,
    ...pageData
  });
}

module.exports = {
  renderHome
};
