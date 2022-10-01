// 1.引入http模块
let http = require('http')
let url = require('url')

// 2.创建服务器对象
let server = http.createServer((request,response)=>{
    // 获取查询字符串
    let bg = url.parse(request.url,true).query.bg

    // 设置响应体
    response.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
            *{
                margin: 0;
                padding: 0;
            }
            html,body{
                background: ${bg};
            }
            
        </style>
    </head>
    <body>
        <h1>白日不到处，青春恰自来。苔花如米小，也学牡丹开。</h1>
    
        
    </body>
    </html>
    
    `)

})

// 3.设置端口
server.listen(8080,()=>{
    console.log('成功')
})