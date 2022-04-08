const { webpack: workspaceAliases } = require('workspace-alias');

module.exports = {
  stories: [
    '../src/stories.mdx',
    '../src/*.stories.mdx',
    '../../../packages/example-application/src/**/?(*.)stories.[jt]s?(x)',
    '../../../components/*/src/**/?(*.)stories.[jt]s?(x)',
    '../../../packages/icons/src/**/?(*.)stories.[jt]s?(x)',
  ],
  addons: ['@storybook/addon-actions', '@storybook/addon-docs', '@storybook/addon-controls'],
  webpackFinal: async (config) => {
    config.resolve.alias = workspaceAliases();
    return config;
  },
  reactOptions: {
    fastRefresh: true,
    strictMode: true,
  },
};
