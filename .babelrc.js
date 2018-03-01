const esModules = (process.env["BABEL_ENV"] === "es");

const presets = [
  "@babel/preset-env",
  "@babel/preset-react",
  "@babel/preset-stage-1"
];

const plugins =  [
  "transform-decorators-legacy",
  ["transform-react-remove-prop-types", { "mode": "wrap" }],
  [
    "@babel/plugin-transform-runtime",
    { "helpers": false, "polyfill": false, "regenerator": true }
  ]
];

const ignore = [".spec.js", ".test.js", "-test.js", "/__tests__/"];

if (!esModules) {
  presets[0] = ["@babel/preset-env", {
    "loose": true,
    "modules": "commonjs"
  }];
  plugins.push("add-module-exports")
} else {
  presets[0] = ["@babel/preset-env", {
    "loose": true,
    "modules": false
  }];
}

module.exports = {
  presets,
  plugins,
  ignore
}
