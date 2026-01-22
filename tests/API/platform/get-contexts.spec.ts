import { test, expect } from '@playwright/test';
import { loadEnvironment } from '../../../config';
import { createApiClient } from '../../../utils/api-client';
import { buildPlatformHeaders } from '../../../utils/platform-auth';

const env = loadEnvironment(process.env.ENVIRONMENT);
const shouldSkip = env.platform.adminBaseUrl.includes('example.com');

test.describe('Platform APIs', () => {
  test('health check', async () => {
    test.skip(shouldSkip, 'Configure real platform adminBaseUrl values in config/env/*.ts');

    const api = await createApiClient({
      baseURL: env.platform.adminBaseUrl,
      headers: buildPlatformHeaders(env),
    });

    const response = await api.get('/health');
    expect(response.ok()).toBeTruthy();
  });
});
