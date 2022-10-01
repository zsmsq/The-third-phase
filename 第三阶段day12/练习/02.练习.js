let http = require('http')
let url = require('url')

let server = http.createServer((request,response)=>{
    // 中文乱码：设置响应头
    response.setHeader('Content-Type','text/html;charset=utf-8')

    // 获取路径部分
    let path = url.parse(request.url,true).pathname

    if(path === '/login'){
        // 登录页面
        response.end('登录页面')
    }else if(path === '/register'){
        // 注册页面
        response.end('注册页面')
    }else{
        response.end('404')
    }

})

server.listen(8080,()=>{
    console.log('ok')
})