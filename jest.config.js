module.exports = {
  setupTestFrameworkScriptFile: '<rootDir>/src/setupTests.js',
  testURL: 'http://localhost',
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.js'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/node_modules/jest-css-modules',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/jest/fileTransform.js',
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
}
