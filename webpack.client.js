const path = require("path");
const merge = require('webpack-merge');
// const webpack = require("webpack");
// const HtmlWebPackPlugin = require("html-webpack-plugin");

const baseConfig = require('./webpack.base.js');

const config =  {
  entry: './src/client/client.tsx',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },

  // devServer: {
  //   contentBase: path.resolve(__dirname, 'public'),
  //   compress: true,
  //   historyApiFallback: true,
  //   hot: true,
  //   port: 3031,
  // },

  plugins: [
    // new HtmlWebPackPlugin({
    //   templateContent: `
    //     <html>
    //     <head>
    //       <meta charset='utf-8'>
    //       <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    //       <title>Home page</title>
    //       <meta name='viewport' content='width=device-width, initial-scale=1'>
    //     </head>
    //     <body>
    //       <div id="root"></div>
    //       <script src="bundle.js"></script>
    //     </body>
    //     </html>
    // `}),
    // new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = merge(baseConfig, config);
