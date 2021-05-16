const path = require('path');
const fs = require('fs');
const { webpack: lernaAliases } = require('lerna-alias')

// https://stackoverflow.com/questions/18112204/get-all-directories-within-directory-nodejs?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
const dirs = p =>
  fs
    .readdirSync(p)
    .filter(f => fs.statSync(path.join(p, f)).isDirectory())
    .map(f => path.join(p, f));

module.exports = ({ config: defaultConfig }) => {
  // make babel-loader process components and packages src folder
  const pathRegex = new RegExp(`\\${path.sep}(packages|components)\\${path.sep}[^\\${path.sep}]+\\${path.sep}src`);
  defaultConfig.module.rules[0].include.push(pathRegex);
  // use babel.config.js from the monorepo root by telling babel to search upward beyond storybook package.json
  defaultConfig.module.rules[0].use[0].options.rootMode = 'upward';

  // when one component depends on another, we want to webpack to load from the component's src folder so that it auto refreshes when there are changes
  defaultConfig.resolve.alias = lernaAliases();

  return defaultConfig;
};
