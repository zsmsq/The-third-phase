let http = require('http')
let qs = require('querystring')  //nodejs内置，处理查询字符串的

let server = http.createServer((request,response)=>{
    // 获取请求体：post请求才有请求体
    // 1.需要声明一个变量
    let body = ''
    // 2.绑定 data 事件
    request.on('data',chunk=>{
        body += chunk;
    })
    // 3.绑定 end 事件
    request.on('end',()=>{
        console.log(body)  
        //就是我们需要的请求体  username=xiaoA&psw=123456
        console.log(qs.parse(body))
    })

    // 设置响应
    response.end('hello body')
})

server.listen(999,()=>{
    console.log('成功')
})