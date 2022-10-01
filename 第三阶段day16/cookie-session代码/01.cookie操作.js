let express = require('express')

// 中间件 cookie-parser 
// 1.下载 cookie-parser  ： npm i cookie-parser
// 2.引入 cookie-parser
let cookieParser = require('cookie-parser')
let app = express()

// 3.中间件 cookie-parser 使用
app.use(cookieParser())

// 搭建路由
// 设置 cookie
app.all('/set-cookie',(request,response)=>{
    // 设置 cookie
    response.cookie('name','xiaoming')
    response.cookie('age',18,{maxAge:1000*60})

    // maxAge : 设置cookie的生命周期  单位是毫秒

    // 如果该cookie设置了生命周期，只要在生命周期的时间内，
    // 该cookie就是生效的，与浏览器是否关闭无关

    // 如果该cookie没有设置生命周期，只要浏览器关闭，该cookie就销毁了

    // 使用场景：7天免登陆     maxAge:1000*60*60*24*7 

    // 设置响应体
    response.send('设置 cookie')
})
// 获取 cookie
app.all('/get-cookie',(request,response)=>{
    // 获取 cookie
    console.log(request.cookies)

    // 设置响应体
    response.send('获取 cookie')
})
// 删除 cookie
app.all('/rm-cookie',(request,response)=>{
    // 删除 cookie
    response.clearCookie('name')
    response.clearCookie('age')

    // 设置响应体
    response.send('删除 cookie')
})


app.listen(7070,()=>{
    console.log('服务启动成功')
})