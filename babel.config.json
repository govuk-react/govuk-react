const presets = ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'];

const plugins = [
  'babel-plugin-styled-components',
  '@babel/plugin-proposal-export-default-from',
  ['@babel/plugin-transform-runtime', { helpers: false, regenerator: true }],
];

module.exports = (api) => {
  api.cache(() => process.env.NODE_ENV);
  return {
    presets,
    plugins,
  };
};
