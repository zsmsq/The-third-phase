// 1.下载express： npm i express
// 2.引入 express 模块
let express = require('express')

// 3.创建应用对象
let app = express();

// 4.搭建路由
app.get('/index',(request,response)=>{
    // 获取请求头信息
    console.log(request.headers)

    console.log(request.headers['accept-language'])
    // express提供新语法
    console.log(request.get('accept-language'))


    // 请求体暂时拿不到：需要学习中间件才可以拿到

    // 设置响应
    response.send('获取请求头信息')
})

// 5.设置端口号，启动服务
app.listen(8080,()=>{
    console.log('成功')
})