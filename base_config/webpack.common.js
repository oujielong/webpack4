const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let common = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: '/',//给其他中间件 服务器使用如 webpack-dev-middleware 
    filename: "[name].[hash].js",
    chunkFilename: "[name].[hash].js"
  },
  module: {
    rules: [
      // 处理图片
      {
        test: /\.(png|svg|jpg|gif|jpeg|ico|woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "url-loader", // 根据图片大小，把图片优化成dataUrl : base64
            options: {
              limit: 1000000
            }
          }
        ]
      },
      // 处理sass/css
      {
        test: /\.(sc|c|sa)ss$/,
        use: [
          "style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '../'
            }
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            },

          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              sourceMap: true,
              plugins: loader => [
                require("autoprefixer")({ browsers: ["> 0.15% in CN"] }) // 添加前缀
              ]
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          },
        ]
      },
      // 处理less
      {
        test: /\.less$/,
        use: [
          "style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '../'
            }
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              sourceMap: true,
              plugins: loader => [
                require("autoprefixer")({ browsers: ["> 0.15% in CN"] }) // 添加前缀
              ]
            }
          },
          {
            loader: "less-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].[hash]css",
      chunkFilename: "[id].css"
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "AICODER 全栈线下实习", // 默认值：Webpack App
      filename: "main.html", // 默认值： 'index.html'
      template: path.resolve(__dirname, "src/htmlTemplate/index.html"),
      minify: {
        collapseWhitespace: true, //空格收缩
        removeComments: true, //移除注释
        removeAttributeQuotes: true // 移除属性的引号
      }
    }),

  ],
  optimization: {
    namedChunks: true,
    splitChunks: {
      chunks: 'all'
    }
  }
};
module.exports = common;
