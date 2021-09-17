/* eslint-disable no-await-in-loop, no-console */

// TODO: this util should probably be its own node module

import fs from 'fs';
import path from 'path';
import glob from 'glob-promise';
import chalk from 'chalk';
import { promisify } from 'util';
import _ from 'lodash';

import generateMarkdown from './markdown/generateMarkdown';

// components is imported via require so that we can parse the names of exports
/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const components = require('govuk-react');
/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const docgen = require('react-docgen-typescript');

function getComponentFolderName(file) {
  // '/' rather than 'path.sep' as, on Windows, the path has already been converted at this point
  const dirs = path.dirname(file).split('/');
  let dir = dirs[dirs.length - 1];
  if (dir === 'src' || dir === 'lib') {
    dir = dirs[dirs.length - 2];
  }
  return dir;
}

function getComponentNameFromFile(file) {
  const folderName = getComponentFolderName(file);
  return _.chain(folderName).camelCase().upperFirst().value();
}

function getMarkdownForComponent(file) {
  const componentName = getComponentNameFromFile(file);
  const p = path.resolve(__dirname, file);
  let componentInfo;
  const parsedComponents: { displayName: string; filePath: string }[] = docgen.parse(p);
  if (parsedComponents.length > 1) {
    componentInfo = parsedComponents.find((parsedComponent) => parsedComponent.displayName === componentName);
    if (!componentInfo) {
      console.warn('more than one component found and no matching displayName found');
      console.warn(parsedComponents.map(({ filePath, displayName }) => ({ filePath, displayName })));
      [componentInfo] = parsedComponents;
    }
  } else {
    [componentInfo] = parsedComponents;
    if (componentInfo.displayName !== componentName) {
      console.warn('displayName does not match component name', componentInfo.displayName, componentName);
    }
  }
  const componentFolderName = getComponentFolderName(file);
  return generateMarkdown(componentName, componentFolderName, componentInfo);
}

function libPathToSrc(libPath, libFolder = '/lib/') {
  const pos = libPath.lastIndexOf(libFolder);
  const len = libFolder.length;
  return `${libPath.substring(0, pos)}/src/${libPath.substring(pos + len, libPath.length - 3)}.tsx`;
}

async function generateApiForFile(file) {
  try {
    const componentName = getComponentNameFromFile(file);
    const src = libPathToSrc(file);
    const md = getMarkdownForComponent(src);
    console.log(chalk.green('API Documented:'), componentName);
    return md;
  } catch (e) {
    console.error(chalk.red('Error documenting component:'), file, e.message);
    throw e;
  }
}

function shouldDocumentComponent(file) {
  // only document components that are exported from packages/govuk-react/src/index.ts
  const name = getComponentNameFromFile(file);
  return Object.prototype.hasOwnProperty.call(components, name);
}

async function generateApiForFiles(files) {
  let md = '';
  for (let i = 0; i < files.length; i += 1) {
    const file = files[i];
    if (shouldDocumentComponent(file)) {
      md += await generateApiForFile(file);
    }
  }
  return md;
}

// Unix-like shells require quotation marks around
// arguments on the command line to prevent path expansion,
// whereas windows requires no quotation marks.
// This approach is to support more shells.
function dequote(string) {
  return string.replace(/^'(.*)'$/, '$1');
}

async function apiDocs(relDir: string, outputMd: string): Promise<void> {
  const relDirNoQuotation = dequote(relDir);
  const outputMdNoQuotation = dequote(outputMd);

  const files = await glob(path.resolve(process.cwd(), relDirNoQuotation));
  const md = await generateApiForFiles(files);
  await promisify(fs.writeFile)(outputMdNoQuotation, md);
}
export default apiDocs;
