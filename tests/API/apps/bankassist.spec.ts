import { test, expect } from '@playwright/test';
import { loadEnvironment, products } from '../../../config';
import { createApiClient } from '../../../utils/api-client';

const env = loadEnvironment(process.env.ENVIRONMENT);
const shouldSkip = env.apps.bankassist.includes('{{');

const bankAssistFlows = products.bankAssist.flows;

test.describe('BankAssist app flows', () => {
  test('health check', async () => {
    test.skip(shouldSkip, 'Configure real BankAssist app base URL values in config/env/*.ts');

    const api = await createApiClient({ baseURL: env.apps.bankassist });
    const response = await api.get(bankAssistFlows.health);
    expect(response.ok()).toBeTruthy();
  });
});
