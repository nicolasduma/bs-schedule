import { pathsToModuleNameMapper } from 'ts-jest'

import { compilerOptions } from './tsconfig.json'

export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>',
  }),
  setupFiles: ['dotenv/config'],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/*',
    '<rootDir>/dist/*',
    '<rootDir>/prisma/*',
    '<rootDir>/src/repositories/*',
    '<rootDir>/src/providers/*',
  ],
  preset: 'ts-jest',
}
