const path = require('path');
const fs = require('fs');

const aliasToSrc = require('./aliasToSrc');

// https://stackoverflow.com/questions/18112204/get-all-directories-within-directory-nodejs?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
const dirs = p => fs.readdirSync(p).filter(f => fs.statSync(path.join(p, f)).isDirectory()).map(f => path.join(p, f));

module.exports = (baseConfig, env, defaultConfig) => {

  // Include PNGs imported from node_modules
  defaultConfig.module.rules.push({
    test: /\.png/,
    loaders: ["url-loader"],
    include: path.resolve(__dirname, '../../..')
  });
  // make babel-loader process components and packages src folder
  defaultConfig.module.rules[0].include.push(/\/(packages|components)\/[^/]+\/src/);
  defaultConfig.module.rules[0].use[0].options.rootMode = "upward";

  // when one component depends on another, we want to webpack to load from the component's src folder so that it auto refreshes when there are changes
  defaultConfig.resolve.alias = {
    ...defaultConfig.resolve.alias,
    ...aliasToSrc(dirs('../../components')),
    ...aliasToSrc(dirs('../../packages'))
  }

  return defaultConfig;
};
