/* eslint-env node */

module.exports = {
  coveragePathIgnorePatterns: [
    '<rootDir>/src/icons/',
    '<rootDir>/src/test-utils/',
    '<rootDir>/src/demoPages/',
  ],
  coverageReporters: ['text'],
  coverageThreshold: {
    global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80,
    },
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/__mocks__/fileMock.js"
  },
  modulePathIgnorePatterns: [
    "__mocks__",
    "demoPages",
    "node-cli"
  ],
  preset: 'ts-jest',
  reporters: ['default', 'jest-junit'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  verbose: true,
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
};
