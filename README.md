# Playwright API Automation Framework (TypeScript)

This repository provides a scalable Playwright framework for API testing of:
- The **platform APIs** (authentication/management)
- The **application APIs** (BankAssist, InAlpha, BoardObserver, ProcureAI)

It is built to **extend into UI testing** by adding tests under `tests/UI` using the same environment configuration.

## 1) Install

```bash
npm install
```

## 2) Configure environments

Edit the base URLs in `config/env/*.ts` and set the desired environment in `.env`.
Platform URLs are stored per environment (login, workspace selection, analytics, admin, app admin, and app API base).

Example `.env`:

```bash
ENVIRONMENT=qa
PLATFORM_API_KEY=your-key
PLATFORM_BEARER_TOKEN=
PLATFORM_ACCOUNT_ID=your-account-id
APP_MASK_ID=your-app-mask-id
ALLURE=true
```

> `ENVIRONMENT` supports: `azuredev`, `azureprod`, `dev`, `qa`, `preprod`, `prod`, `demo`.

Template values like `{{accountid}}` and `{{app maskid}}` are replaced automatically using `PLATFORM_ACCOUNT_ID`
and `APP_MASK_ID`. If the variables are not set, the placeholder remains and related tests will be skipped.

## 3) Run API tests

```bash
npm run test:api
```

## 4) Run UI tests (future-ready)

Create UI specs under `tests/UI`. When ready, run:

```bash
npm run test:ui
```

## 5) Allure reports (no code changes)

Set `ALLURE=true` in `.env` or your CI environment, then run tests. Results will be written to `allure-results`.

```bash
ALLURE=true npm run test:api
```

To serve the report locally:

```bash
npm run allure:serve
```

## 6) Jenkins setup (single repo, separate jobs)

Create two Jenkins jobs that point to the same Bitbucket repository:

**Job A: API tests**
1. Checkout from Bitbucket.
2. Install dependencies: `npm ci`.
3. Run: `npm run test:api`.

**Job B: UI tests**
1. Checkout from Bitbucket.
2. Install dependencies: `npm ci`.
3. Run: `npm run test:ui`.

Both jobs can share the same environment variables (e.g., `ENVIRONMENT`, `ALLURE`, and any auth secrets).

## 7) Project structure

```
playwright-api-framework/
├── config/
│   ├── env/
│   ├── products/
├── utils/
├── tests/
│   ├── API/
│   └── UI/
├── playwright.api.config.ts
├── .env.example
├── package.json
├── README.md
```

## 8) Notes

- App flows are **not dependent** on platform login APIs; app tests can call their APIs directly.
- Update `config/products/*` to match each app’s flow endpoints.
- The Azure prod/demo environment URLs are placeholders and should be updated to match your deployment.
