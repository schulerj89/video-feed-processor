const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: ['./src/main.ts'],
  watch: true,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  watchOptions: {
    poll: true,
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
