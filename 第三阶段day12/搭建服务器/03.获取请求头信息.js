let http = require('http')

let server = http.createServer((request,response)=>{
    // 获取请求头的信息
    console.log(request.headers)
    console.log(request.headers.connection)
    console.log(request.headers['connection'])

    // console.log(request.headers.cache-control)  是错误的
    console.log(request.headers['cache-control'])

    // 设置响应
    response.end('hello header')
})

server.listen(6060,()=>{
    console.log('成功')
})