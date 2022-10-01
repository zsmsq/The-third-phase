let express = require('express')

let app = express()

// 搭建路由
app.all('/index',(request,response)=>{
    response.set('Access-Control-Allow-Origin','*')
    response.set('Access-Control-Allow-Headers','*')

    setTimeout(function(){
        response.send('后端人员准备的数据')
    },3000)   
})

// 搭建路由
app.all('/one',(request,response)=>{
    response.set('Access-Control-Allow-Origin','*')
    response.set('Access-Control-Allow-Headers','*')
    setTimeout(function(){
        response.send('后端人员准备的数据one')
    },1000)

})
// 搭建路由
app.all('/two',(request,response)=>{
    response.set('Access-Control-Allow-Origin','*')
    response.set('Access-Control-Allow-Headers','*')
    setTimeout(function(){
        response.send('后端人员准备的数据two') 
    },3000)
})
// 搭建路由
app.all('/three',(request,response)=>{
    response.set('Access-Control-Allow-Origin','*')
    response.set('Access-Control-Allow-Headers','*')
    response.send('后端人员准备的数据three')
})

// 测试拦截器
app.all('/admin',(request,response)=>{
    response.set('Access-Control-Allow-Origin','*')
    response.set('Access-Control-Allow-Headers','*')
    response.send('后端人员准备的数据admin')
})

app.listen(8080,()=>{
    console.log('启动成功')
})