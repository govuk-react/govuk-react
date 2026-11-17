import { defineConfig, devices } from '@playwright/test';

// Builds with development React, so hydration mismatches are logged as errors.
export default defineConfig({
  testDir: './e2e/tests',
  testMatch: '**/hydration-warnings.spec.ts',
  forbidOnly: !!process.env.CI,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL: 'http://localhost:4321',
    trace: 'retain-on-failure',
    // Lets a machine with its own Chromium use it instead of Playwright's download.
    launchOptions: { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH },
  },
  webServer: {
    command: 'E2E_DEV_REACT=true pnpm build:site && pnpm preview',
    url: 'http://localhost:4321',
    reuseExistingServer: false,
    timeout: 120_000,
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
});
