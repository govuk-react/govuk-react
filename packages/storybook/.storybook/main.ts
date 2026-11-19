import { fileURLToPath } from 'node:url';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../src/welcome.mdx',
    '../src/*.mdx',
    '../../../packages/example-application/src/**/?(*.)stories.[jt]s?(x)',
    '../../govuk-react/src/**/?(*.)stories.[jt]s?(x)',
  ],
  staticDirs: [{ from: '../node_modules/govuk-frontend/dist/govuk/assets', to: '/assets' }],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: { strictMode: true },
  },
  viteFinal: async (viteConfig) => {
    viteConfig.resolve = {
      ...viteConfig.resolve,
      alias: [
        {
          find: /^govuk-react$/,
          replacement: fileURLToPath(new URL('../../govuk-react/src/index.ts', import.meta.url)),
        },
      ],
    };
    return viteConfig;
  },
};

export default config;
