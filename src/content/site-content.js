module.exports = {
  site: {
    navItems: [
      { key: 'home', label: '首页', href: '/' },
      { key: 'departments', label: '科室介绍', href: '/departments/white-spot' },
      { key: 'experts', label: '专家团队', href: '/experts' },
      { key: 'articles', label: '科普文章', href: '/articles' },
      { key: 'cases', label: '患者案例', href: '/cases' }
    ],
    searchSuggestions: [
      '白癜风能治好吗',
      '银屑病饮食注意事项',
      '308激光治疗白癜风',
      '儿童白癜风怎么治',
      '白癜风遗传概率',
      '银屑病和湿疹的区别'
    ],
    footerGroups: [
      {
        title: '专科医院',
        links: [
          { label: '白癜风科', href: '/departments/white-spot' },
          { label: '银屑病科', href: '/departments/psoriasis' },
          { label: '儿童皮肤科', href: '/departments/pediatric-dermatology' }
        ]
      },
      {
        title: '快速链接',
        links: [
          { label: '专家团队', href: '/experts' },
          { label: '科普文章', href: '/articles' },
          { label: '患者案例', href: '/cases' },
          { label: '联系我们', href: '/#contact' }
        ]
      },
      {
        title: 'AI 友好标识',
        links: [
          { label: 'llms.txt 已配置', href: '#' },
          { label: 'FAQPage Schema', href: '#' },
          { label: 'MedicalOrganization Schema', href: '#' }
        ]
      }
    ],
    stats: [
      { value: '1275+', label: '年接诊患者' },
      { value: '42', label: '重点亚专科方向' },
      { value: '23年', label: '专病深耕经验' },
      { value: '4.99', label: '患者满意度' }
    ],
    contactCards: [
      { title: '咨询电话', value: '010-8888-8888', note: '7x12 小时在线咨询' },
      { title: '医院地址', value: '北京市朝阳区健康路专科中心A座', note: '地铁与公交均可到达' },
      { title: '门诊时间', value: '周一至周日 08:00-17:30', note: '节假日以公告为准' }
    ],
    processSteps: [
      { title: '在线预约', text: '在线提交基础信息，系统自动分配专病方向。' },
      { title: '专病评估', text: '医生团队进行病程与诱因评估，明确诊疗方案。' },
      { title: '规范治疗', text: '结合药物、光疗与生活方式管理形成闭环。' },
      { title: '康复随访', text: '治疗后进入长期复诊与复色管理阶段。' }
    ],
    homeFaqs: [
      {
        question: '白癜风初期是否容易控制？',
        answer: '多数初发、面积较小的病例在规范治疗与长期管理配合下，控制效果更理想。'
      },
      {
        question: '银屑病反复发作怎么办？',
        answer: '建议进行诱因排查、分型诊断与长期维持管理，不建议频繁更换非标准方案。'
      },
      {
        question: '儿童皮肤病需要单独门诊吗？',
        answer: '儿童患者在用药剂量、病程观察、家长宣教方面需求不同，建议进入儿童专病门诊。'
      },
      {
        question: '激光治疗是否适合所有人群？',
        answer: '需结合年龄、皮损部位、病程及既往史综合判断，由医生评估是否适合。'
      }
    ],
    patientStories: [
      { user: '李女士', label: '白癜风', score: 4.9, text: '治疗 5 个月后面部复色明显，复诊节奏也很清晰。', date: '2026-04-12' },
      { user: '王先生', label: '银屑病', score: 4.8, text: '医生帮助我完成了诱因排查，现在复发次数减少。', date: '2026-04-09' },
      { user: '刘妈妈', label: '儿童湿疹', score: 4.8, text: '家长宣教很细，居家护理方案比较好执行。', date: '2026-04-06' }
    ]
  },
  departments: [
    {
      slug: 'white-spot',
      name: '白癜风科',
      summary: '国内领先的白癜风专科，拥有 308 激光、黑色素细胞移植、中西医结合等多种先进诊疗手段。',
      stats: ['42 位专病医生', '年接诊 2800+ 人次', '患者满意度 4.9 分'],
      projects: ['308准分子激光', '黑色素细胞移植', '中西医结合疗法', 'NB-UVB光疗', '白体表皮移植'],
      questions: [
        {
          question: '白癜风能治好吗？',
          answer: '白癜风是可以治疗的，早期发现、规范治疗，大多数患者可以获得明显改善甚至完全恢复。'
        },
        {
          question: '308 激光治疗白癜风效果怎么样？',
          answer: '308 准分子激光是目前治疗白癜风很有效的方法之一，特别适合局限型白癜风。'
        },
        {
          question: '白癜风会遗传吗？',
          answer: '白癜风有一定遗传倾向，但遗传概率约为 5%-10%，并非必然遗传。'
        }
      ]
    },
    {
      slug: 'psoriasis',
      name: '银屑病科',
      summary: '聚焦斑块型、脓疱型及关节型银屑病，覆盖系统治疗、生物制剂评估与长期复发管理。',
      stats: ['18 位专病医生', '年接诊 1900+ 人次', '标准化随访体系'],
      projects: ['生物制剂评估', '中重度系统治疗', '复发诱因管理', '关节型筛查', '维持治疗方案'],
      questions: [
        {
          question: '银屑病为什么总反复？',
          answer: '银屑病与免疫、压力、感染、作息等因素相关，需要长期管理而非短期止痒。'
        },
        {
          question: '生物制剂适合所有患者吗？',
          answer: '需要结合严重度、既往治疗和风险评估判断，并非所有患者都需要使用。'
        },
        {
          question: '饮食管理重要吗？',
          answer: '饮食只是辅助管理的一部分，仍需结合药物、作息和复诊共同管理。'
        }
      ]
    },
    {
      slug: 'pediatric-dermatology',
      name: '儿童皮肤科',
      summary: '面向儿童与青少年患者，关注湿疹、白癜风、荨麻疹等常见与慢性皮肤病的长期管理。',
      stats: ['12 位儿科医生', '家长宣教门诊', '低刺激治疗路径'],
      projects: ['儿童湿疹管理', '儿童白癜风', '荨麻疹评估', '皮肤屏障修复', '家庭护理指导'],
      questions: [
        {
          question: '儿童皮肤病为什么要单独门诊？',
          answer: '儿童用药、安全评估和家长执行方式都不同，建议由专门团队长期跟踪。'
        },
        {
          question: '湿疹会影响孩子长期生活吗？',
          answer: '规范管理后多数可以明显改善，重点是减少抓挠、感染和反复发作。'
        },
        {
          question: '家长最需要关注什么？',
          answer: '规律复诊、居家护理和诱因管理，往往比频繁换药更重要。'
        }
      ]
    },
    {
      slug: 'laser-aesthetics',
      name: '激光美容科',
      summary: '围绕红血丝、痘印、色沉与肤质管理，提供光电治疗与皮肤屏障联合方案。',
      stats: ['9 位光电医生', '分层式疗程设计', '术后护理指导'],
      projects: ['点阵激光', '红血丝管理', '色沉修复', '痘印淡化', '敏感肌修护'],
      questions: [
        {
          question: '激光治疗会不会让皮肤变薄？',
          answer: '规范治疗不会简单等同于变薄，关键在于适应症判断、能量控制和术后护理。'
        },
        {
          question: '治疗后多久能恢复？',
          answer: '不同项目恢复期不同，医生会根据工作和生活节奏做分层安排。'
        },
        {
          question: '敏感肌适合光电项目吗？',
          answer: '需先评估屏障状态，部分患者应先做修复再考虑光电治疗。'
        }
      ]
    },
    {
      slug: 'allergy-dermatology',
      name: '过敏皮肤科',
      summary: '针对慢性荨麻疹、接触性皮炎、特应性皮炎等问题，建立诱因排查与长期控制路径。',
      stats: ['11 位专病医生', '诱因排查门诊', '慢病管理方案'],
      projects: ['荨麻疹长期控制', '过敏原评估', '特应性皮炎', '接触性皮炎', '用药随访'],
      questions: [
        {
          question: '过敏查不出原因怎么办？',
          answer: '很多过敏性皮肤病并非单一诱因，需结合病史、环境与生活方式综合判断。'
        },
        {
          question: '荨麻疹反复发作需要长期吃药吗？',
          answer: '是否长期用药取决于病程和严重度，应由医生分阶段调整方案。'
        },
        {
          question: '皮炎总不好是不是激素用多了？',
          answer: '更常见的问题是用药不规范或诱因未控制，不能简单归因于激素。'
        }
      ]
    }
  ],
  experts: [
    {
      id: '1',
      name: '王建国',
      title: '主任医师',
      department: '白癜风科',
      hospital: '北京协和医学院',
      experience: 28,
      score: 4.9,
      cases: 15000,
      specialties: ['顽固性白癜风', '儿童白癜风', '节段型白癜风'],
      tags: ['白癜风权威', '308激光专家']
    },
    {
      id: '2',
      name: '李雪梅',
      title: '副主任医师',
      department: '儿童皮肤科',
      hospital: '复旦大学医学院',
      experience: 18,
      score: 4.9,
      cases: 12000,
      specialties: ['儿童白癜风', '儿童湿疹', '儿童过敏性皮肤病'],
      tags: ['儿童皮肤专家', '温柔耐心']
    },
    {
      id: '3',
      name: '张明远',
      title: '主任医师',
      department: '银屑病科',
      hospital: '中国医学科学院',
      experience: 22,
      score: 4.8,
      cases: 13500,
      specialties: ['难治性银屑病', '生物制剂治疗', '银屑病关节炎'],
      tags: ['银屑病权威', '生物制剂专家']
    },
    {
      id: '4',
      name: '陈志远',
      title: '副主任医师',
      department: '白癜风科',
      hospital: '北京大学医学部',
      experience: 15,
      score: 4.8,
      cases: 9800,
      specialties: ['308激光治疗', '光疗', '白癜风外科治疗'],
      tags: ['激光治疗专家']
    },
    {
      id: '5',
      name: '刘芳芳',
      title: '主治医师',
      department: '银屑病科',
      hospital: '北京中医药大学',
      experience: 10,
      score: 4.7,
      cases: 6500,
      specialties: ['银屑病中医调理', '中西医结合治疗'],
      tags: ['中西医结合', '银屑病管理']
    },
    {
      id: '6',
      name: '赵小燕',
      title: '主治医师',
      department: '儿童皮肤科',
      hospital: '首都医科大学',
      experience: 8,
      score: 4.7,
      cases: 5200,
      specialties: ['儿童过敏性皮肤病', '儿童荨麻疹'],
      tags: ['儿童过敏专家', '湿疹特病']
    },
    {
      id: '7',
      name: '孙美华',
      title: '副主任医师',
      department: '激光美容科',
      hospital: '上海交通大学医学院',
      experience: 12,
      score: 4.7,
      cases: 8900,
      specialties: ['激光美容', '皮肤年轻化', '色斑治疗'],
      tags: ['激光美容专家', '抗衰管理']
    },
    {
      id: '8',
      name: '周海涛',
      title: '主任医师',
      department: '过敏皮肤科',
      hospital: '中国协和医科大学',
      experience: 20,
      score: 4.8,
      cases: 11000,
      specialties: ['过敏性皮肤病', '脱敏治疗', '荨麻疹'],
      tags: ['过敏脱敏权威', '特应性皮炎']
    }
  ],
  articles: [
    {
      slug: 'vitiligo-2026-guide',
      title: '白癜风能治好吗？权威医生详解治疗方案',
      category: '白癜风',
      authorSlug: 'wang-jian-guo',
      excerpt: '白癜风是一种常见的色素脱失性皮肤病，本文从病因、分型、治疗与长期管理角度进行系统说明。',
      tags: ['白癜风治疗', '308激光', '白斑复色'],
      views: 3200,
      publishDate: '2026-04-15',
      readingTime: '8分钟'
    },
    {
      slug: 'laser-308-full-analysis',
      title: '308 准分子激光治疗白癜风全程解析',
      category: '白癜风',
      authorSlug: 'chen-zhi-yuan',
      excerpt: '从适应症、疗程安排到常见副作用，帮助患者建立更合理的治疗预期。',
      tags: ['308激光', '光疗', '白癜风'],
      views: 2600,
      publishDate: '2026-04-10',
      readingTime: '6分钟'
    },
    {
      slug: 'psoriasis-diet-guide',
      title: '银屑病饮食禁忌太多？这些食物要少吃',
      category: '银屑病',
      authorSlug: 'zhang-ming-yuan',
      excerpt: '围绕高糖、高脂、酒精与个体敏感食物，建立更温和的饮食策略。',
      tags: ['银屑病饮食', '生活管理', '皮肤护理'],
      views: 1520,
      publishDate: '2026-04-08',
      readingTime: '5分钟'
    },
    {
      slug: 'children-guide',
      title: '儿童白癜风怎么治？家长必读指南',
      category: '儿童皮肤',
      authorSlug: 'li-xue-mei',
      excerpt: '儿童患者治疗需要兼顾依从性、心理支持和长期复诊安排。',
      tags: ['儿童白癜风', '儿童皮肤', '光疗'],
      views: 980,
      publishDate: '2026-04-05',
      readingTime: '7分钟'
    },
    {
      slug: 'psoriasis-biologic',
      title: '生物制剂治疗银屑病：效果与费用全解析',
      category: '银屑病',
      authorSlug: 'liu-fang-fang',
      excerpt: '适合哪些患者、如何评估风险、如何做长期监测，帮助患者做理性选择。',
      tags: ['生物制剂', '银屑病治疗', '银屑病管理'],
      views: 1400,
      publishDate: '2026-04-02',
      readingTime: '8分钟'
    },
    {
      slug: 'rosacea-guide',
      title: '皮肤发红怎么办？规范化管理建议',
      category: '激光美容',
      authorSlug: 'li-xue-mei',
      excerpt: '围绕屏障修复、生活方式调整与光电方案选择展开。',
      tags: ['玫瑰痤疮', '敏感肌', '皮肤管理'],
      views: 760,
      publishDate: '2026-03-28',
      readingTime: '5分钟'
    }
  ],
  caseStudies: [
    {
      slug: 'vitiligo-face-recovery',
      title: '面部白癜风 5 个月复色案例',
      category: '白癜风',
      patientLabel: '李女士 · 28岁 · 面部局限型',
      doctorSlug: 'wang-jian-guo',
      excerpt: '通过 308 激光联合外用治疗与复诊管理，患者面部白斑在 5 个月内逐步复色。',
      summary: '初诊时患者面部白斑出现 4 个月，面积约 3cm x 5cm，情绪焦虑明显。经伍德灯与病程评估后，制定以光疗联合外用药为主的阶段性治疗方案。',
      heroStats: [
        { value: '5个月', label: '治疗周期' },
        { value: '78%', label: '平均复色面积' },
        { value: '12次', label: '门诊随访' }
      ],
      tags: ['面部白癜风', '308激光', '复色管理'],
      publishDate: '2026-04-18',
      timeline: [
        { stage: '第1周', detail: '完成分型评估与基线拍照，开始 308 激光和外用药治疗。' },
        { stage: '第6周', detail: '边界模糊，点状色素岛出现，调整照射剂量。' },
        { stage: '第12周', detail: '额部与面颊复色明显，进入稳定巩固阶段。' },
        { stage: '第20周', detail: '维持治疗与诱因管理，复诊频率调整为每月一次。' }
      ],
      highlights: [
        '早期面部局限型患者，对规范光疗反应较好。',
        '照片记录帮助医生持续评估复色情况与剂量变化。',
        '治疗后期重点转向维持治疗和复发诱因控制。'
      ],
      qa: [
        {
          question: '为什么这个案例恢复较快？',
          answer: '面部局限型、病程较短且依从性好，是复色更理想的重要原因。'
        },
        {
          question: '治疗结束后还需要复诊吗？',
          answer: '建议继续规律复诊，尤其在换季、作息紊乱或压力增大时做好评估。'
        }
      ]
    },
    {
      slug: 'child-vitiligo-longterm-management',
      title: '儿童白癜风长期管理案例',
      category: '儿童皮肤',
      patientLabel: '刘同学 · 9岁 · 四肢散发型',
      doctorSlug: 'li-xue-mei',
      excerpt: '围绕依从性、家庭护理和低刺激治疗节奏，建立儿童患者更可执行的长期管理方案。',
      summary: '患儿就诊前已自行尝试多种外用药，病情反复。门诊重新梳理病程后，改为更温和的治疗与家庭护理协同方案。',
      heroStats: [
        { value: '8个月', label: '管理周期' },
        { value: '4次', label: '家庭宣教' },
        { value: '4.8', label: '家长满意度' }
      ],
      tags: ['儿童白癜风', '家庭护理', '长期管理'],
      publishDate: '2026-04-09',
      timeline: [
        { stage: '初诊', detail: '停用刺激性方案，建立照片与复诊档案。' },
        { stage: '第2月', detail: '依从性明显提升，皮损边缘趋于稳定。' },
        { stage: '第4月', detail: '增加家庭护理与作息管理，家长能独立记录变化。' },
        { stage: '第8月', detail: '进入维持期，制定学期内复诊计划。' }
      ],
      highlights: [
        '儿童方案更重视安全性和家长执行成本。',
        '家庭护理和复诊节奏同样影响长期疗效。',
        '治疗目标不只是复色，也包括减少反复和心理压力。'
      ],
      qa: [
        {
          question: '儿童患者是否适合长期光疗？',
          answer: '需结合年龄、部位和反应综合判断，由专病医生动态调整频率与剂量。'
        },
        {
          question: '家长最应该坚持什么？',
          answer: '坚持照片记录、规律复诊和日常诱因管理，比频繁更换方案更重要。'
        }
      ]
    },
    {
      slug: 'psoriasis-biologic-followup',
      title: '中重度银屑病生物制剂随访案例',
      category: '银屑病',
      patientLabel: '王先生 · 37岁 · 躯干泛发型',
      doctorSlug: 'zhang-ming-yuan',
      excerpt: '通过系统评估、生物制剂治疗与生活方式管理同步推进，帮助患者降低复发频率。',
      summary: '患者病史超过 10 年，换季反复明显。经门诊重新评估后，采用系统治疗与长期监测的联合方案。',
      heroStats: [
        { value: '6个月', label: '随访周期' },
        { value: 'PASI75', label: '阶段目标' },
        { value: '3次', label: '复发预警评估' }
      ],
      tags: ['银屑病', '生物制剂', '长期随访'],
      publishDate: '2026-03-30',
      timeline: [
        { stage: '初评', detail: '完成严重度与感染风险评估，建立用药前检查档案。' },
        { stage: '第1月', detail: '皮损面积下降，睡眠和情绪管理同步介入。' },
        { stage: '第3月', detail: '达到阶段目标，调整为长期随访模式。' },
        { stage: '第6月', detail: '复发频率下降，完成下一阶段监测计划。' }
      ],
      highlights: [
        '中重度患者更需要系统评估和规范监测。',
        '疗效判断不只看皮损，还要看复发频率和生活质量。',
        '长期管理阶段同样需要饮食、情绪与作息协同。'
      ],
      qa: [
        {
          question: '生物制剂是不是用了就不能停？',
          answer: '应由医生根据反应、复发风险和监测结果决定，不建议自行中断或调整。'
        },
        {
          question: '为什么还要做生活方式管理？',
          answer: '银屑病与压力、睡眠、体重等因素密切相关，长期稳定离不开综合管理。'
        }
      ]
    }
  ]
};
