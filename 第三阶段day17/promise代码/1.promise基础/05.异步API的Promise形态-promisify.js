// promisify  是 promise形态
// 本质 是一个方法
// 可以把 fs模块中的方法 转化成 promise语法



let fs = require('fs')
// let util = require('util')  //util 这是nodejs内置模块，工具模块
// let mineReadFile = util.promisify(fs.readFile)

// 解构赋值
let {promisify} = require('util');
let mineReadFile = promisify(fs.readFile);

mineReadFile('./resource/2.html')
    .then(value=>{
        console.log(value.toString())
    },reason=>{
        console.log(reason)
    })