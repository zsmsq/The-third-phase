let express = require('express')

let app = express()

// 搭建路由
app.get('/app',(request,response)=>{
    // 设置响应头信息
    response.setHeader('name','xiaoB')
    response.set('age',20)

    response.send('设置响应头信息')
})

app.listen(9090,()=>{
    console.log('running')
})