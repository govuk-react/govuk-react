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
import loadExample from './loadExample';
import generateComponentImage from './generateComponentImage';

const components = require('govuk-react');

function getComponentNameFromFile(file) {
  const dirs = path.dirname(file).split(path.sep);
  let dir = dirs[dirs.length - 1];
  if (dir === 'src' || dir === 'lib') {
    dir = dirs[dirs.length - 2];
  }
  return _.chain(dir).camelCase().upperFirst().value();
}

function getMarkdownForComponent(file, imagePath) {
  const src = fs.readFileSync(path.resolve(__dirname, file));
  const componentInfo = parse(src);
  const componentName = getComponentNameFromFile(file);
  return generateMarkdown(componentName, componentInfo, imagePath);
}

function libPathToSrc(libPath, libFolder = '/lib/') {
  const pos = libPath.lastIndexOf(libFolder);
  const len = libFolder.length;

  return `${libPath.substring(0, pos)}/src/${libPath.substring(pos + len)}`;
}

async function generateApiForFile(file) {
  try {
    const Component = loadExample(file);
    const componentName = getComponentNameFromFile(file);
    const imagePath = `./docs/${componentName}.png`;
    await generateComponentImage(file, Component, imagePath);
    const src = libPathToSrc(file);
    const md = getMarkdownForComponent(src, imagePath);
    console.log(chalk.green('API Documented:'), componentName);
    return md;
  } catch (e) {
    console.log(chalk.red('Skipping component:'), file, e.message);
    return '';
  }
}

function shouldDocumentComponent(file) {
  // only document components that are exported from src/index.js
  const name = getComponentNameFromFile(file);
  return components.hasOwnProperty(name);
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

async function docs() {
  const files = await glob(path.resolve(__dirname, '../../../components/**/lib/index.js'));
  const md = await generateApiForFiles(files);
  await promisify(fs.writeFile)('./API.md', md);
}

docs();
