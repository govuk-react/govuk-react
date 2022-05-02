const { devDependencies } = require('./package.json');
const { dependencies: gukd } = require('./packages/govuk-react/package.json');

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'no-only-tests'],
  extends: [
    'airbnb',
    'prettier',
    'react-app',
    'plugin:prettier/recommended',
    'plugin:cypress/recommended',
    'plugin:import/typescript',
    'eslint:recommended',
  ],
  env: {
    es6: true,
  },
  rules: {
    'prettier/prettier': ['error'],
    'filenames/match-exported': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parserOptions: {
        project: './tsconfig.json',
      },
      extends: [
        'airbnb',
        'airbnb-typescript',
        'prettier',
        'react-app',
        'plugin:prettier/recommended',
        'plugin:cypress/recommended',
        'plugin:import/typescript',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
      ],
      rules: {
        'prettier/prettier': ['error'],
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        'react/jsx-props-no-spreading': 0,
        'filenames/match-exported': 0,
        'react/static-property-placement': ['error', 'static public field'],
        'jsx-a11y/label-has-associated-control': 0,
      },
    },
    {
      files: [
        'stories.[jt]s?(x)',
        'test.[jt]s?(x)',
        'fixtures.[jt]s?(x)',
        '**.test.[jt]s?(x)',
        '**.spec.[jt]s?(x)',
        'example.[jt]s?(x)',
        'scripts/**',
        'src/stories/**',
      ],
      rules: {
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      },
      settings: {
        'import/core-modules': [
          'govuk-react',
          ...Object.keys(devDependencies),
          ...Object.keys(gukd).filter((dep) => dep.startsWith('@govuk-react/')),
        ],
      },
    },
    {
      files: ['**.test.[jt]s?(x)', '**.spec.[jt]s?(x)'],
      rules: {
        'no-only-tests/no-only-tests': 'error',
      },
    },
    {
      files: ['test.[jt]s?(x)', '**.test.[jt]s?(x)'],
      env: {
        jest: true,
        browser: true,
      },
    },
    {
      files: ['stories.[jt]s?(x)', 'src/stories/**'],
      rules: {
        'import/no-anonymous-default-export': [2, { allowObject: true }],
      },
    },
  ],
};
