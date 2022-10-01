let http = require('http')

let server = http.createServer((request,response)=>{
    // 设置响应头
    response.setHeader('name','xiaoC')

    // 通过设置响应头来解决中文乱码问题
    response.setHeader('Content-Type','text/html;charset=utf-8')


    // 设置响应
    response.end('你好 响应头')
})

server.listen(1010,()=>{
    console.log('成功')
})