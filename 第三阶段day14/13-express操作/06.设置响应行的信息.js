let express = require('express')

let app = express()

// 搭建路由
app.get('/app',(request,response)=>{
    // 设置响应行信息

    // 设置响应状态码
    // response.statusCode = 250;    //原方法
    response.status(250);           // 第二种方法 方法（）里面写状态码 
    // 设置响应状态码的字符串
    response.statusMessage = 'koooo'

    response.send('设置响应行信息')
})

app.listen(9090,()=>{
    console.log('running')
})