async function getHomePageData(env) {
  return {
    heroTitle: 'GeoFlow',
    heroSubtitle: 'Fastify + Nunjucks GEO consumer scaffold',
    currentEnv: env.appEnv,
    environmentList: ['development', 'testing', 'staging', 'production'],
    features: [
      'Four-environment configuration loading',
      'Global error interception and 404 fallback',
      'Commit self-check and invalid commit blocking'
    ]
  };
}

module.exports = {
  getHomePageData
};
