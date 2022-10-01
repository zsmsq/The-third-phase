let http = require('http')

let server = http.createServer((request,response)=>{
   
    // 设置响应体
    // write  可以进行多次调用，使用的时候不要单独使用
    // end 只能调用一次，可以单独使用
    response.write('aaaa')
    response.write('bbbb')
    // response.write('ccc')
    // response.write('ddd')
    // response.end('xxxxx')
    // response.end('yyyyy')
    // response.end('zzzzzz')
    response.end()
})

server.listen(1010,()=>{
    console.log('成功')
})