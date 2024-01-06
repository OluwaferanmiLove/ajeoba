module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'babel-plugin-inline-import',
        {
          extensions: ['.svg'],
        },
      ],
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
          root: ['./'],
          alias: {
            '@components': './src/components',
            '@assets': './src/assets',
            '@screens': './src/screens',
            '@theme': './src/theme',
            '@redux': './src/redux',
            '@utils': './src/utils',
            '@navigation': './src/navigation',
            '@hooks': './src/hooks',
            '@constant': './src/constant',
          },
        },
      ],
    ],
  };
};
