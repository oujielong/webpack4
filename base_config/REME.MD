## package.json 安装的包的简介
\_"devDependencies": {
"webpack": "^4.29.6",
"webpack-cli": "^3.2.3"//这个和上面的 webpack 合起来才是 webpack4 的安装方式
"css-loader": "^2.1.1",//用于加载 css 转换成 webpack 可处理的文件
"postcss-loader": "^3.0.0",//预处理 css 用，可以处理兼容性，使用下一代的属性，实际用需要其他的插件，就相当于一个插件槽位，可以通过实际需要的插件来处理
"autoprefixer": "^9.4.10",// "postcss-loader 的插件之一，用于添加 css 的浏览器前缀
"sass-loader": "^7.1.0",//处理并转换 sass 成为 webpack 可处理的文件,处理scss 样式文件
"node-sass": "^4.11.0",//sass-loader 所依赖的
"less": "^3.11.1", // less-loader所依赖
"less-loader": "^5.0.0",//处理less文件，转换成为 webpack 可处理的文件,处理scss 样式文件
"uglifyjs-webpack-plugin": "^2.1.2",//优化，用于压缩 js
"style-loader": "^0.23.1",//j 将处理好的 css 植入可运行的代码中自动添加<style></style>标签引用
"mini-css-extract-plugin": "^0.5.0",//优化， 用于压缩 css 单独抽出 css 成为文件， 与style-loader 是两种不一样的处理方式，因此二者取其一
url-loader： 处理图片和样式中url标签的引入，如svg字体图标等文件的引用问题,依赖 file-loader，但是url-loader:可以 设定文件大小转化成dateUrl
image-webpack-loader：只处理处理图片引入问题，和url-loader有交叉的地方

"mini-css-extract-plugin": "^0.5.0",: css 文件单独抽离


},
"dependencies": {
"lodash": "^4.17.11"//这个是一个工具库[https://www.html.cn/doc/lodash/]
}\_



调试webpack配置文件方式运行： 
   cli输入 : node ---inspect-brk ./node_modules/webpack/bin/webpack.js --inline --config  webpack.dev.config.js

//开发服务器
npm install --save-dev webpack-dev-server
<!-- config -->
   devServer: {
     contentBase: './dist'
   },
以上配置告知 webpack-dev-server，将 dist 目录下的文件 serve 到 localhost:8080 下。（译注：serve，将资源作为 server 的可访问文件）webpack-dev-server 在编译之后不会写入到任何输出文件。而是将 bundle 文件保留在内存中，然后将它们 serve 到 server 中，就好像它们是挂载在 server 根路径上的真实文件一样。如果你的页面希望在其他不同路径中找到 bundle 文件，则可以通过 dev server 配置中的 publicPath 选项进行修改。

//代码剪枝
在package.json中添加下面标志无副作用，可以将引入但不执行特殊行为的(polyfill,有副作用),删除不引入
{
  "name": "your-project",
  "sideEffects": [//有副作用的，可以列出了，就不会被删除
    "./src/some-side-effectful-file.js"
  ]
}
//分离第三方js--config
 optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }

//单独抽离css
npm install --save-dev mini-css-extract-plugin
参考：https://webpack.docschina.org/plugins/mini-css-extract-plugin/