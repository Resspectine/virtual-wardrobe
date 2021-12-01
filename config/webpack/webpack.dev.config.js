const path = require('path');

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const webpack = require('webpack');

const commonConfig = require('./webpack.common.js');

module.exports = {
  ...commonConfig,
  mode: 'development',
  target: 'web',
  entry: './src/index.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve('dist'),
  },
  devServer: {
    historyApiFallback: true,
    compress: true,
  },
  stats: {
    all: false,
    modules: false,
    timings: true,
    errors: true,
    warnings: true,
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
    new webpack.DllReferencePlugin({
      context: path.resolve('src'),
      manifest: require(path.resolve('dist', 'vendors/vendors-manifest.json')),
      name: 'vendors',
    }),
  ],
};
