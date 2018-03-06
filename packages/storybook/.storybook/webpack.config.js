const path = require('path');

// load the default config generator.
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  // Include PNGs imported from node_modules
  config.module.rules.push({
    test: /\.png/,
    loaders: ["url-loader"],
    include: path.resolve(__dirname, '../../..')
  });
  // configuration for adding specific rules can be found here:
  // https://storybook.js.org/configurations/custom-webpack-config/#full-control-mode

  return config;
};
