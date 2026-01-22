import type { EnvironmentConfig } from '../config';

export const buildPlatformHeaders = (env: EnvironmentConfig): Record<string, string> => {
  if (env.auth?.bearerToken) {
    return { Authorization: `Bearer ${env.auth.bearerToken}` };
  }
  if (env.auth?.apiKey) {
    return { 'x-api-key': env.auth.apiKey };
  }
  return {};
};
