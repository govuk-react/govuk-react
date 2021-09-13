const { devDependencies } = require('./package.json');
const { dependencies: gukd } = require('./packages/govuk-react/package.json');

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'no-only-tests'],
  extends: [
    'airbnb',
    'sonar',
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
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'react/static-property-placement': ['error', 'static public field'],
    'filenames/match-exported': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to', 'hrefLeft', 'hrefRight'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
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
    'import/core-modules': ['prop-types'],
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        '@typescript-eslint/no-explicit-any': 0,
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
          '@govuk-react/storybook-components',
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
