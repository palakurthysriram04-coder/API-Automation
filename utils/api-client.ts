import { request } from '@playwright/test';
import type { APIRequestContext } from '@playwright/test';

export type ApiClientOptions = {
  baseURL: string;
  headers?: Record<string, string>;
};

export const createApiClient = async ({ baseURL, headers }: ApiClientOptions): Promise<APIRequestContext> => {
  return request.newContext({
    baseURL,
    extraHTTPHeaders: headers,
  });
};
