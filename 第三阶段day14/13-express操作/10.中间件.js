// 内置中间件（自带的）
//中间件是一个函数
// 第三方中间件（别人写好的 ： body parse，我们自己写好的）
//         别人写好的（其他程序员）：需要下载
//         我们自己写好的：全局中间件    局部中间件（路由）


let express = require('express')

let app = express()

// 什么时候会使用中间件？如果代码出现大量重复，需要封装函数，此时该函数被称为中间件
// 全局中间件 : 所有的路由都可以使用该中间件
// 声明中间件
let outTime = (request,response,next)=>{
    // 书写你需要封装功能
    // 获取时间戳
    console.log(Date.now())
    // 调用next：next会指向下一个路由的回调函数
    next();
}

// 调用全局中间件  
app.use(outTime);

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


app.listen(8080,()=>{
    console.log('成功')
})








