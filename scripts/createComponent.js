const fs = require("fs");
const mkdirp = require("mkdirp");

const componentName = process.argv[2];
const folderName = `./src/components/${componentName
  .charAt(0)
  .toLowerCase()}${componentName.slice(1)}`;

/* eslint no-console: 0 */
const createFolder = () => {
  mkdirp(folderName, err => {
    if (err) {
      console.error(err);
    }
  });
};

const writeThis = (fileName, contents) => {
  fs.writeFile(`${folderName}/${fileName}.js`, `${contents}`, err => {
    if (err) {
      return console.log(err);
    }
    return false;
  });
  console.log(`Created file: ${folderName}/${fileName}.js`);
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
  const contents = `// INSERT A COMMENT REFERENCE TO EXTERNAL URL IF POSSIBLE

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

const ${componentName} = ({ children }) => <${componentName}Inner>{children}</${componentName}Inner>;

${componentName}.propTypes = {
  children: PropTypes.node.isRequired
};

export default ${componentName};
`;
  writeThis(filename, contents);
};

const init = () => {
  createFolder();
  testScript();
  storiesScript();
  indexScript();
};

init();
