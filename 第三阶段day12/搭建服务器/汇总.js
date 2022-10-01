// 引入 http 模块
let http = require('http')
// 引入 url 模块
let url = require('url')
// 引入 querystring 
let qs = require('querystring')
// 创建服务器对象
let server = http.createServer((request,response)=>{
    // 获取请求类型
    console.log(request.method)
    // 获取请求url4
    console.log(request.url)
    // 获取路径部分
    console.log(url.parse(request.url,true).pathname)
    // 获取查询字符串
    console.log(url.parse(request.url,true).query)
    
    // 获取请求头
    console.log(request.headers)
    console.log(request.headers['accept-language'])

    // 获取请求体
    // 1.声明一个变量
    let str = ''
    // 2.绑定 data 事件
    request.on('data',(chunk)=>{
        str += chunk;
    })
    // 3.绑定end事件
    request.on('end',()=>{
        console.log(str) //请求体  username=xiaoA&psw=123456
        console.log(qs.parse(str))
    })

    // 设置响应状态码
    response.statusCode = 200;
    // 设置响应状态码字符串
    response.statusMessage = 'ok'
    // 设置响应头
    response.setHeader('Content-Type','text/html;charset=utf-8')

    // 设置响应体
    response.write()
    response.write()
    response.write()
    response.end()
})

// 设置端口号
server.listen(8080,()=>{
    console.log('running')
})