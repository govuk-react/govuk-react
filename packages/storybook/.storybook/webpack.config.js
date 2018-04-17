const path = require('path');
const fs = require('fs');
// load the default config generator.
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

// https://stackoverflow.com/questions/18112204/get-all-directories-within-directory-nodejs?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
const dirs = p => fs.readdirSync(p).filter(f => fs.statSync(path.join(p, f)).isDirectory()).map(f => path.join(p, f));

const dontAlias = ["@govuk-react/images"];

// set up a webpack alias object for a given array of packages, that point to the src folder of those packages
const aliasToSrc = packages => {
  return packages.reduce((acc, package) => {
    try {
      const { name } = require(path.join(process.cwd(), package, 'package.json'));
      if (dontAlias.includes(name)) {
        return acc;
      }
      const srcPath = path.join(process.cwd(), package, 'src');
      return {
        ...acc,
        [name]: srcPath
      }
    } catch(e) {
      console.error(`Could not load ${package}, ignoring`);
      return acc
    }
  }, {});
}

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
  const components = aliasToSrc(dirs('../../components'));
  const packages = aliasToSrc(dirs('../../packages'));

  config.resolve.alias = {
    ...config.resolve.alias,
    ...components,
    ...packages
  }

  console.log(config.resolve.alias);

  return config;
};
