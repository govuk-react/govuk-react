// See:
// https://github.com/insin/nwb/issues/173
// https://gist.github.com/loklaan/3b4990f0f66a0103f34029829009e417

const babelJest = require("babel-jest");
const env = require("babel-preset-env");
const stage1 = require("babel-preset-stage-1");
const react = require("babel-preset-react");

const createBabelJestTransformer = babelJest.createTransformer;

module.exports = createBabelJestTransformer({
  presets: [env, stage1, react]
});
