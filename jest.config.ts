import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  rootDir: '.',
  testEnvironment: 'node',
  transformIgnorePatterns: ['node_modules/(?!@got/dist/source)/'],
  maxWorkers: 1,
  testMatch: ['<rootDir>/tests/**/**.test.ts'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: 'reports/jest-unit-junit',
      },
    ],
  ],
  testTimeout: 5 * 1000, // 5 seconds
  collectCoverage: true,
  coverageReporters: ['html', 'lcov', 'text'],
  coverageThreshold: {
    global: {
      statements: 50.49,
      branches: 75,
      functions: 42.85,
      lines: 42.85,
    },
  },
  collectCoverageFrom: ['./src/**/*.ts'],
  coverageDirectory: './reports/jest-unit-coverage',
};

export default config;
