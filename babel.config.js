// const esModules = (process.env["BABEL_ENV"] === "es");
//
// const presets = [
//   "@babel/preset-env",
//   "@babel/preset-react",
//   "@babel/preset-stage-1"
// ];
//
// const plugins =  [
//   "transform-decorators-legacy",
//   ["transform-react-remove-prop-types"],
//   [
//     "@babel/plugin-transform-runtime",
//     { "helpers": false, "polyfill": false, "regenerator": true }
//   ],
//   ["emotion", { "autoLabel": true }]
// ];
//
// const ignore = [".spec.js", ".test.js", "-test.js", "/__tests__/"];
//
// if (!esModules) {
//   presets[0] = ["@babel/preset-env", {
//     "loose": true,
//     "modules": "commonjs"
//   }];
//   plugins.push("add-module-exports")
// } else {
//   presets[0] = ["@babel/preset-env", {
//     "loose": true,
//     "modules": false
//   }];
// }
//
// module.exports = {
//   presets,
//   plugins,
//   ignore
// }

const esModules = (process.env["BABEL_ENV"] === "es");

const presets = [
  "@babel/preset-env",
  "@babel/preset-react"
];

const plugins =  [
  "@babel/plugin-proposal-object-rest-spread",
  "@babel/plugin-proposal-class-properties",
  // "@babel/plugin-proposal-decorators",
  "@babel/plugin-proposal-do-expressions",
  "@babel/plugin-proposal-export-default-from",
  "@babel/plugin-proposal-export-namespace-from",
  "@babel/plugin-proposal-function-sent",
  "@babel/plugin-proposal-json-strings",
  "@babel/plugin-proposal-logical-assignment-operators",
  "@babel/plugin-proposal-nullish-coalescing-operator",
  "@babel/plugin-proposal-numeric-separator",
  "@babel/plugin-proposal-optional-chaining",
  // "@babel/plugin-proposal-pipeline-operator",
  '@babel/plugin-proposal-throw-expressions',
  "@babel/plugin-syntax-dynamic-import",
  "@babel/plugin-syntax-import-meta",
  [
    "@babel/plugin-transform-runtime",
    { "helpers": false, /*"polyfill": false,*/ "regenerator": true }
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

module.exports = function () {
  return {
    presets,
    plugins,
    ignore,
  };
};
