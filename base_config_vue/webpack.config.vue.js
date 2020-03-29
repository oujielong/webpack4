// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin')
let vueConfig = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          hotReload: true // 开启热重载
        }
      },

    ]
  },
  plugins: [
    // 使用vue时需要请确保引入这个插件！
    new VueLoaderPlugin()

  ],
  optimization: {
  }
};
module.exports = vueConfig;
