
module.exports = {
  stories: [
    '../src/stories.mdx',
    '../src/*.stories.mdx',
    '../../../packages/example-application/src/**/stories.[jt]s?(x)',
    '../../../components/*/src/**/stories.[jt]s?(x)',
    '../../../packages/hoc/src/**/stories.[jt]s?(x)',
    '../../../packages/icons/src/**/stories.[jt]s?(x)',
  ],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-knobs', '@storybook/addon-docs'],
  typescript: {
    reactDocgen: 'react-docgen',
  }
};