let express = require('express')

let app = express()

// 搭建路由
app.all('/data3',(request,response)=>{
    response.set('Access-Control-Allow-Origin','*')
    response.set('Access-Control-Allow-Headers','*')
    response.end('data3')
})
app.all('/data4',(request,response)=>{
    response.set('Access-Control-Allow-Origin','*')
    response.set('Access-Control-Allow-Headers','*')
    response.end('data4')
})

app.listen(7070,()=>{
    console.log('端口是7070服务器')
})
