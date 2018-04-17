const path = require('path');

// set up a webpack alias object for a given array of packages, that point to the src folder of those packages
const aliasToSrc = (packages, dontAlias = ["@govuk-react/images"]) => {
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

module.exports = aliasToSrc;
