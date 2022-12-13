const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'awesomeBooks.js',
    path: path.resolve(__dirname, 'output'),
  },
  module: {
    rules: [{ test: /\.css$/, use: ['style-loader', 'css-loader'] }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Awesome Book',
      filename: 'index.html',
      template: './src/index.html',
    }),
  ],
};
