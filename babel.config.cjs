// This allows to put the app dir inside the src folder
// eslint-disable-next-line no-process-env
process.env.EXPO_ROUTER_APP_ROOT = '../../src/app';

// eslint-disable-next-line no-undef
module.exports = function (api) {
  api.cache(true);

  return {
    plugins: [
      // NOTE: `expo-router/babel` is a temporary extension to `babel-preset-expo`.
      require.resolve('expo-router/babel'),
    ],
    presets: ['babel-preset-expo'],
  };
};
