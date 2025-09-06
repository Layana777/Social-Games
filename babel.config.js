module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Reanimated moved its Babel plugin here
      'react-native-worklets/plugin',
    ],
  };
};

