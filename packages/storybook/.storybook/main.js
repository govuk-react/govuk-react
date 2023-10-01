import { dirname, join } from 'path';
const { webpack: workspaceAliases } = require('workspace-alias');

module.exports = {
  stories: [
    '../src/welcome.mdx',
    '../src/*.mdx',
    '../../../packages/example-application/src/**/?(*.)stories.[jt]s?(x)',
    '../../../components/*/src/**/?(*.)stories.[jt]s?(x)',
    '../../../packages/icons/src/**/?(*.)stories.[jt]s?(x)',
  ],

  addons: ['@storybook/addon-essentials'],

  webpackFinal: async (config) => {
    config.resolve.alias = workspaceAliases();
    return config;
  },

  framework: {
    name: '@storybook/react-webpack5',

    options: {
      fastRefresh: true,
      strictMode: true,
    },
  },
  docs: {
    autodocs: true,
  },
};
