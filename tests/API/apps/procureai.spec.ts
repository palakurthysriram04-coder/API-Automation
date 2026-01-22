import { test, expect } from '@playwright/test';
import { loadEnvironment, products } from '../../../config';
import { createApiClient } from '../../../utils/api-client';

const env = loadEnvironment(process.env.ENVIRONMENT);
const shouldSkip = env.apps.procureai.includes('{{');

const procureFlows = products.procureAI.flows;

test.describe('ProcureAI app flows', () => {
  test('health check', async () => {
    test.skip(shouldSkip, 'Configure real ProcureAI app base URL values in config/env/*.ts');

    const api = await createApiClient({ baseURL: env.apps.procureai });
    const response = await api.get(procureFlows.health);
    expect(response.ok()).toBeTruthy();
  });
});
