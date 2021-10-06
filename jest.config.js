module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  modulePaths: ['<rootDir>/src/'],
  modulePathIgnorePatterns: ['<rootDir>/cypress/'],
  testEnvironment: 'jest-environment-jsdom',
};
