async function getHomePageData(config) {
  return {
    heroTitle: config.site.name,
    heroSubtitle: 'Fastify + Nunjucks GEO C 端项目骨架',
    currentEnv: config.app.appEnv,
    currentSite: config.site.code,
    siteHost: config.site.host,
    environmentList: ['development', 'testing', 'staging', 'production'],
    features: [
      '按环境隔离配置',
      '站点兜底配置',
      '全局异常拦截与基础错误页',
      '提交自检与非法提交拦截'
    ]
  };
}

module.exports = {
  getHomePageData
};
