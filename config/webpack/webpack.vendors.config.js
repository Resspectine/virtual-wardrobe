const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: [path.resolve('src', 'vendors.js')],
  output: {
    path: path.resolve('dist', 'vendors'),
    filename: 'vendors.js',
    library: 'vendors',
  },
  devtool: 'source-map',
  stats: 'errors-only',
  resolve: {
    fallback: {
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      fs: false,
    },
    alias: {
      buffer: 'buffer',
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
    new webpack.DllPlugin({
      context: 'src',
      path: path.resolve('dist', 'vendors/vendors-manifest.json'),
      name: 'vendors',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  bail: true,
};
