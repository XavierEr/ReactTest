const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: {
    app: [
      './src/index.js',
      // the entry point of our app
    ],
    vendor: ['react', 'react-dom']
  },

  devtool: 'inline-source-map',
  devServer: {
    contentBase: resolve(__dirname, 'public'), // match the output path
    compress: true, // enable gzip compression
    publicPath: '/', // match the output `publicPath`
    historyApiFallback: true,
    hot: true, // enable HMR on the server
    port: 5000
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ],
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ inject: true, template: 'public/index.html' })
  ],
};

module.exports = config;