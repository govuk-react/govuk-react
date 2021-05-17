const { webpack: lernaAliases } = require('lerna-alias');

module.exports = {
  stories: ['../../../@(packages|components)/!(icons)/**/src/**/stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-knobs'],
  webpackFinal: async config => {
    config.resolve.alias = lernaAliases();
    return config;
  },
};
