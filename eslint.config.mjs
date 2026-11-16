import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import noOnlyTests from 'eslint-plugin-no-only-tests';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

export default tseslint.config(
  { ignores: ['**/dist', '**/lib', '**/es', 'coverage', '**/node_modules', '**/storybook-static', 'test-results'] },
  { linterOptions: { reportUnusedDisableDirectives: 'off' } },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: { react, 'react-hooks': reactHooks, 'jsx-a11y': jsxA11y, 'no-only-tests': noOnlyTests },
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    settings: { react: { version: 'detect' } },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      'react/prop-types': 'off',
      'react/display-name': 'off',
      'jsx-a11y/label-has-associated-control': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { args: 'none', caughtErrors: 'none', ignoreRestSiblings: true }],
      'no-only-tests/no-only-tests': 'error',
    },
  },
  {
    files: ['**/stories.tsx', '**/stories/**/*.tsx'],
    rules: { 'react/jsx-key': 'off' },
  },
  {
    files: ['**/*.js', 'packages/api-docs/**'],
    rules: { '@typescript-eslint/no-require-imports': 'off' },
  },
  {
    files: ['**/test.{ts,tsx}', '**/*.test.{ts,tsx}', 'scripts/setupTests.ts'],
    languageOptions: { globals: globals.vitest },
  },
  prettier
);
