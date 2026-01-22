import 'dotenv/config';
import { defineConfig } from '@playwright/test';
import { loadEnvironment } from './config';

const env = loadEnvironment(process.env.ENVIRONMENT);

const reporters = process.env.ALLURE === 'true'
  ? [['list'], ['allure-playwright', { outputFolder: 'allure-results' }]]
  : [['list']];

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  expect: {
    timeout: 10_000,
  },
  reporter: reporters,
  use: {
    baseURL: env.platform.adminBaseUrl,
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'api',
      testMatch: /API\/.*\.spec\.ts/,
      globalSetup: './tests/API/platform/global-setup.ts',
    },
    {
      name: 'ui',
      testMatch: /UI\/.*\.spec\.ts/,
      use: {
        baseURL: env.platform.appAdminBaseUrl,
      },
    },
  ],
});
