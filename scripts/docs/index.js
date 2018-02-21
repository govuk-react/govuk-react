/* eslint-disable no-await-in-loop, no-console */

// TODO: this util should probably be its own node module

import fs from "fs";
import path from "path";
import glob from "glob-promise";
import { parse } from "react-docgen";

import generateMarkdown from "./markdown/generateMarkdown";
import loadExample from "./loadExample";
import generateComponentImage from "./generateComponentImage";

function getMarkdownForComponent(file) {
  const src = fs.readFileSync(path.resolve(__dirname, file));
  const componentInfo = parse(src);
  const dirs = path.dirname(file).split(path.sep);
  const componentName = dirs[dirs.length - 1];
  return generateMarkdown(componentName, componentInfo);
}

async function generateApiForFile(file) {
  try {
    const Component = loadExample(file);
    await generateComponentImage(file, Component);
    const markdown = getMarkdownForComponent(file);
    fs.writeFileSync(path.resolve(file, "../API.md"), markdown);
  } catch (e) {
    console.log(`Skipping component: ${file}`);
  }
}

async function generateApiForFiles(files) {
  for (let i = 0; i < files.length; i += 1) {
    const file = files[i];
    await generateApiForFile(file);
  }
}

async function docs() {
  const files = await glob(
    path.resolve(__dirname, "../../src/components/**/index.js")
  );
  console.log(files);
  generateApiForFiles(files);
}

export default docs;

docs();
