import type { EnvironmentConfig } from './types';

export const env: EnvironmentConfig = {
  name: 'dev',
  platform: {
    loginUrl: 'https://dev-app-services.inceptionai.app/integration-admin/login',
    workspaceSelectionUrl: 'https://dev-app-services.inceptionai.app/integration-admin-srv/api/v1/accounts/{{accountid}}/set',
    analyticsBaseUrl: 'https://dev-app-services.inceptionai.app/analytics-srv/api/v1',
    adminBaseUrl: 'https://dev-app-services.inceptionai.app/integration-admin-srv/api/v1',
    appAdminBaseUrl: 'https://dev-app-services.inceptionai.app/integration-admin/apps',
    appApiBaseUrl: 'https://dev-app-services.inceptionai.app/integration/api/{{app maskid}}/',
  },
  apps: {
    bankassist: 'https://dev-app-services.inceptionai.app/integration/api/{{app maskid}}/',
    inalpha: 'https://dev-app-services.inceptionai.app/integration/api/{{app maskid}}/',
    boardobserver: 'https://dev-app-services.inceptionai.app/integration/api/{{app maskid}}/',
    procureai: 'https://dev-app-services.inceptionai.app/integration/api/{{app maskid}}/',
  },
};
