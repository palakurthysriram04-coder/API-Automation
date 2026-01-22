import type { FullConfig } from '@playwright/test';

const globalSetup = async (_config: FullConfig): Promise<void> => {
  // Reserved for future platform setup (e.g., seeding data) if required.
};

export default globalSetup;
