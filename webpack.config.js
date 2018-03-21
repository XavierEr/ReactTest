const { resolve } = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


const config = {
  entry: {
    app: [
      './src/index.js',
      // the entry point of our app
    ],
    vendor: ['react', 'react-dom']
  },
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  devtool: 'source-map',
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
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ],
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ inject: true, template: 'public/index.html' }),
    new ExtractTextPlugin("styles.css")
  ],
};

module.exports = config;