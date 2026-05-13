const content = require('../content/site-content');

function buildShell(site, activeNav) {
  return {
    site,
    activeNav,
    navItems: content.site.navItems,
    searchSuggestions: content.site.searchSuggestions,
    footerGroups: content.site.footerGroups,
    allDoctors: content.experts || content.doctors || []
  };
}

function buildPageHero(title, subtitle, breadcrumbs) {
  return {
    title,
    subtitle,
    breadcrumbs
  };
}

function getAuthor(slug) {
  const experts = content.experts || content.doctors || [];
  return experts.find((item) => item.slug === slug || item.id === slug) || experts[0];
}

function getCaseStudy(slug) {
  return content.caseStudies.find((item) => item.slug === slug) || content.caseStudies[0];
}

function getDepartment(slug) {
  return content.departments.find((item) => item.slug === slug) || content.departments[0];
}

function getHomePage(site, appEnv) {
  return {
    ...buildShell(site, 'home'),
    heroTitle: '北京白癜风皮肤病专科医院',
    heroSubtitle: '汇聚白癜风、银屑病、儿童皮肤病等专病能力，提供更规范的专科诊疗与长期管理。',
    heroStats: content.site.stats,
    featuredDoctors: content.experts ? content.experts.slice(0, 4) : [],
    featuredArticles: content.articles ? content.articles.slice(0, 6) : [],
    processSteps: content.site.processSteps,
    homeFaqs: content.site.homeFaqs,
    patientStories: content.site.patientStories,
    contactCards: content.site.contactCards,
    currentEnv: appEnv
  };
}

function getDepartmentPage(site, slug) {
  const department = getDepartment(slug);

  return {
    ...buildShell(site, 'departments'),
    pageHero: buildPageHero(department.name, '五大专科科室，覆盖皮肤病全病程管理。', [
      { label: '首页', href: '/' },
      { label: '科室介绍', href: `/departments/${department.slug}` }
    ]),
    department,
    departmentTabs: content.departments.map((item) => ({
      name: item.name,
      slug: item.slug
    })),
    experts: content.experts ? content.experts.filter((item) => item.department === department.name).slice(0, 2) : []
  };
}

function getExpertsPage(site) {
  return {
    ...buildShell(site, 'experts'),
    pageHero: buildPageHero('专家团队', '汇聚 6 位皮肤科专病专家，为疑难慢病提供专业诊疗。', [
      { label: '首页', href: '/' },
      { label: '专家团队', href: '/experts' }
    ]),
    experts: content.experts || content.doctors || [],
    tabs: ['全部科室', '白癜风科', '银屑病科', '儿童皮肤科', '激光美容科', '过敏皮肤科']
  };
}

function getExpertDetailPage(site, slug) {
  let doctor = content.experts ? content.experts.find((d) => d.slug === slug || d.id === slug) : null;
  if (!doctor) {
    doctor = getAuthor(slug);
  }

  return {
    ...buildShell(site, 'experts'),
    doctor,
    relatedDoctors: content.experts ? content.experts.filter((item) => item.slug !== doctor.slug && item.id !== doctor.id).slice(0, 3) : [],
    breadcrumbs: [
      { label: '首页', href: '/' },
      { label: '专家团队', href: '/experts' },
      { label: doctor.name, href: `/experts/${doctor.id || doctor.slug}` }
    ]
  };
}

function getArticlesPage(site) {
  return {
    ...buildShell(site, 'articles'),
    pageHero: buildPageHero('科普文章', '围绕白癜风、银屑病、儿童皮肤病与皮肤管理的高质量内容。', [
      { label: '首页', href: '/' },
      { label: '科普文章', href: '/articles' }
    ]),
    categories: ['全部', '白癜风', '银屑病', '儿童皮肤', '激光美容'],
    articles: content.articles,
    recommendedDoctors: content.experts ? content.experts.slice(0, 3) : [],
    hotTags: ['白癜风治疗', '308激光', '银屑病饮食', '儿童湿疹', '皮肤屏障']
  };
}

function getArticleDetailPage(site, slug) {
  const article = content.articles.find((item) => item.slug === slug) || content.articles[0];
  let author = content.experts ? content.experts.find((d) => d.slug === article.authorSlug) : null;
  if (!author) {
    author = getAuthor(article.authorSlug);
  }

  return {
    ...buildShell(site, 'articles'),
    article,
    author,
    relatedArticles: content.articles.filter((item) => item.slug !== article.slug).slice(0, 5),
    breadcrumbs: [
      { label: '首页', href: '/' },
      { label: '科普文章', href: '/articles' },
      { label: article.title, href: `/articles/${article.slug}` }
    ],
    detailSections: [
      '白癜风与黑色素细胞受损、免疫异常、氧化应激和遗传背景有关。不同分型患者的治疗侧重点并不相同。',
      '针对局限型、进展期和儿童患者，治疗方案常涉及外用药、光疗、系统治疗与生活方式管理的组合。',
      '进入稳定期后仍需保持复诊和照片记录，必要时进行维持治疗与诱因回避。'
    ],
    detailTable: [
      ['308 准分子激光', '局限型、稳定期', '每周 1-2 次', '见效较快'],
      ['NB-UVB 光疗', '多发型、进展稳定后', '每周 2-3 次', '适合长期管理'],
      ['外用药', '早期或辅助治疗', '每日', '需遵医嘱'],
      ['系统治疗', '快速进展期', '阶段性', '需严格评估']
    ],
    detailFaqs: [
      '白癜风真的是慢病吗？',
      'NB-UVB 治疗需要多久才见效？',
      '白癜风复诊频率是多少？',
      '儿童白癜风如何长期管理？'
    ],
    references: [
      '中国白癜风诊疗共识（2025版）',
      'European Dermatology Forum 指南',
      'AAD 临床实践建议'
    ],
    articleReviews: [
      { user: '李妈妈', score: 4.8, text: '文章把疗程安排和复诊逻辑讲得很清楚。', date: '2026-04-10' },
      { user: '王阿姨', score: 4.8, text: '对 NB-UVB 和 308 的区别终于看明白了。', date: '2026-04-06' },
      { user: '刘同学', score: 4.7, text: '信息比较系统，适合第一次做功课。', date: '2026-04-02' }
    ]
  };
}

function getCasesPage(site) {
  return {
    ...buildShell(site, 'cases'),
    pageHero: buildPageHero('患者案例', '展示真实病程管理、治疗节点与长期随访经验。', [
      { label: '首页', href: '/' },
      { label: '患者案例', href: '/cases' }
    ]),
    featuredCase: content.caseStudies[0],
    caseStudies: content.caseStudies,
    caseCategories: ['全部', '白癜风', '银屑病', '儿童皮肤'],
    recommendedDoctors: content.experts ? content.experts.slice(0, 3) : []
  };
}

function getCaseDetailPage(site, slug) {
  const caseStudy = getCaseStudy(slug);
  const doctor = getAuthor(caseStudy.doctorSlug);

  return {
    ...buildShell(site, 'cases'),
    caseStudy,
    doctor,
    relatedCases: content.caseStudies.filter((item) => item.slug !== caseStudy.slug).slice(0, 2),
    breadcrumbs: [
      { label: '首页', href: '/' },
      { label: '患者案例', href: '/cases' },
      { label: caseStudy.title, href: `/cases/${caseStudy.slug}` }
    ]
  };
}

module.exports = {
  buildShell,
  getHomePage,
  getDepartmentPage,
  getExpertsPage,
  getExpertDetailPage,
  getArticlesPage,
  getArticleDetailPage,
  getCasesPage,
  getCaseDetailPage
};
