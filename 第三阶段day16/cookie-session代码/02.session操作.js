let express = require('express')
// 中间件 express-session
// 1.下载 express-session ： npm i express-session
// 2.引入 express-session
let session = require('express-session')

let app = express();

// 3.使用 express-session中间件 
app.use(session({   //如果效果不对，清除缓存
    name: 'xianh5',  //为 id值 起新名字的，原有的名字 connect.sid
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { 
        secure: false,  //变成 false
        maxAge : 1000 * 60 
    }
}))

// 浏览器与服务器传递的id值 默认 ： connect.sid

// 搭建路由
// 设置 session
app.get('/set-session',(request,response)=>{
    // 设置 session
    request.session.name = 'xiaoming'
    request.session.age = 18;

    // 设置响应体
    response.send('设置 session')
})
// 获取 session
app.get('/get-session',(request,response)=>{
    // 获取 session
    console.log(request.session)

    // 设置响应体
    response.send('获取 session')
})
// 删除 session
app.get('/rm-session',(request,response)=>{
    // 删除 session
    request.session.destroy(()=>{
        // 设置响应体
        response.send('删除 session')
    })
  
})

app.listen(6060,()=>{
    console.log('服务器启动成功')
})