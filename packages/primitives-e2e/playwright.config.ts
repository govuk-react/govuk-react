import { defineConfig, devices } from '@playwright/test';

// Tests the production build, served by `astro preview`.
export default defineConfig({
  testDir: './e2e/tests',
  // Needs a development React build: run with playwright.hydration.config.ts.
  testIgnore: '**/hydration-warnings.spec.ts',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL: 'http://localhost:4321',
    trace: 'retain-on-failure',
    // Lets a machine with its own Chromium use it instead of Playwright's download.
    launchOptions: { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH },
  },
  webServer: {
    command: 'pnpm build:site && pnpm preview',
    url: 'http://localhost:4321',
    reuseExistingServer: false,
    timeout: 120_000,
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
});
