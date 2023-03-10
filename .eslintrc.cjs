// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    'react-native/react-native': true,
  },
  extends: ['ruiaraujo-react'],
  ignorePatterns: ['**/*.json', '!src/i18n/locales/**/*.json', 'docs', 'generated'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react-native'],
  rules: {
    'react-native/no-inline-styles': 2,
    'react-native/no-raw-text': 2,
    'react-native/no-unused-styles': 2,
    'react-native/sort-styles': [
      'error',
      'asc',
      {
        ignoreClassNames: false,
        ignoreStyleProperties: false,
      },
    ],
    'react-native/split-platform-components': 2,
  },
};
