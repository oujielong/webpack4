const path = require("path");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const common = require("./webpack.common.js");

let production = {
  mode: "production",//根据这个模式，webpack4会自动启用某些插件
  devtool: 'source-map',//生产环境还是推荐使用，以便定位问题，不同于们在开发环境中用到的 inline-source-map：
  output: {
  },
  module: {
    rules: []
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css", // 设置最终输出的文件名
      chunkFilename: "[id].[hash].css"
    })
  ],
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({}),
      // https://webpack.docschina.org/plugins/uglifyjs-webpack-plugin/
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      })
    ]
  }
};
module.exports = merge(common, production);
