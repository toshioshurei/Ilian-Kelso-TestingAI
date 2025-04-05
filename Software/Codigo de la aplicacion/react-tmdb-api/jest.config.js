// jest.config.cjs

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@constants$': '<rootDir>/src/constants',
    '^@types$': '<rootDir>/src/types',
  },
};