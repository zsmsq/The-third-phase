// 引入模块
let express = require('express')

let app = express();


// 搭建路由
// 页面显示
app.get('/login',(request,response)=>{
    // 设置响应体 ：表单页面
    response.sendFile(__dirname + '/index.html')
})

// 表单提交成功的页面
app.post('/login',(request,response)=>{
    // 设置响应体
    response.send('登录成功')
})

// 页面显示与提交，路由需要两个  get  post

app.listen(7070,()=>{
    console.log('running')
})