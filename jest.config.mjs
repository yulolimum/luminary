/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  projects: [
    {
      testEnvironment: 'node',
      transform: { '^.+.tsx?$': ['ts-jest', { diagnostics: false }] },
      testMatch: ['<rootDir>/packages/theme/**/?(*.)+(spec|test).?([mc])[jt]s?(x)'],
      moduleNameMapper: { '^@/(.*)': '<rootDir>/packages/theme/src/$1' },
    },
  ],
}
