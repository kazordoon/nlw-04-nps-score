const { resolve } = require('path');

module.exports = {
  clearMocks: true,
  coverageDirectory: resolve(__dirname, '__tests__', 'coverage'),
  collectCoverageFrom: ['**/src/**/*.ts'],
  testEnvironment: 'node',
  preset: 'ts-jest',
  testMatch: ['**/__tests__/**/*.(spec|test).[jt]s'],
  roots: ['src'],
};
