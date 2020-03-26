const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
let devConfig = {
  mode: "development",
  devtool: 'inline-source-map',
  
  devServer: {
    inline: false,//内联模式
    writeToDisk: true,//是否也写入磁盘中
    contentBase: path.join(__dirname, "./dist/"),
    index: 'main.html',//启动后打开哪个页面作为主页
    compress: true,//是否压缩
    port: 8080,//端口号
    // 启动前
    before(app) {
      app.get('/aaaa', function (req, res) {
        debugger
        res.json({ custom: 'response' });
      });
    },
    // 服务启动后，执行
    after(app) { },
    // 允许外部哪些主机访问本地的开发服务器
    allowedHosts: ['host.com',
      'subdomain.host.com',
      'subdomain2.host.com',
      'host2.com'],
    host: "localhost",//,
    hot: true,//热更新
    open: true,//启动开发服务器，并打开浏览器
    watchContentBase: true//监视文件更改，同时更新打包，组合hot
  },
  module: {
    rules: []
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "AICODER 全栈线下实习", // 默认值：Webpack App
      filename: "main.html", // 默认值： 'index.html'
      template: path.resolve(__dirname, "src/htmlTemplate/index.html"),
      minify: {
        collapseWhitespace: false, //空格收缩
        removeComments: false, //移除注释
        removeAttributeQuotes: false // 移除属性的引号
      }
    })],
  optimization: {

  }
};
module.exports = merge(common, devConfig);
