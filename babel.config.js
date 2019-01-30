const esModules = (process.env.BABEL_ENV === 'es');

const presets = [
  '@babel/preset-env',
  '@babel/preset-react',
  '@babel/preset-flow',
];

const plugins = [
  'babel-plugin-styled-components',
  // Stage 1
  '@babel/plugin-proposal-export-default-from',
  // '@babel/plugin-proposal-logical-assignment-operators',
  // ['@babel/plugin-proposal-optional-chaining', { loose: false }],
  // ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
  // ['@babel/plugin-proposal-nullish-coalescing-operator', { loose: false }],
  // '@babel/plugin-proposal-do-expressions',

  // Stage 2
  // ['@babel/plugin-proposal-decorators', { legacy: true }],
  // '@babel/plugin-proposal-function-sent',
  '@babel/plugin-proposal-export-namespace-from',
  // '@babel/plugin-proposal-numeric-separator',
  // '@babel/plugin-proposal-throw-expressions',

  // Stage 3
  '@babel/plugin-syntax-dynamic-import',
  '@babel/plugin-syntax-import-meta',
  ['@babel/plugin-proposal-class-properties', { loose: false }],
  '@babel/plugin-proposal-json-strings',


  // Stage 4
  '@babel/plugin-proposal-object-rest-spread',

  ['transform-react-remove-prop-types'],
  [
    '@babel/plugin-transform-runtime',
    { helpers: false, regenerator: true },
  ],
];

const ignore = ['.spec.js', '.test.js', '-test.js', '/__tests__/'];

if (!esModules) {
  presets[0] = ['@babel/preset-env', {
    loose: true,
    modules: 'commonjs',
  }];
  plugins.push('add-module-exports');
} else {
  presets[0] = ['@babel/preset-env', {
    loose: true,
    modules: false,
  }];
}

module.exports = (api) => {
  api.cache(() => process.env.NODE_ENV);
  return {
    presets,
    plugins,
    ignore,
  };
};
