const path = require('path');

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const webpack = require('webpack');

const commonConfig = require('./webpack.common.js');

module.exports = {
  ...commonConfig,
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    filename: `main.js`,
    path: path.resolve('dist'),
  },
  optimization: {
    sideEffects: false,
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
};
