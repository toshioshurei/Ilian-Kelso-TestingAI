// jest.config.cs

export const preset = 'ts-jest';
export const testEnvironment = 'node';
export const moduleNameMapper = {
  '^@constants$': '<rootDir>/src/constants',
  '^@types$': '<rootDir>/src/types',
};