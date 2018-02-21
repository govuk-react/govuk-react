/* eslint-disable import/no-dynamic-require, global-require, no-console */
import path from "path";

export default function loadExample(file) {
  let Component;
  try {
    const example = path.resolve(file, "../example.js");
    Component = require(example);
  } catch (e) {
    console.log(`Could not load component example for ${file}`);
  }
  if (!Component) {
    Component = require(file);
  }

  return Component;
}
