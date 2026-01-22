export type AppEndpoints = {
  bankassist: string;
  inalpha: string;
  boardobserver: string;
  procureai: string;
};

export type PlatformEndpoints = {
  loginUrl: string;
  workspaceSelectionUrl: string;
  analyticsBaseUrl: string;
  adminBaseUrl: string;
  appAdminBaseUrl: string;
  appApiBaseUrl: string;
};

export type EnvironmentConfig = {
  name: string;
  platform: PlatformEndpoints;
  apps: AppEndpoints;
  auth?: {
    apiKey?: string;
    bearerToken?: string;
  };
};
