let http = require('http')
let url = require('url')
let fs = require('fs')

let server = http.createServer((request,response)=>{
    // 获取路径部分
    let path = url.parse(request.url,true).pathname;

    fs.readFile(__dirname+path,(err,data)=>{
        if(err){
            response.end('404')
        }else{
            response.end(data)
        }
    })

    
})

server.listen(8090,()=>{
    console.log('okkkk')
})