const esModules = process.env.BABEL_ENV === 'es';

const presets = ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'];

const plugins = [
  'babel-plugin-styled-components',
  '@babel/plugin-proposal-export-default-from',
  ['@babel/plugin-proposal-private-methods', { loose: true }],
  ['@babel/plugin-proposal-class-properties', { loose: true }],
  ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
  'transform-react-remove-prop-types',
  ['@babel/plugin-transform-runtime', { helpers: false, regenerator: true }],
];

const ignore = ['.spec.js', '.test.js', '-test.js', '/__tests__/'];

if (!esModules) {
  presets[0] = [
    '@babel/preset-env',
    {
      loose: true,
      modules: 'commonjs',
    },
  ];
  plugins.push('add-module-exports');
} else {
  presets[0] = [
    '@babel/preset-env',
    {
      loose: true,
      modules: false,
    },
  ];
}

module.exports = (api) => {
  api.cache(() => process.env.NODE_ENV);
  return {
    presets,
    plugins,
    ignore,
  };
};
