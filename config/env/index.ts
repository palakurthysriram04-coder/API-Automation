import { env as azuredev } from './azuredev';
import { env as azureprod } from './azureprod';
import { env as demo } from './demo';
import { env as dev } from './dev';
import { env as preprod } from './preprod';
import { env as prod } from './prod';
import { env as qa } from './qa';
import type { EnvironmentConfig } from './types';

const envMap: Record<string, EnvironmentConfig> = {
  azuredev,
  azureprod,
  demo,
  dev,
  preprod,
  prod,
  qa,
};

export const loadEnvironment = (name: string | undefined): EnvironmentConfig => {
  const selected = name ? envMap[name.toLowerCase()] : dev;
  if (!selected) {
    throw new Error(`Unknown environment: ${name}`);
  }

  const accountId = process.env.PLATFORM_ACCOUNT_ID;
  const appMaskId = process.env.APP_MASK_ID;
  const applyTemplate = (value: string): string => {
    let result = value;
    if (accountId) {
      result = result.replace('{{accountid}}', accountId);
    }
    if (appMaskId) {
      result = result.replace('{{app maskid}}', appMaskId);
    }
    return result;
  };

  return {
    ...selected,
    platform: {
      loginUrl: applyTemplate(selected.platform.loginUrl),
      workspaceSelectionUrl: applyTemplate(selected.platform.workspaceSelectionUrl),
      analyticsBaseUrl: applyTemplate(selected.platform.analyticsBaseUrl),
      adminBaseUrl: applyTemplate(selected.platform.adminBaseUrl),
      appAdminBaseUrl: applyTemplate(selected.platform.appAdminBaseUrl),
      appApiBaseUrl: applyTemplate(selected.platform.appApiBaseUrl),
    },
    apps: {
      bankassist: applyTemplate(selected.apps.bankassist),
      inalpha: applyTemplate(selected.apps.inalpha),
      boardobserver: applyTemplate(selected.apps.boardobserver),
      procureai: applyTemplate(selected.apps.procureai),
    },
    auth: {
      apiKey: process.env.PLATFORM_API_KEY,
      bearerToken: process.env.PLATFORM_BEARER_TOKEN,
    },
  };
};
