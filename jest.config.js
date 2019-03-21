// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    '<rootDir>/{components,packages}/*/src/**.[jt]s?(x)',
    '<rootDir>/{components,packages}/*/src/**/*.[jt]s?(x)',
    '!<rootDir>/{components,packages}/*/src/**/{stories,example,fixtures}.[jt]s?(x)',
    '!<rootDir>/packages/storybook/**',
    '!<rootDir>/packages/api-docs/**',
    '!<rootDir>/packages/storybook-components/**',
  ],

  // The directory where Jest should output its coverage files
  coverageDirectory: './coverage/',

  // An object that configures minimum threshold enforcement for coverage results
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },

  // An array of file extensions your modules use
  moduleFileExtensions: [
    'web.js',
    'js',
    'json',
    'web.jsx',
    'jsx',
    'node',
  ],

  // The path to a module that runs some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ['<rootDir>/scripts/setupTests.js'],

  // A list of paths to snapshot serializer modules Jest should use for snapshot testing
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // The glob patterns Jest uses to detect test files
  testMatch: [
    '**/{components,packages}/*/src/**/?(*.)(spec|test).js?(x)',
  ],

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$',
  ],
};
