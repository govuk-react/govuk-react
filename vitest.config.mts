import { createRequire } from 'node:module';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

const require = createRequire(import.meta.url);
const { rollup: workspaceAliases } = require('workspace-alias');

export default defineConfig({
  plugins: [react({ babel: { plugins: ['babel-plugin-styled-components'] } })],
  resolve: {
    alias: Object.entries<string>(workspaceAliases()).map(([name, entry]) => ({
      find: new RegExp(`^${name}$`),
      replacement: entry,
    })),
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['{components,packages}/*/src/**/?(*.)test.[jt]s?(x)'],
    setupFiles: ['./scripts/setupTests.ts'],
    coverage: {
      include: ['{components,packages}/*/src/**/*.[jt]s?(x)'],
      exclude: [
        '**/{stories,example,fixtures,test}.[jt]s?(x)',
        'packages/storybook/**',
        'packages/api-docs/**',
        'packages/example-application/**',
      ],
    },
  },
});
