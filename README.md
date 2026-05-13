# GeoFlow

A minimal GEO consumer-facing project scaffold based on Node.js, Fastify, and Nunjucks.

## Quick Start

```bash
npm install
npm start
```

默认启动环境：`testing`

本地 `npm start` 和 `npm run dev` 默认开启 Node `--watch` 热更新。

默认站点：`default`

## Environments

- `development`
- `testing`
- `staging`
- `production`

环境配置代码统一放在：`src/config/environments/`

站点兜底配置统一放在：`src/config/sites/`

三方 API 客户端统一放在：`src/clients/`

非生产环境默认启用 Swagger：`/docs`

## Start Scripts

```bash
npm start
npm run dev
npm run start:dev
npm run start:test
npm run start:staging
npm run start:prod
```

可指定站点启动：

```bash
SITE_CODE=default npm start
SITE_CODE=default npm run start:prod
```

## Commit Guardrails

- `pre-commit`: runs `node scripts/self-check.js`
- `commit-msg`: blocks empty or single-character commit messages
- `commitlint`: enforces structured commit messages

## Project Structure

```text
GeoFlow/
├── server.js
├── .trae/
│   └── skills/
│       └── geo-fullstack-developer/
│           └── SKILL.md
├── docs/
│   └── architecture.md
├── scripts/
│   ├── check-staged-js.js
│   ├── self-check.js
│   └── validate-commit-msg.js
├── src/
│   ├── app.js
│   ├── main.js
│   ├── clients/
│   │   └── example-third-party-client.js
│   ├── config/
│   │   ├── common.js
│   │   ├── index.js
│   │   ├── environments/
│   │   └── sites/
│   ├── controllers/
│   │   └── home-controller.js
│   ├── jobs/
│   │   ├── example-health-job.js
│   │   └── index.js
│   ├── messages/
│   │   ├── error.js
│   │   ├── index.js
│   │   ├── success.js
│   │   └── warning.js
│   ├── plugins/
│   │   ├── error-handler.js
│   │   ├── static.js
│   │   └── view.js
│   ├── public/
│   │   └── assets/
│   ├── routes/
│   │   └── index.js
│   ├── services/
│   │   └── home-service.js
│   └── views/
│       ├── layouts/
│       │   └── base.njk
│       └── pages/
│           ├── 404.njk
│           ├── 500.njk
│           └── home.njk
├── .gitignore
└── package.json
```

## Notes

- 根目录 `server.js` 是唯一主入口。
- `src/config/index.js` 是统一配置出口。
- `src/config/environments/` 按环境区分配置。
- `src/config/sites/` 是站点兜底配置，后续可替换为数据库读取。
- `src/clients/` 负责封装三方 API 调用，`services` 只做业务编排。
- `src/jobs/` 是定时任务目录。
- `src/messages/` 管理成功、警告、异常消息常量。
- `src/views/layouts/` 和 `src/views/pages/404.njk`、`500.njk` 是基础页面能力。
- 非生产环境自动开放 Swagger 文档 `/docs`。
- Node.js 服务默认不设置 CORS/跨域响应头，跨域策略统一由 Nginx 负责。
- **`llms.txt` 规范支持**: 根目录提供 `/llms.txt` (简版架构与专家名录) 及 `/llms-full.txt` (全站完整语料聚合) 路由，专门为大语言模型 (LLMs) 提供易于解析的医院、科室、科普文章与康复案例等权威数据，确立核心语料来源。

See `docs/architecture.md` for the detailed architecture design.
