// 1.下载express： npm i express
// 2.引入 express 模块
// const { request, response } = require('express');
// let express = require('express')

// // 3.创建应用对象
// let app = express();

// // 4.搭建路由
// app.get('/index',(request,response)=>{
//     // 设置响应
//     response.end('hello express')
// })

// // 5.设置端口号，启动服务
// app.listen(8080,()=>{
//     console.log('成功')
// })


let express = require('express')

let app = express();

app.get('./index',(request,response)=>{
    response.end('hello express')
})
app.listen(8080,()=>{
    console.log('成功')
})