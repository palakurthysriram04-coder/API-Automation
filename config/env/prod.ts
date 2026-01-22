import type { EnvironmentConfig } from './types';

export const env: EnvironmentConfig = {
  name: 'prod',
  platform: {
    loginUrl: 'https://app-services.inceptionai.ai/integration-admin/login',
    workspaceSelectionUrl: 'https://app-services.inceptionai.ai/integration-admin-srv/api/v1/accounts/{{accountid}}/set',
    analyticsBaseUrl: 'https://app-services.inceptionai.ai/analytics-srv/api/v1',
    adminBaseUrl: 'https://app-services.inceptionai.ai/integration-admin-srv/api/v1',
    appAdminBaseUrl: 'https://app-services.inceptionai.ai/integration-admin/apps',
    appApiBaseUrl: 'https://app-services.inceptionai.ai/integration/api/{{app maskid}}/',
  },
  apps: {
    bankassist: 'https://app-services.inceptionai.ai/integration/api/{{app maskid}}/',
    inalpha: 'https://app-services.inceptionai.ai/integration/api/{{app maskid}}/',
    boardobserver: 'https://app-services.inceptionai.ai/integration/api/{{app maskid}}/',
    procureai: 'https://app-services.inceptionai.ai/integration/api/{{app maskid}}/',
  },
};
