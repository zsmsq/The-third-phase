// 1.下载express
// 2.引入express
let express = require('express')

// 3.创建应用对象
let app = express();

// 4.搭建路由
app.get('/',(request,response)=>{
    // 设置响应
    response.send('这是get请求')
})

app.post('/login',(request,response)=>{
    // 设置响应
    response.send('这是post请求')
})

// 既支持get请求也支持post请求
app.all('/admin',(request,response)=>{
    // 设置响应
    response.send('这是家伙既支持get请求也支持post请求')
})

// 上边没有匹配的路径，是页面找不见 404
app.all('*',(request,response)=>{
    response.send('这是404页面')
})



// 5.设置端口号
app.listen(7070,()=>{
    console.log('running')
})