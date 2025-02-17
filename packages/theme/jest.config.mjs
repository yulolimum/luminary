/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: 'node',
  transform: {
    '^.+.tsx?$': ['ts-jest', { diagnostics: false }],
  },
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/src/$1',
  },
}
