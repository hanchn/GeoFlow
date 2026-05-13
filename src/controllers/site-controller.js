const { app, site } = require('../config');
const pageService = require('../services/page-service');

async function renderHome(request, reply) {
  const pageData = pageService.getHomePage(site, app.appEnv);
  return reply.view('pages/home.njk', {
    title: '首页',
    bodyClass: 'page-home',
    ...pageData
  });
}

async function renderDepartment(request, reply) {
  const pageData = pageService.getDepartmentPage(site, request.params.slug);
  return reply.view('pages/department.njk', {
    title: pageData.department.name,
    bodyClass: 'page-department',
    ...pageData
  });
}

async function renderExperts(request, reply) {
  const pageData = pageService.getExpertsPage(site);
  return reply.view('pages/experts.njk', {
    title: '专家团队',
    bodyClass: 'page-experts',
    ...pageData
  });
}

async function renderExpertDetail(request, reply) {
  const pageData = pageService.getExpertDetailPage(site, request.params.slug);
  return reply.view('pages/expert-detail.njk', {
    title: pageData.doctor.name,
    bodyClass: 'page-expert-detail',
    ...pageData
  });
}

async function renderArticles(request, reply) {
  const pageData = pageService.getArticlesPage(site);
  return reply.view('pages/articles.njk', {
    title: '科普文章',
    bodyClass: 'page-articles',
    ...pageData
  });
}

async function renderArticleDetail(request, reply) {
  const pageData = pageService.getArticleDetailPage(site, request.params.slug);
  return reply.view('pages/article-detail.njk', {
    title: pageData.article.title,
    bodyClass: 'page-article-detail',
    ...pageData
  });
}

async function renderCases(request, reply) {
  const pageData = pageService.getCasesPage(site);
  return reply.view('pages/cases.njk', {
    title: '患者案例',
    bodyClass: 'page-cases',
    ...pageData
  });
}

async function renderCaseDetail(request, reply) {
  const pageData = pageService.getCaseDetailPage(site, request.params.slug);
  return reply.view('pages/case-detail.njk', {
    title: pageData.caseStudy.title,
    bodyClass: 'page-case-detail',
    ...pageData
  });
}

async function renderContact(request, reply) {
  const pageData = pageService.getContactPage(site);
  return reply.view('pages/contact.njk', {
    title: '联系我们',
    bodyClass: 'page-contact',
    currentPath: request.url,
    ...pageData
  });
}

async function renderLlmsTxt(request, reply) {
  const textContent = pageService.getLlmsTxtContent(site);
  return reply.header('Content-Type', 'text/plain; charset=utf-8').send(textContent);
}

async function renderLlmsFullTxt(request, reply) {
  const textContent = pageService.getLlmsFullTxtContent(site);
  return reply.header('Content-Type', 'text/plain; charset=utf-8').send(textContent);
}

module.exports = {
  renderHome,
  renderDepartment,
  renderExperts,
  renderExpertDetail,
  renderArticles,
  renderArticleDetail,
  renderCases,
  renderCaseDetail,
  renderContact,
  renderLlmsTxt,
  renderLlmsFullTxt
};
