const path = require('path');
const fs = require('fs');
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

const aliasToSrc = require('./aliasToSrc');

// https://stackoverflow.com/questions/18112204/get-all-directories-within-directory-nodejs?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
const dirs = p => fs.readdirSync(p).filter(f => fs.statSync(path.join(p, f)).isDirectory()).map(f => path.join(p, f));

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  // Include PNGs imported from node_modules
  config.module.rules.push({
    test: /\.png/,
    loaders: ["url-loader"],
    include: path.resolve(__dirname, '../../..')
  });
  // make babel-loader process components and packages src folder
  config.module.rules[0].include.push(/\/(packages|components)\/[^/]+\/src/);

  // when one component depends on another, we want to webpack to load from the component's src folder so that it auto refreshes when there are changes
  config.resolve.alias = {
    ...config.resolve.alias,
    ...aliasToSrc(dirs('../../components')),
    ...aliasToSrc(dirs('../../packages'))
  }

  return config;
};
