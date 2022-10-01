let http = require('http')

let server = http.createServer((request,response)=>{
    // 设置响应行的信息 （协议的版号）
    // 设置响应状态码
    // response.statusCode = 250;
    // // 设置响应状态码字符串
    // response.statusMessage = 'kooooo'


    // 设置响应
    response.end('hello')
})

server.listen(1010,()=>{
    console.log('成功')
})