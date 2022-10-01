// 引入模块
let express = require('express')
let url = require('url')
// moment.js 专门用来处理时间的包
// 下载 moment ： npm i moment
// 引入 moment
let moment = require('moment');

let fs = require('fs')

// 创建应用对象
let app = express();

// 声明全局中间件
let outLog = (request,response,next)=>{
    // 书写封装的逻辑
    // [2022-09-09 11:05:37  /one]
    // 获取路径部分
    let path = url.parse(request.url,true).pathname;
    // 获取时间    moment.js
    let time = moment().format('YYYY-MM-DD HH:mm:ss');
    let str = `[${time}  ${path}] \r\n`
    
    fs.writeFile(__dirname+'/log.txt',str,{flag:'a'},(err)=>{
        if(err) throw err;
    })
   
    // 调用 next
    next();
}
// 调用全局中间件
app.use(outLog)


// 搭建路由
app.get('/one',(request,response)=>{

    response.end('one')
})
app.get('/two',(request,response)=>{
    response.end('two')
})
app.get('/three',(request,response)=>{
    response.end('three')
})


// 设置端口
app.listen(8090,()=>{
    console.log('running')
})