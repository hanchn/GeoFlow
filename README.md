# GeoFlow

A minimal GEO consumer-facing project scaffold based on Node.js, Fastify, and Nunjucks.

## Quick Start

```bash
npm install
npm run dev
```

Default local URL: `http://localhost:3000`

## Project Structure

```text
GeoFlow/
├── .trae/
│   └── skills/
│       └── geo-fullstack-developer/
│           └── SKILL.md
├── docs/
│   └── architecture.md
├── src/
│   ├── app.js
│   ├── server.js
│   ├── config/
│   │   └── env.js
│   ├── controllers/
│   │   └── home-controller.js
│   ├── plugins/
│   │   └── view.js
│   ├── routes/
│   │   └── index.js
│   ├── services/
│   │   └── home-service.js
│   └── views/
│       ├── layouts/
│       │   └── base.njk
│       └── pages/
│           └── home.njk
├── .gitignore
└── package.json
```

## Notes

- `server.js` is the startup entry.
- `app.js` builds the Fastify instance.
- `routes` defines endpoints.
- `controllers` coordinates request and response handling.
- `services` composes business data.
- `views` contains Nunjucks templates.

See `docs/architecture.md` for the detailed architecture design.
