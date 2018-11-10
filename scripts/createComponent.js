// TODO: consider replacing this with a generator such as:
// https://github.com/CVarisco/create-component-app

const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp-promise');
const { version } = require('../lerna.json')

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
  "private": false,
  "publishConfig": {
    "access": "public"
  },
  "dependencies": {
    "govuk-colours": "^1.0.3"
  },
  "peerDependencies": {
    "emotion": ">=9",
    "react-emotion": ">=9",
    "prop-types": ">=15",
    "react": ">=15"
  },
  "scripts": {
    "build": "npm run build:lib && npm run build:es",
    "build:lib": "rimraf lib && babel src -d lib --source-maps --config-file ../../babel.config.js",
    "build:es": "rimraf es && cross-env BABEL_ENV=es babel src -d es --source-maps --config-file ../../babel.config.js"
  },
  "main": "lib/index.js",
  "module": "es/index.js"
}
`;
  writeFile(filename, contents);
};

// write test.js file
const testScript = () => {
  const filename = 'test.js';
  const contents = `import React from 'react';
import ReactDOM from 'react-dom';
import Example from './fixtures';

describe(${componentName}, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Example />, div);
  });
});
`;
  writeFile(filename, contents);
};

// write stories.js file
const storiesScript = () => {
  const filename = 'stories.js';
  const contents = `import { storiesOf } from '@storybook/react';

import Example from './fixtures';

storiesOf('${componentName}', module).add('${componentName}', Example);
`;
  writeFile(filename, contents);
};

// write example.js file
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
  const contents = `// TODO: INSERT A COMMENT REFERENCE TO EXTERNAL URL IF POSSIBLE

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import {
  FONT_SIZE,
  LINE_HEIGHT,
  MEDIA_QUERIES,
  NTA_LIGHT,
} from '@govuk-react/constants';

const ${componentName}Inner = styled('div')({
  boxSizing: 'border-box',
  fontFamily: NTA_LIGHT,
  fontWeight: 400,
  textTransform: 'none',
  fontSize: FONT_SIZE.SIZE_14,
  lineHeight: LINE_HEIGHT.SIZE_14,
  width: '100%',
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: FONT_SIZE.SIZE_16,
    lineHeight: LINE_HEIGHT.SIZE_16,
  },
});

const ${componentName} = ({ children }) => (
  <${componentName}Inner>{children}</${componentName}Inner>
);

${componentName}.propTypes = {
  children: PropTypes.node.isRequired,
};

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
