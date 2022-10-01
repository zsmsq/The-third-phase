let express = require('express')
let url = require('url')

let app = express()

// 搭建路由
app.get('/index',(request,response)=>{
    // 获取请求类型
    console.log(request.method)
    // 获取请求url
    console.log(request.url)
    // 获取路径部分
    console.log(url.parse(request.url,true).pathname)

    // 获取查询字符串部分
    console.log(url.parse(request.url,true).query)
    // express给获取查询字符串提供了新语法
    console.log(request.query)


    // 获取协议的版本
    console.log(request.httpVersion)

    // 设置响应
    response.send('获取请求行的信息')
})


app.listen(6060,()=>{
    console.log('成功')
})