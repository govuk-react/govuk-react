// TODO: consider replacing this with a generator such as:
// https://github.com/CVarisco/create-component-app

const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp-promise');
const { version } = require('../lerna.json');

const componentFolderName = process.argv[2];
const componentName = `${componentFolderName.charAt(0).toUpperCase()}${componentFolderName.slice(1).replace(/-([a-z])/g, g => g[1].toUpperCase())}`;

const folderName = `./components/${componentFolderName}`;

const writeFile = (filename, contents) => {
  const pathName = path.join(filename === 'package.json' ? folderName : `${folderName}/src`, filename);
  fs.writeFile(pathName, `${contents}`, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log(`Created file: ${pathName}`);
    return false;
  });
  return false;
};

// write packageJson file
const packageJson = () => {
  const filename = 'package.json';
  // TODO: this should pull in devDependencies version numbers from package.json
  // in the root or from another component so it doesn't need to be maintained.
  // also I'm not sure we need the storybook addons for all components,
  // can be added manually per component perhaps.
  const contents = `{
  "name": "@govuk-react/${componentFolderName}",
  "version": "${version}",
  "dependencies": {
    "@govuk-react/lib": "^${version}",
    "govuk-colours": "^1.0.3"
  },
  "peerDependencies": {
    "react": ">=16.2.0",
    "styled-components": ">=4"
  },
  "scripts": {
    "build": "yarn build:lib && yarn build:es",
    "build:lib": "rimraf lib && babel src -d lib --source-maps --config-file ../../babel.config.js",
    "build:es": "rimraf es && cross-env BABEL_ENV=es babel src -d es --source-maps --config-file ../../babel.config.js",
    "docs": "doc-component ./lib/index.js ./README.md"
  },
  "main": "lib/index.js",
  "module": "es/index.js",
  "author": "Alasdair McLeay",
  "license": "MIT",
  "homepage": "https://github.com/govuk-react/govuk-react/tree/master/components/${componentFolderName}",
  "description": "govuk-react ${componentName} component.",
  "private": false,
  "publishConfig": {
    "access": "public"
  }
}
`;
  writeFile(filename, contents);
};

// write test.js file
const testScript = () => {
  const filename = 'test.js';
  const contents = `import React from 'react';
import { mount } from 'enzyme';

import Example from './fixtures';

describe('${componentName}', () => {
  it('matches snapshot', () => {
    expect(mount(<Example />)).toMatchSnapshot('${componentName}');
  });
});
`;
  writeFile(filename, contents);
};

// write stories.js file
const storiesScript = () => {
  const filename = 'stories.js';
  const contents = `import { storiesOf } from '@storybook/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import ${componentName} from './fixtures';

import ReadMe from '../README.md';

const stories = storiesOf('${componentName}', module);
stories.addDecorator(WithDocsCustom(ReadMe));

stories.add('Component default', ${componentName});
`;
  writeFile(filename, contents);
};

// write fixtures.js file
const exampleScript = () => {
  const filename = 'fixtures.js';
  const contents = `import React from 'react';
import ${componentName} from '.';

export default () => <${componentName}>${componentName} example</${componentName}>;
`;
  writeFile(filename, contents);
};

// write index.js file
const indexScript = () => {
  const filename = 'index.js';
  const contents = `import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { spacing, typography } from '@govuk-react/lib';

const ${componentName} = styled('div')(
  typography.font({ size: 16 }),
  spacing.withWhiteSpace(),
);

/**
 *
 * ### Usage
 *
 * Simple
 * \`\`\`jsx
 * <${componentName}>Example</${componentName}>
 * \`\`\`
 *
 * ### References
 * - TODO: INSERT A REFERENCE TO EXTERNAL URL IF POSSIBLE
 */
const ${componentName}Documented = props => <${componentName} {...props} />;

${componentName}Documented.propTypes = {
  children: PropTypes.node.isRequired,
};

${componentName}.propTypes = ${componentName}Documented.propTypes;

export { ${componentName}Documented };
export default ${componentName};
`;
  writeFile(filename, contents);
};

const init = () => {
  if (fs.existsSync(path.join(folderName))) {
    console.log(`❗️❗️ The component '${componentName}' already exists ❗️❗️
Please use a different name or delete the existing folder 🆗`);
    return false;
  }
  mkdirp(`${folderName}/src`).then(() => {
    packageJson();
    testScript();
    storiesScript();
    exampleScript();
    indexScript();
    console.log(`✅  The component '${componentName}' was created successfully`);
  });
  return false;
};

init();
