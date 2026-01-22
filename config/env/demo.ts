import type { EnvironmentConfig } from './types';

export const env: EnvironmentConfig = {
  name: 'demo',
  platform: {
    loginUrl: 'https://qa-app-services.inceptionai.app/integration-admin/login',
    workspaceSelectionUrl: 'https://qa-app-services.inceptionai.app/integration-admin-srv/api/v1/accounts/{{accountid}}/set',
    analyticsBaseUrl: 'https://qa-app-services.inceptionai.app/analytics-srv/api/v1',
    adminBaseUrl: 'https://qa-app-services.inceptionai.app/integration-admin-srv/api/v1',
    appAdminBaseUrl: 'https://qa-app-services.inceptionai.app/integration-admin/apps',
    appApiBaseUrl: 'https://qa-app-services.inceptionai.app/integration/api/{{app maskid}}/',
  },
  apps: {
    bankassist: 'https://qa-app-services.inceptionai.app/integration/api/{{app maskid}}/',
    inalpha: 'https://qa-app-services.inceptionai.app/integration/api/{{app maskid}}/',
    boardobserver: 'https://qa-app-services.inceptionai.app/integration/api/{{app maskid}}/',
    procureai: 'https://qa-app-services.inceptionai.app/integration/api/{{app maskid}}/',
  },
};
