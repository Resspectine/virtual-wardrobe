module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  modulePaths: ['<rootDir>/src/'],
  testEnvironment: 'jest-environment-jsdom',
};
