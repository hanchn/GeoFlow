# GEO C-end Project Architecture

## Goals

This project is a consumer-facing GEO web application based on Node.js, Fastify, and Nunjucks.
The architecture targets these goals:

- Fast initial rendering through server-side template output.
- Clear separation between HTTP access, business logic, and view rendering.
- Easy expansion from a single landing page to multiple channels, campaigns, and content pages.
- Low mental overhead for small-team delivery.

## Architectural Style

Recommended style: layered monolith.

Layers:
- Entry layer: `server.js`, `app.js`
- Infrastructure layer: `config`, `plugins`, `middlewares`, `utils`
- Interface layer: `routes`, `controllers`
- Domain/application layer: `services`
- Presentation layer: `views`

## Request Flow

1. `server.js` starts the Fastify instance.
2. `app.js` registers shared plugins and routes.
3. A request enters a route handler.
4. The controller normalizes request data.
5. The service assembles page data.
6. The controller renders a Nunjucks template.

## Environment Strategy

The project supports four environments:

- `development`
- `testing`
- `staging`
- `production`

Each environment maps to a dedicated file:

- `.env.development`
- `.env.testing`
- `.env.staging`
- `.env.production`

`src/config/env.js` selects the file by `APP_ENV`.

## Error Interception

Use a dedicated Fastify plugin to centralize:

- Uncaught application errors
- Unified API error responses
- SSR error page rendering
- 404 fallback handling

This keeps controllers focused on normal business flow.

## Commit Guardrails

Recommended commit protection chain:

- `husky pre-commit`: runs project self-check
- `husky commit-msg`: blocks empty and single-character messages
- `commitlint`: enforces standardized commit message format

## Module Boundaries

### `src/config`

- Reads environment variables.
- Exposes app host, port, runtime mode, and view directory.

### `src/plugins`

- Registers Fastify plugins.
- Encapsulates framework wiring such as the Nunjucks view engine.

### `src/routes`

- Defines the URL space.
- Keeps route registration explicit.

### `src/controllers`

- Handles transport-layer coordination.
- Calls services and decides whether to render a page or return JSON.

### `src/services`

- Owns business assembly.
- Connects future databases, CMS, or third-party APIs.

### `src/views`

- `layouts`: shared page skeleton.
- `pages`: concrete screens.
- Future `partials` and `macros`: reusable fragments.

## Recommended Expansion Path

1. Add `src/routes/api` for API endpoints.
2. Add `src/views/partials` and `src/views/macros` for reusable template blocks.
3. Add `src/repositories` when data access becomes complex.
4. Add CMS, search, or analytics clients as isolated modules.
5. Add route and integration tests for key pages.
