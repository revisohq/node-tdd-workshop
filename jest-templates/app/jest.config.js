const path = require('path')

// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
    name: 'app',
    displayName: 'APP Tests',
  
    // Automatically clear mock calls and instances between every test
    clearMocks: true,
  
    // The directory where Jest should output its coverage files
    coverageDirectory: 'coverage',
  
    // The root directory that Jest should scan for tests and modules within
    rootDir: '../../',
  
    // A list of paths to directories that Jest should use to search for files in
    roots: ['<rootDir>/app'],
  
    // The test environment that will be used for testing
    testEnvironment: 'node',
  
    testMatch: ['**/?(*.)+(spec.app|test.app).[jt]s?(x)'],

    globals: require('./jest.globals'),

    globalSetup: path.join(__dirname, 'jest.setup.js'),
};