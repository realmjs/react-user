"use strict"

const path = require("path");

module.exports = {
    entry: {
      dev: ["./tests/index.js"]
    },
    output: {
      filename: "test.bundle.js",
      path: path.resolve(__dirname, "tests"),
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          use: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'tests'),
      publicPath: "/assets/",
      historyApiFallback: true
    }
};
