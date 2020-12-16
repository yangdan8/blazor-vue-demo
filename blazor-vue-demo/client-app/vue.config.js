"use strict";
const CopyWebpackPlugin = require('./plugins/copy-webpack-plugin');

module.exports = {
  publicPath: "./",
  outputDir: "dist",
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin(),
    ],
  },
};
