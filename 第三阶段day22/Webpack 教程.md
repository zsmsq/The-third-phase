## 1. Webpack 介绍
### 1-1 什么是 Webpack
Webpack 是一个模块打包器 (bundler)，本身是一个npm 的工具包。 https://webpack.docschina.org/

在 Webpack 看来，前端所有的静态资源文件都是模块，如 JS / JSON / CSS / IMG / LESS / FONTS 等等，这些文件都会作为模块来处理。

Webpack 会根据模块之间的依赖关系，进行分析打包，生成最终的静态资源。

![image.png](Webpack 教程.assets/1643417515744-c0451f02-dbc6-4e28-9925-424fed45d659.png)

### 1-2 五个核心概念
Webpack 有五个核心的概念需要知道，分别是
- Entry 		入口
- Output		出口
- Loader		加载器
- Plugins		插件
- Mode		    模式
#### Entry 入口
入口起点(entry point) 指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。进入入口起点后，webpack 会找出有哪些模块和库是入口起点依赖的
​
#### Output 出口
Output 属性告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件
​

#### Loader 加载器          
Webpack 默认只能处理 JS / JSON 文件，如果需要打包其他类型文件，就需要使用对应的 loader 进行处理。例如 css-loader，less-loader，file-loader 等等
​

Loader 本质是 JS 函数，接受源文件内容，返回转换后的结果
​

#### Plugins 插件
loader 用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。包括：打包优化，资源管理，注入环境变量
​

#### Mode 模式
Webpack 主要有两种工作模式，分别是 development 开发模式和 production 生产模式。


## 2. 安装 Webpack
### 全局安装
```bash
npm install webpack webpack-cli -g
```
### 局部安装 
```bash
npm init 
npm install webpack webpack-cli -D                # cli  client
```
> 这里推荐使用『局部安装』，这样可以避免因为版本不同而产生的 BUG



## 3. Webpack 初体验

1. 创建 JS 文件
   - src/js/app.js    	入口文件
   - src/js/m1.js		模块文件
   - src/index.html	HTML 文件
   
2. 安装

   ```
   npm install webpack webpack-cli -D 
   ```

3. 执行打包命令  『项目根目录下运行』 
    ```bash
    npx webpack --entry ./src/js/app.js  --output-path ./build/js --output-filename bundle.js --mode development
    ```

      - --entry  								设置入口
      - --output-path                设置输出目录
      - --output-filename 		设置输出文件名
      - --mode 				设置运行模式


3. HTML 文件引入 『../build/js/bundle.js』
3. 搞定 

    > 初体验需要改进的地方：
    > 1. 打包命令太复杂
    > 2. 不能将 ES6 转为 ES5
    > 3. 只能打包 JS 和 JSON， 不能打包其他类型的文件

## 4. 使用配置文件打包
项目根目录下创建文件 『webpack.config.js』，内容如下：
```javascript
const {resolve} = require('path');
//暴露对象
module.exports = {
    //设置入口
    entry: './src/js/app.js',
    //设置出口
    output: {
        path: resolve(__dirname, 'build'),  //指的是所有资源的输出目录
        //path : __dirname + '/build'
        filename: 'js/bundle.js',
        clean: true, // 打包时, 可以清空目录
    },
    // 设置模式
    mode: 'development',
}
```


创建完毕之后，在项目根目录执行如下命令：
```bash
npx webpack
```


## 5. 打包 css 文件

1. 首先先创建 HTML 结构与对应的 CSS 文件样式
1. 在入口 JS 文件中， 引入 CSS 文件
```javascript
import '../css/app.css'		
```

3. 安装 loader
```bash
npm i style-loader css-loader -D
```

4. 修改 webpack.config.js 配置文件
```bash
const {resolve} = require('path');
module.exports = {
    .
    .
    .
    mode: 'development',
    //配置 loader
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",		// 将 CSS 生成 style 标签插入 HTML 中
                    "css-loader"  		// 将 CSS 转为 CommonJS 的模块
                ]  //设置的顺序不能改变
            }   
        ]
    }
}
```

5. 运行打包命令  『在项目的根目录下运行』
```bash
npx webpack
```
## 6. 打包 less 文件

1. 首先编写 HTML 结构以及 LESS 文件样式
1. JS 文件导入 LESS 文件
```javascript
import "../less/app.less"
```

3. 安装 loader
```bash
npm i less less-loader -D
```

4. 配置 loader
```javascript
const {resolve} = require('path');
module.exports = {
    .
    .
    .
    mode: 'development',
    module: {
        rules: [
            .
  			.
  			.
  			//配置 less 文件处理
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    'css-loader',
                    'less-loader'  //将 less 资源编译为 css 资源
                ]
            } 
        ]
    }
}	
```

5. 执行打包命令
```bash
npx webpack
```
## 7. JS 代码质量检查
ESLint（[https://eslint.bootcss.com/](https://eslint.bootcss.com/)） 能对 JS 基本语法错误 / 隐患进行提前检查。
> ESlint 不能检查 JS 运行时错误，因为并没有执行 JS 代码

使用步骤如下：


1. 安装插件
```bash
npm i eslint eslint-webpack-plugin -D
```

2. 修改 webpack.config.js 配置文件
```javascript
const {resolve} = require('path');
//1. 导入插件
const ESLintPlugin = require('eslint-webpack-plugin');
module.exports = {
    .
    .
    .
    mode: 'development',
    module: {
        .
  		.
  		.
    },
  	//2. 配置插件
  	plugins: [
        new ESLintPlugin()
    ]
}
```

3. 项目根目录下创建 eslint 配置文件 『.eslintrc.js』
```javascript
module.exports = {
    "parserOptions": {                  //解析器的选项
        "ecmaVersion": 6, 				// 支持es6
        "sourceType": "module"			// 使用es6模块化
    },
    "env": { 							// 设置环境 environment
        "browser": true,   				// 支持浏览器环境： 能够使用window上的全局变量
        "node": false       			// 支持服务器环境:  能够使用node上global的全局变量
    },
    "globals": {						// 声明使用的全局变量, 这样即使没有定义也不会报错了
        "$": "readonly"					
    },
    "rules": {  						// eslint检查的规则  0 忽略 1 警告 2 错误
        "no-console": 0, 				// 不检查console
        "eqeqeq": 0,					// 用 == 而不用 === 就报错
        "no-alert": 0 					// 不能使用alert
    },
    "extends": "eslint:recommended" 	// 使用eslint推荐的默认规则
 }
```

4. 执行打包命令
```javascript
npx webpack
```
## 8. JS 语法转换
Babel 可以将浏览器不能识别的新语法（ES6-11）转换成原来识别的旧语法（ES5），浏览器兼容性处理。 操作流程：


1. 安装 loader
```bash
npm i babel-loader @babel/core @babel/preset-env -D
```

   - @babel/core  		babel 的核心库
   - @babel/preset-env	babel 的预设工具包，将所有新语法转为 ES5
   - babel-loader   		babel 在 webpack 中的 loader 包




2. 配置 loader
```javascript
.
.
.
module.exports = {
    .
  	.
  	.
    mode: 'development',
    module: {
        rules: [
            .
  			.
  			.
  			//配置 babel 的 loader
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            } 
        ]
    }
}
```

3. 设置目标浏览器

   修改项目根目录下的 package.json 

   ```
   {
   	"browserslist": [
   		"last 10 versions"
   	]
   }
   ```

   

4. 执行打包命令
```bash
npx webpack
```
## 9. JS 兼容性处理
### 9-1 Polyfill 
babel 完成了新语法到旧语法的转换，如 let / const / 箭头函数等，但是新加入的 API 却没有处理，例如 Promise / Array.from / Array.prototype.find / Array.prototype.fill  等等

Polyfill 是一块代码（通常是 Web 上的 JavaScript），用来为旧浏览器提供它没有原生支持的较新的功能。单词原意： 温暖的填充物
​


1. 安装 polyfill
```bash
npm i @babel/polyfill
```

2. 入口文件引入 polyfill
```javascript
import '@babel/polyfill';
```

3. 配置 .eslintrc.js

```
"globals": {						// 声明使用的全局变量, 这样即使没有定义也不会报错了
     "Promise": "readonly"					
 },   
```

4. 执行打包   
```javascript
npx webpack
```
> **注意**： webpack5 打包生成的 JS 代码默认是被包裹在『箭头函数』中，这样 IE 无法执行最终代码，此时需要配置目标浏览器，见[附录](#tR6xS)

### 9-2 core-js
使用 polyfill 会使得代码的体积变大, 这时可以使用 core-js 来实现按需打包，减小打包文件的体积。
​


1. 安装 core-js
```bash
npm i core-js
```

2. 修改 babel-loader 的配置
```javascript
.
.
.
module.exports = {
    .
  	.
  	.
    mode: 'development',
    module: {
        rules: [
            .
  					.
  					.
  			//配置 babel 的 loader
            {
              test: /\.js$/,
              exclude: /(node_modules)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [
                    [
                      '@babel/preset-env',
                      {
                        useBuiltIns: 'usage',  // 按需引入(需要使用polyfill)
                        corejs: { version: 3 }
                      }
                    ]
                  ]
                }
              }
            }
        ]
    }
}
```

3. 移除入口文件中的 『import  '@babel/polyfill'』
3. 执行打包命令
```javascript
npx webpack
```
## 10. 打包 CSS 中的图片资源


1. 首先编写 HTML 与 CSS 背景图片
1. 修改 webpack.config.js
```bash
.
.
.
module.exports = {
    .
  	.
  	.
    mode: 'development',
    module: {
        rules: [
            .
  			.
  			.
  			//配置背景图片的处理
            {
                test: /\.(jpg|png|gif)$/,
                type: "asset",   //资产
                //解析器
                parser: {
                    //转base64的条件 ： 如果图片的大小小于8kb，会转化成base64字符串
                    dataUrlCondition: {
                        maxSize: 8 * 1024, // 8kb
                    }
                },
                //生成文件
                generator: {
                		//打包保存的文件名称
                    filename: 'images/[hash:6][ext]',
                },
            },
        ]
    }
}
```

3. 执行打包
```bash
npx webpack
```
## 11. 打包 HTML 文件
webpack 可以将原始的 HTML 打包处理，生成优化后的结果
​


1. 安装插件

```bash
npm i html-webpack-plugin -D
```

2. 修改 webpack.config.js 配置文件

```javascript
const { resolve } = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
// 1. 引入插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    module: {
        .
        .
        .
    },
    //2. 配置插件
    plugins: [
        .
        .
        .
        new HtmlWebpackPlugin({
            template: "./src/index.html",// 指定html模板文件。
            inject: "body",// 将打包生成的JS文件放置在body尾部
            hash: true,// 在引入JS时增加hash后缀字符串,去除缓存。
            minify: {
                removeAttributeQuotes: true,// 移除属性中的双引号
                removeComments: true,// 移除注释
                collapseWhitespace: true,// 去除空格与换行
            }
        })
    ]
}
```
## 12. 打包 IMG 图片
HTML 中会使用 IMG 标签来引入一些图片，这些图片也需要 『 html-loader 』 来进行处理。

1. 删除 src/index.html 文件中的 JS 引入  『这一步一定要做』
1. HTML 结构中引入图片
```html
<img src="./images/react.png" alt="">
```

3. 安装 loader
```html
npm i html-loader -D
```

4. 配置 loader
```js
.
.
.
module.exports = {
    .
    .
    .
    module: {
        rules: [
            .
            .
            .
			// 配置 html 的 loader
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader'
                }
            }
        ]
    }
}
```
5. 执行打包

   ```
   npx webpack
   ```

   

   

## 12. 打包字体图标

这里以 iconfont 为例，首先先下载一个项目，然后按照如下流程操作：

1. 将字体文件复制到 `src/fonts` 目录下
1. 复制 CSS 代码到样式文件中，这里可以是 CSS 文件，也可以是 LESS 文件 
```css
@font-face {
  font-family: "iconfont";
  src: url("../fonts/iconfont.eot");
  src: url("../fonts/iconfont.eot?#iefix") format("embedded-opentype"),
    url("../fonts/iconfont.woff2") format("woff2"), url("../fonts/iconfont.woff") format("woff"),
    url("../fonts/iconfont.ttf") format("truetype"),
    url("../fonts/iconfont.svg#iconfont") format("svg");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

```

3. HTML 结构中创建对应的 span 标签   
```javascript
<span class="iconfont">&#xe8ab;</span>
```

4. 修改 webpack.config.js 配置文件
```javascript
.
.
.
module.exports = {
    .
  	.
  	.
    mode: 'development',
    module: {
        rules: [
           	.
          	.
          	.
  			//配置字体文件的处理
            {
                test: /\.(eot|svg|woff|woff2|ttf)$/,  
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[hash:6][ext]',
                },
            }
        ]
    },
}
```

5. 运行打包命令
```javascript
npx webpack
```
## 13. 自动编译打包运行
之前的操作，每次修改代码都需要重新执行 npx webpack 命令，这里我们可以使用 `webpack-dev-server` 自动打包运行

1. 安装 webpack-dev-server
```shell
npm i webpack-dev-server -D
```

2. 修改 webpack.config.js 配置文件
```javascript
.
.
.
module.exports = {
    .
    
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'js/bundle.js',
        clean: true,
        //1. 设置出口   设置页面中相关的资源 css js img json 字体 路径
        publicPath: '/' 
    },
    .
    module: {
        .
        .
        .
    },
    plugins: [
        .
        .
        .
    ],

    //2. 配置开发服务
    devServer:{
        port:3000,// 设置端口号
        open:true,// 自动在浏览器中打开页面
        compress:true,// false 关闭 gzip 压缩, true 开启（默认）
    }
}
```

3. 运行启动命令
```shell
npx webpack-dev-server
```
## 14. devtool 配置
devtool 可以控制 source-map 的生成，source-map 一般是独立文件，映射原始的 JS 文件，方便定位调试错误。
```javascript
.
.
.
module.exports = {
    
    plugins: [
        .
        .
        .
    ],

    devServer:{
    		.
        .
        .
    },

    //devtool
	//开发模式下使用 cheap-module-source-map
  	//生产模式  source-map 或者 不设置 devtool
	devtool: 'cheap-module-source-map',
}

注意点：每次修改了 webpack.config.js 之后,一定要重启服务, 才能生效
```
## 15. 分离配置文件
webpack 可以使用不同的配置文件进行打包。操作步骤如下：
​


1. 根目录下创建文件夹 config，将 webpack.config.js 复制两份
   - ./config/webpack.dev.js
   - ./config/webpack.prod.js
2. 修改 webpack.prod.js
```javascript
.
.
.
module.exports = {
    entry: './src/js/app.js',
  	output: {}
  	.
  	.
  	.
    
    // 1. 设置模式
    mode: 'production',
  	// 2. 删除 devServer 设置
  	// 3. 删除 devtool 设置
}
```

3. 修改 package.json，增加命令别名配置
```json
{
	.
	.
	.
	"scripts": {
        "start": "npx webpack-dev-server --config ./config/webpack.dev.js",
        "build": "npx webpack --config ./config/webpack.prod.js"
   }
   .
   .
   .
}

```

4. 运行命令
```shell
npm run start           可以简化 npm start  （只要start比较特殊）
npm run build    
```


## 16. 分离 CSS 代码
前面的 CSS 样式代码都是放在 style 标签中，这里可以借助 mini-css-extract-plugin 抽离 CSS 文件
​


1. 安装工具包
```shell
npm i mini-css-extract-plugin -D
```

2. 修改 webpack.prod.js
```javascript
.
.
.
//1. 引入插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/js/app.js',
    mode: 'production',
    module: {
        rules: [
        		//2. 修改 loader， 将之前的 style-loader 换为 MiniCssExtractPlugin.loader
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            },
           	.
            .
            .
        ]
    },
    plugins: [
        .
        .
        .
        // 3. 配置插件
        new MiniCssExtractPlugin({					
            filename: "css/[hash:8].css",
        }),
        
    ]
}
```

3. 运行打包命令
```shell
npm run build
```
## 17. CSS 兼容性处理
webpack 中可以使用 postcss 对 CSS 预处理，包括 CSS 兼容性处理
​


1. 安装相关工具包
```shell
npm i postcss-loader autoprefixer -D
```

2. 修改 webpack.prod.js 中的 loader 设置
```javascript
.
.
.
module.exports = {
    entry: './src/js/app.js',
    mode: 'production',
    module: {
        rules: [
        		//在 css-loader 之前添加 postcss-loader
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    'postcss-loader',
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            },
           	.
            .
            .
        ]
    },
   
}
```

3. 项目根目录下创建 postcss.config.js
```shell
module.exports = {
    plugins: [
        require('autoprefixer')
    ]
}
```

4. 修改 package.json，增加 `browserslist` 属性
```shell
{
  .
  .
  .
  "browserslist": [
    "last 2 versions"
  ]
}
```

5. 执行打包命令
```shell
npm run build
```
## 18. CSS 压缩
`css-minimizer-webpack-plugin` 插件可以压缩 CSS 代码，操作步骤如下：
​


1. 安装插件
```shell
npm i css-minimizer-webpack-plugin -D
```

2. 修改配置文件 webpack.prod.js
```js
.
.
.
//1. 引入插件
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');


module.exports = {
    .
    .
    .
    mode: 'production',
    .
    .
    .
    //2. 设置优化选项
    optimization: {
        minimizer: [new CssMinimizerPlugin()],
    },
}
```

3. 执行打包命令
```shell
npm run build
```
## 19. JS 压缩

`terser-webpack-plugin`插件可以压缩 JS 代码，webpack5 版本不需要额外安装，操作步骤如下：

1. 安装插件

   ```
   npm i terser-webpack-plugin -D
   ```
   
2. 修改配置文件 webpack.prod.js

   ```js
   .
   .
   .
   //1. 引入插件
   const TerserPlugin = require("terser-webpack-plugin");
   
   
   module.exports = {
       .
       .
       .
       mode: 'production',
       .
       .
       .
       //2. 设置优化选项
       optimization: {
           minimizer: [
     			new CssMinimizerPlugin(),
               new TerserPlugin()
           ],
       },
   }
   ```

3. 运行打包

   ```
   npm run build
   ```

   



## 附录

### browserslist
browserslist 目标浏览器配置表，可以针对目标浏览器进行编译处理，避免不必要的兼容代码
​

browserslist 配置的方法有两种，一种是修改 『package.json』 配置，一种创建 『.browserslistrc』 文件
​


1. package.json 形式 
```shell
{
	.
	.
	.
	"browserslist": [
        ">0.2%",
        "not dead",
        "not op_mini all"
    ]
}
```

2. 项目根目录下创建『.browserslistrc』 文件
```shell
> 1%
last 2 versions
```
配置规则介绍

| **规则** | **介绍** |
| --- | --- |
| > 1% | 全球超过1%人使用的浏览器 |
| > 5% in US | 指定国家使用率覆盖 |
| last 2 versions | 所有浏览器兼容到最后两个版本根据CanIUse.com追踪的版本 |
| Firefox > 20 | 指定浏览器的版本范围 |
| not ie <=8 | 排除 ie8 及以下 |
| Firefox 12.1 | 指定浏览器的兼容到指定版本 |
| since 2013 | 2013年之后发布的所有版本 |
| not dead with > 0.2% | 仍然还在使用且使用率大于 0.2% |
| last 2 Chrome versions | 最新的两个 Chrome 配置 |
| cover 99.5% | 99.5% 的浏览器都是目标 |

https://caniuse.com/ 查看兼容性的网站