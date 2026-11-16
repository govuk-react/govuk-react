import { createRequire } from 'node:module';
import type { StorybookConfig } from '@storybook/react-vite';

const require = createRequire(import.meta.url);
const { rollup: workspaceAliases } = require('workspace-alias');

const config: StorybookConfig = {
  stories: [
    '../src/welcome.mdx',
    '../src/*.mdx',
    '../../../packages/example-application/src/**/?(*.)stories.[jt]s?(x)',
    '../../../components/*/src/**/?(*.)stories.[jt]s?(x)',
    '../../../packages/icons/src/**/?(*.)stories.[jt]s?(x)',
  ],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: { strictMode: true },
  },
  viteFinal: async (viteConfig) => {
    const aliases = Object.entries<string>(workspaceAliases()).map(([name, entry]) => ({
      find: new RegExp(`^${name}$`),
      replacement: entry,
    }));
    viteConfig.resolve = { ...viteConfig.resolve, alias: [...aliases] };
    return viteConfig;
  },
};

export default config;
