/* eslint-disable no-await-in-loop, no-console */

// TODO: this util should probably be its own node module

import fs from 'fs';
import path from 'path';
import glob from 'glob-promise';
import chalk from 'chalk';
import { parse } from 'react-docgen';
import { promisify } from 'util';
import _ from 'lodash';

import generateMarkdown from './markdown/generateMarkdown';

const components = require('govuk-react');

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
  return _.chain(folderName)
    .camelCase()
    .upperFirst()
    .value();
}

function getMarkdownForComponent(file) {
  const src = fs.readFileSync(path.resolve(__dirname, file));
  const componentInfo = parse(src);
  const componentName = getComponentNameFromFile(file);
  const componentFolderName = getComponentFolderName(file);
  return generateMarkdown(componentName, componentFolderName, componentInfo);
}

function libPathToSrc(libPath, libFolder = '/lib/') {
  const pos = libPath.lastIndexOf(libFolder);
  const len = libFolder.length;

  return `${libPath.substring(0, pos)}/src/${libPath.substring(pos + len)}`;
}

async function generateApiForFile(file) {
  try {
    const componentName = getComponentNameFromFile(file);
    const src = libPathToSrc(file);
    const md = getMarkdownForComponent(src);
    console.log(chalk.green('API Documented:'), componentName);
    return md;
  } catch (e) {
    console.log(chalk.red('Skipping component:'), file, e.message);
    return '';
  }
}

function shouldDocumentComponent(file) {
  // only document components that are exported from packages/govuk-react/src/index.js
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

export default async function(relDir, outputMd) {
  const relDirNoQuotation = dequote(relDir);
  const outputMdNoQuotation = dequote(outputMd);

  const files = await glob(path.resolve(process.cwd(), relDirNoQuotation));
  const md = await generateApiForFiles(files);
  await promisify(fs.writeFile)(outputMdNoQuotation, md);
}
