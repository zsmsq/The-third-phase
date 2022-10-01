// 使用 解构赋值 的形式引入模块
const { resolve } = require('path');
//1. 导入插件
const ESLintPlugin = require('eslint-webpack-plugin');
// 1. 引入插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
//1. 引入插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//1. 引入插件
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
//1. 引入插件
const TerserPlugin = require("terser-webpack-plugin");

//暴露对象
module.exports = {
    //设置入口
    entry: './src/js/app.js',
    //设置出口
    output: {
        path: resolve(__dirname, '../build'),  //指的是所有资源的输出目录
        //path : __dirname + '/build'
        filename: 'js/bundle.js',
        clean: true, // 打包时, 可以清空目录
        //1. 设置出口   设置页面中相关的资源 css js img json 字体 路径
        publicPath: '/' 
    },
    // 1. 设置模式
    mode: 'production',
    //配置 loader
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,		
                    "css-loader" , 		// 将 CSS 转为 CommonJS 的模块
                    'postcss-loader'
                ]  //设置的顺序不能改变
            },
            //配置 less 文件处理
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'less-loader'  //将 less 资源编译为 css 资源
                ]
            },
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
            },
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
            },
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
            // 配置 html 的 loader
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader'
                }
            },
            //配置字体文件的处理
            {
                test: /\.(eot|svg|woff|woff2|ttf)$/,  
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[hash:6][ext]',
                },
            }


        ],




    },
    //2. 配置插件
    plugins: [
        new ESLintPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",// 指定html模板文件。
            inject: "body",// 将打包生成的JS文件放置在body尾部
            hash: true,// 在引入JS时增加hash后缀字符串,去除缓存。
            minify: {
                removeAttributeQuotes: true,// 移除属性中的双引号
                removeComments: true,// 移除注释
                collapseWhitespace: true,// 去除空格与换行
            }
        }),
        // 3. 配置插件
        new MiniCssExtractPlugin({					
            filename: "css/[hash:8].css",
        }),
    ],    
    //2. 设置优化选项
    optimization: {
        minimizer: [
  			new CssMinimizerPlugin(),
            new TerserPlugin()
        ],
    },
    
}