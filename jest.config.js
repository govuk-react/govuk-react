module.exports = {
  coverageDirectory: './coverage/',
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/{components,packages}/*/src/**.[jt]s?(x)',
    '<rootDir>/{components,packages}/*/src/**/*.[jt]s?(x)',
    '!<rootDir>/{components,packages}/*/src/**/{stories,example,fixtures}.[jt]s?(x)',
    '!<rootDir>/packages/storybook/**',
    '!<rootDir>/packages/api-docs/**',
    '!<rootDir>/packages/storybook-components/**',
  ],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  setupFilesAfterEnv: ['<rootDir>/scripts/setupTests.js'],
  testMatch: [
    '**/{components,packages}/*/src/**/?(*.)(spec|test).js?(x)',
  ],
  testEnvironment: 'node',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$',
  ],
  moduleFileExtensions: [
    'web.js',
    'js',
    'json',
    'web.jsx',
    'jsx',
    'node',
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
};
