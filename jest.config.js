const {readdirSync} = require('fs')
const {basename} = require('path')

module.exports = {
  // this will become default in jest 27:
  testRunner: 'jest-circus/runner',
  testMatch: ['**/*.test.js'],
  verbose: true,
  rootDir: 'test',
  globalSetup: '<rootDir>/jest-global-setup.js',
  globalTeardown: '<rootDir>/jest-global-teardown.js',
  setupFilesAfterEnv: ['<rootDir>/jest-setup-after-env.js'],
  testEnvironment: '<rootDir>/jest-environment.js',
  moduleNameMapper: {},
}

for (const name of readdirSync('test/lib')) {
  module.exports.moduleNameMapper[`^${basename(name, '.js')}$`] = `<rootDir>/lib/${name}`
}
