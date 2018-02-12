// TODO consider replacing this with a generator such as:
// https://github.com/CVarisco/create-component-app

const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");

const commandLineArgs = process.argv[2];
const componentName = `${commandLineArgs
  .charAt(0)
  .toUpperCase()}${commandLineArgs.slice(1)}`;

const folderName = `./src/components/${componentName}`;

/* eslint no-console: 0 */
const createFolder = () => {
  mkdirp(folderName, err => {
    if (err) {
      console.error(err);
    }
  });
};

const writeThis = (fileName, contents) => {
  const tempFileName = `${fileName}.js`;
  const pathName = path.join(folderName, tempFileName);

  fs.writeFile(pathName, `${contents}`, err => {
    if (err) {
      return console.log(err);
    }
    return false;
  });
  console.log(`Created file: ${folderName}/${fileName}.js`);
  return false;
};

// write test.js file
const testScript = () => {
  const filename = "test";
  const contents = `import React from "react";
import ReactDOM from "react-dom";
import ${componentName} from "./";

describe(${componentName}, () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<${componentName}>Example</${componentName}>, div);
  });
});
`;
  writeThis(filename, contents);
};

// write stories.js file
const storiesScript = () => {
  const filename = "stories";
  const contents = `import React from "react";
import { storiesOf } from "@storybook/react";

import ${componentName} from ".";

storiesOf("${componentName}", module).add("${componentName}", () => (
  <${componentName}>${componentName} example</${componentName}>
));
`;
  writeThis(filename, contents);
};

// write index.js file
const indexScript = () => {
  const filename = "index";
  const contents = `// TODO INSERT A COMMENT REFERENCE TO EXTERNAL URL IF POSSIBLE

import React from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";

const ${componentName}Inner = glamorous.div({
  boxSizing: "border-box",
  fontFamily: '"nta", Arial, sans-serif',
  fontWeight: 400,
  textTransform: "none",
  fontSize: "16px",
  lineHeight: "1.25",
  width: "100%"
});

const ${componentName} = ({ children }) => (
  <${componentName}Inner>{children}</${componentName}Inner>
);

${componentName}.propTypes = {
  children: PropTypes.node.isRequired
};

export default ${componentName};
`;
  writeThis(filename, contents);
};

const init = () => {
  if (fs.existsSync(path.join(folderName))) {
    console.log(
      `❗️❗️ The component "${componentName}" already exists ❗️❗️`
    );
    console.log("Please use a different name or delete the existing folder 🆗");
    return false;
  }
  createFolder();
  testScript();
  storiesScript();
  indexScript();
  console.log(`✅ The component "${componentName}" was created successfully`);
  return false;
};

init();
