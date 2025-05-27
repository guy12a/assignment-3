/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '.*\\.test\\.ts$',   // כך שהוא יריץ רק קבצים שמסתיימים ב-.test.ts
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
};
