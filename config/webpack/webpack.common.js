const path = require('path');

module.exports = {
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    modules: [path.resolve('./src'), path.resolve('./node_modules')],
    fallback: {
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      fs: false,
    },
    alias: {
      buffer: 'buffer',
    },
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'usage',
                    corejs: 3,
                  },
                ],
              ],
            },
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  // plugins: [], DON'T set plugins in common configuration, extends of this file don't merge this configuration.
  bail: true,
};
