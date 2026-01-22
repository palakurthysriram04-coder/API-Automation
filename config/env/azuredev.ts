import type { EnvironmentConfig } from './types';

export const env: EnvironmentConfig = {
  name: 'azuredev',
  platform: {
    loginUrl: 'https://workplatform-dev-az.kore.ai/integration-admin-srv/api/v1/login',
    workspaceSelectionUrl: 'https://workplatform-dev-az.kore.ai/integration-admin-srv/api/v1/accounts/{{accountid}}/set',
    analyticsBaseUrl: 'https://workplatform-dev-az.kore.ai/analytics-srv/api/v1',
    adminBaseUrl: 'https://workplatform-dev-az.kore.ai/integration-admin-srv/api/v1',
    appAdminBaseUrl: 'https://workplatform-dev-az.kore.ai/integration-admin/apps',
    appApiBaseUrl: 'https://workplatform-dev-az.kore.ai/integration/api/{{app maskid}}/',
  },
  apps: {
    bankassist: 'https://workplatform-dev-az.kore.ai/integration/api/{{app maskid}}/',
    inalpha: 'https://workplatform-dev-az.kore.ai/integration/api/{{app maskid}}/',
    boardobserver: 'https://workplatform-dev-az.kore.ai/integration/api/{{app maskid}}/',
    procureai: 'https://workplatform-dev-az.kore.ai/integration/api/{{app maskid}}/',
  },
};
