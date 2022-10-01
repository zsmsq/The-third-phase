let express = require('express')

let app = express()

// 搭建路由
app.all('/data1',(request,response)=>{
    response.set('Access-Control-Allow-Origin','*')
    response.set('Access-Control-Allow-Headers','*')
    response.end('data1')
})
app.all('/data2',(request,response)=>{
    response.set('Access-Control-Allow-Origin','*')
    response.set('Access-Control-Allow-Headers','*')
    response.end('data2')
})

app.listen(6060,()=>{
    console.log('端口是6060服务器')
})
