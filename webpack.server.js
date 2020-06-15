const path = require("path");
const merge = require('webpack-merge');
// const webpack = require("webpack");
const webpackNodeExternals = require('webpack-node-externals');

const baseConfig = require('./webpack.base.js');

const config = {
  target: 'node',

  entry: [
    // 'webpack/hot/poll?1000',
    './src/server/index.ts'
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  // watch: true,

  externals: [webpackNodeExternals(
    {
      whitelist: ['webpack/hot/poll?1000']
    }
  )],

  // devServer: {
  //   compress: true,
  //   historyApiFallback: true,
  //   hot: true,
  //   port: 3031,
  // },

  // plugins: [
  //   new webpack.HotModuleReplacementPlugin()
  // ]
};

module.exports = merge(baseConfig, config);
