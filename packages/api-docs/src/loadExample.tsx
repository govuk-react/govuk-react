/* eslint-disable import/no-dynamic-require, global-require, no-console */
import path from 'path';
import chalk from 'chalk';

export default function loadExample(file) {
  let Component;
  try {
    const example = path.resolve(file, '../example.js');
    Component = require(example);
  } catch (e) {
    // ignore eror requiring missing file
  }

  if (!Component) {
    Component = require(file);
  }

  if (typeof Component === 'object') {
    Component = Component.default;
  }

  if (!Component) {
    console.log(chalk.red('Error loading component:'), file);
  }

  return Component;
}
