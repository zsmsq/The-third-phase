// 1.引入 http 模块
let http = require('http')
let url = require('url')  //nodejs内置模块，用来处理url问题

// 2.创建服务对象
let server = http.createServer((request,response)=>{
    // 获取请求行的信息
    // 获取请求类型
    console.log(request.method)

    // 获取请求的url    
    //   /s?wd=atguigu&tel=123456&pos=xian
    console.log(request.url)
    
    // 请求的url由 路径部分 和 查询字符串部分 组成
    // 获取路径部分
    console.log(url.parse(request.url,true).pathname)
    // 获取查询字符串部分
    console.log(url.parse(request.url,true).query)

    // 获取协议的版本
    console.log(request.httpVersion)

    // 设置响应
    response.end('hello')
})

// 3.设置端口，启动服务
server.listen(9090,()=>{
    console.log('running')
})