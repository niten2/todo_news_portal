module.exports = {

  globals: {
    __DEV__: true,
  },

  automock: false,
  browser: false,
  bail: false,
  verbose: true,

  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],

  coverageDirectory: '<rootDir>/coverage',

  moduleFileExtensions: ['js', 'json', 'jsx', 'node'],

  moduleDirectories: [
    "node_modules",
    "src",
    "test",
    "<rootDir>",
  ],

  moduleNameMapper: {
    '\\.(css|less|styl|scss|sass|sss)$': 'identity-obj-proxy',
  },

  transform: {
    '\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
    '^(?!.*\\.(js|jsx|json|css|less|styl|scss|sass|sss)$)': '<rootDir>/tools/lib/fileTransformer.js',
  },

  testMatch: [
    "**/*.test.js"
  ],

  setupTestFrameworkScriptFile: "./test/support/index.js",
}
