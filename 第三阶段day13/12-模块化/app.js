// 引入
// let result = require('./test.js')

// console.log(result)
// // result()

// result.test()
// result.add()

// 引入模块
// let result = require('./test')
// console.log(result)

// let result = require('./abc')
// console.log(result)

// let result = require('./bbb')
// console.log(result)
// result()

// 如果是内置模块或者是 npm 安装的模块，直接使用包名字即可
// 引入内置模块

let fs = require('fs')
let http = require('http')
let url = require('url')

// 引入npm 安装的模块
let _ = require('lodash')
let express = require('express')

console.log(_.chunk(['a', 'b', 'c', 'd'], 2))