const path = require('path');
const webpack = require('webpack');
const addReactDisplayname = require('babel-plugin-add-react-displayname');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const commonConfig = require('./webpack.common.js');

module.exports = {
  ...commonConfig,
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    filename: `main${process.env.BUILD_VCS_NUMBER}.js`,
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
    addReactDisplayname,
  ],
};
