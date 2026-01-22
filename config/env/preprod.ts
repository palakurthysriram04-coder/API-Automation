import type { EnvironmentConfig } from './types';

export const env: EnvironmentConfig = {
  name: 'preprod',
  platform: {
    loginUrl: 'https://preprod-app-services.inceptionai.app/integration-admin/login',
    workspaceSelectionUrl: 'https://preprod-app-services.inceptionai.app/integration-admin-srv/api/v1/accounts/{{accountid}}/set',
    analyticsBaseUrl: 'https://preprod-app-services.inceptionai.app/analytics-srv/api/v1',
    adminBaseUrl: 'https://preprod-app-services.inceptionai.app/integration-admin-srv/api/v1',
    appAdminBaseUrl: 'https://preprod-app-services.inceptionai.app/integration-admin/apps',
    appApiBaseUrl: 'https://preprod-app-services.inceptionai.app/integration/api/{{app maskid}}/',
  },
  apps: {
    bankassist: 'https://preprod-app-services.inceptionai.app/integration/api/{{app maskid}}/',
    inalpha: 'https://preprod-app-services.inceptionai.app/integration/api/{{app maskid}}/',
    boardobserver: 'https://preprod-app-services.inceptionai.app/integration/api/{{app maskid}}/',
    procureai: 'https://preprod-app-services.inceptionai.app/integration/api/{{app maskid}}/',
  },
};
