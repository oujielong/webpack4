## package.json 安装的包的简介

- "devDependencies": {
  "webpack": "^4.29.6",
  "webpack-cli": "^3.2.3"//这个和上面的 webpack 合起来才是 webpack4 的安装方式<br/> "css-loader": "^2.1.1",//用于加载 css 转换成 webpack 可处理的文件 <br/>"postcss-loader": "^3.0.0",//预处理 css 用，可以处理兼容性，使用下一代的属性，实际用需要其他的插件，就相当于一个插件槽位，可以通过实际需要的插件来处理 <br/>"autoprefixer": "^9.4.10",// "postcss-loader 的插件之一，用于添加 css 的浏览器前缀 <br/>"sass-loader": "^7.1.0",//处理并转换 sass 成为 webpack 可处理的文件,处理 scss 样式文件 <br/>"node-sass": "^4.11.0",//sass-loader 所依赖的 <br/>"less": "^3.11.1", // less-loader 所依赖 "less-loader": "^5.0.0",//处理 less 文件，转换成为 webpack 可处理的文件,处理 scss 样式文件 <br/>"uglifyjs-webpack-plugin": "^2.1.2",//优化，用于压缩 js "style-loader": "^0.23.1",//j 将处理好的 css 植入可运行的代码中自动添加<style></style>标签引用 <br/>"mini-css-extract-plugin": "^0.5.0",//优化， 用于压缩 css 单独抽出 css 成为文件， 与 style-loader 是两种不一样的处理方式，因此二者取其一 url-loader： 处理图片和样式中 url 标签的引入，如 svg 字体图标等文件的引用问题,依赖 file-loader，但是 url-loader:可以 设定文件大小转化成 <br/>dateUrl image-webpack-loader：只处理处理图片引入问题，和 url-loader 有交叉的地方 <br/>"mini-css-extract-plugin": "^0.5.0",: css 文件单独抽离 "babel-core": "^6.26.3",//babel 的依赖核心文件 <br/>"babel-loader": "^7.1.5",//将 js 转换成低版本兼容更好的工具，需要依赖上面的核心 }, "dependencies": { "lodash": "^4.17.11"//这个是一个工具库[https://www.html.cn/doc/lodash/], <br/>"vue-loader": "^15.9.1",// 处理 vue 单文件组建 <br/>"vue-template-compiler": "^2.6.11",//负责 vue 的编译，需要和 vue 的版本相符，这样 vue-loader 就会生成兼容运行时的代码. }

---

## 开发配置

1. 开发调试 webpack 配置文件方式运行：

- 开发服务器
  npm install --save-dev webpack-dev-server

## webpack-config

1.  devServer: {
    contentBase: './dist'
    }
    **开发服务器配置**
    `以上配置告知 webpack-dev-server，将 dist 目录下的文件 serve 到 localhost:8080 下。（译注：serve，将资源作为 server 的可访问文件）webpack-dev-server 在编译之后不会写入到任何输出文件。而是将 bundle 文件保留在内存中，然后将它们 serve 到 server 中，就好像它们是挂载在 server 根路径上的真实文件一样。如果你的页面希望在其他不同路径中找到 bundle 文件，则可以通过 dev server 配置中的 publicPath 选项进行修改`


    ````

2.  {
    "name": "your-project",
    "sideEffects": [//有副作用的，可以列出了，就不会被删除
    "./src/some-side-effectful-file.js"
    ]
    }
    **代码剪枝**
    `在package.json中添加下面标志无副作用，可以将引入但不执行特殊行为的(polyfill,有副作用),删除不引入`
3.  optimization: {
    splitChunks: {
    chunks: 'all'
    }
    }
    **分离单独的 js 文件**
    `分离第三方引入的js`

4.  plugins: [
    new MiniCssExtractPlugin({
    filename: "[name].[hash]css",
    chunkFilename: "[id].css"
    })]
    test: /\.(sc|c|sa)ss\$/,
    use: [{
    loader: MiniCssExtractPlugin.loader,
    options: {
    publicPath: '../'
    }
    }]
    **单独抽离 css**

    ```
    npm install --save-dev mini-css-extract-plugin
    参考：[https://webpack.docschina.org/plugins/mini-css-extract-plugin/]
    ```

## 引入项目开发包

1. 引入 vue

   {
   test: /\.vue\$/,
   loader: 'vue-loader'
   },
   引入 vue 后需要在配置 ruler 可以支持单文件组件
   同时 单文件组件中的 style 也要处理

   ```
   <style lang=less> : 'vue-style-loader',
   <style lang=sass> : 'vue-style-loader',
   ```

2. 引入造数据框架 mock.js 、ajax 框架 axios

- npm i axios mockjs --save
- 建立 mock/mock.js
- 建立 api_config/axios.js
- 在 index 中引入 mock/mock.js 就会自动拦截所有的请求

## 报错与解决

1.  `Replace Autoprefixer browsers option to Browserslist config.Use browserslist key in package.json or .browserslistrc file.`

- `在 ruler 中不建议直接如下面的写法： browsers: ["> 0.15% in CN"] }， 将其抽取到 package.json 或者 .browserslistrc`
- `{ loader: "postcss-loader", options: { ident: "postcss", sourceMap: true, plugins: loader => [ require("autoprefixer")({ browsers: ["> 0.15% in CN"] }) // 添加前缀 ] } }`

2. `Cannot find module '@babel/core' babel-loader@8 requires Babel 7.x (the package '@babel/c(转) Cannot find module '@babel/core' babel-loader@8 requires Babel 7.x (the package '@babel/core'). If you'd like to use Babel 6.x ('babel-core'), you should install 'babel-loader@7'.ou should install 'babel-loader@7'.`

- `babel-loader 和 babel-core 版本不对应所产生的， babel-loader 8.x 对应 babel-core 7.x babel-loader 7.x 对应 babel-core 6.x 也就是说，看你的版本，然后执行 npm i --save-dev babel-loader@7.1.5`
