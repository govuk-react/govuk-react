// eslint-disable-next-line import/no-extraneous-dependencies
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  component: {
    setupNodeEvents(on, config) {},
    viewportWidth: 640,
    viewportHeight: 800,
    specPattern: 'src/**/*.spec.{js,ts,jsx,tsx}',
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
  },
});
