/* eslint-disable no-await-in-loop, no-console */

// TODO: this util should probably be its own node module

import fs from 'fs';
import path from 'path';
import glob from 'glob-promise';
import chalk from 'chalk';
import { parse } from 'react-docgen';
import { promisify } from 'util';

import generateMarkdown from './markdown/generateMarkdown';
import loadExample from './loadExample';
import generateComponentImage from './generateComponentImage';

const components = require('../../src');

function getComponentNameFromFile(file) {
  const dirs = path.dirname(file).split(path.sep);
  return dirs[dirs.length - 1];
}

function getMarkdownForComponent(file, imagePath) {
  const src = fs.readFileSync(path.resolve(__dirname, file));
  const componentInfo = parse(src);
  const componentName = getComponentNameFromFile(file);
  return generateMarkdown(componentName, componentInfo, imagePath);
}

async function generateApiForFile(file) {
  try {
    const Component = loadExample(file);
    const componentName = getComponentNameFromFile(file);
    const imagePath = `./docs/${componentName}.png`;
    await generateComponentImage(file, Component, imagePath);
    const md = getMarkdownForComponent(file, imagePath);
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
  const files = await glob(path.resolve(__dirname, '../../src/components/**/index.js'));
  const md = await generateApiForFiles(files);
  await promisify(fs.writeFile)('./API.md', md);
}

docs();
