const path = require("path");
const merge = require('webpack-merge');
const webpack = require("webpack");

const baseConfig = require('./webpack.base.js');

const config =  {
  entry: './src/client/client.tsx',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },

  // devServer: {
  //   contentBase: path.resolve(__dirname, 'public'),
  //   contentBasePublicPath: '/',
  //   compress: true,
  //   historyApiFallback: true,
  //   hot: true,
  //   inline: true,
  //   host: "0.0.0.0",
  //   port: 3031,
  // },

  // plugins: [
  //   new webpack.HotModuleReplacementPlugin(),
  // ]
};

module.exports = merge(baseConfig, config);
