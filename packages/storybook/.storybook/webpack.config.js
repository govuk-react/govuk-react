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
  // make babel-loader process components folder
  config.module.rules[0].include.push(path.resolve('../../components'));
  config.module.rules[0].include.push(path.resolve('../../packages'));

  return config;
};
