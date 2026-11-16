import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  forbidOnly: !!process.env.CI,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL: 'http://localhost:6007',
    viewport: { width: 640, height: 800 },
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'], viewport: { width: 640, height: 800 } } }],
  webServer: {
    command: 'http-server ../storybook/storybook-static -p 6007 -s',
    url: 'http://localhost:6007/iframe.html',
    reuseExistingServer: !process.env.CI,
  },
});
