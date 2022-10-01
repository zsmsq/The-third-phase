let http = require('http')
let url = require('url')
let fs = require('fs')

let server = http.createServer((request,response)=>{
    // 获取路径部分
    let path = url.parse(request.url,true).pathname

    if(path === '/index.html'){
        fs.readFile(__dirname+'/index.html',(err,data)=>{
            if(err){
                response.end('404')
            }else{
                response.end(data)
            }
        })
    }else if(path === '/index.css'){
        fs.readFile(__dirname+'/index.css',(err,data)=>{
            if(err){
                response.end('404')
            }else{
                response.end(data)
            }
        })
    }else if(path === '/index.js'){
        fs.readFile(__dirname+'/index.js',(err,data)=>{
            if(err){
                response.end('404')
            }else{
                response.end(data)
            }
        })
    }
    else{
        response.end('404') 
    }

})

server.listen(8090,()=>{
    console.log('okkkk')
})