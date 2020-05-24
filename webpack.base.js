const path = require("path");
const TSLintPlugin = require("tslint-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports  = {
  watch: true,

  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".css"],
    alias: {
      client: path.resolve(__dirname, 'src/client/'),
      helpers: path.resolve(__dirname, 'src/helpers/'),
    }
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              'react',
              'stage-0',
              ['env', { targets: { browsers: ['last 2 versions'] }}],
            ]
          }
        },
      },
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ]
  },
  
  plugins: [
    new CleanWebpackPlugin(["build", "public"]),
    new TSLintPlugin({
      files: ["./src/**/*.ts"],
    }),
  ]

};