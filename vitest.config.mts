import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react({ babel: { plugins: ['babel-plugin-styled-components'] } })],
  resolve: {
    alias: [
      {
        find: /^govuk-react$/,
        replacement: fileURLToPath(new URL('./packages/govuk-react/src/index.ts', import.meta.url)),
      },
    ],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['packages/*/src/**/?(*.)test.[jt]s?(x)'],
    setupFiles: ['./scripts/setupTests.ts'],
    coverage: {
      include: ['packages/*/src/**/*.[jt]s?(x)'],
      exclude: [
        '**/{stories,example,fixtures,test}.[jt]s?(x)',
        'packages/storybook/**',
        'packages/api-docs/**',
        'packages/example-application/**',
      ],
    },
  },
});
