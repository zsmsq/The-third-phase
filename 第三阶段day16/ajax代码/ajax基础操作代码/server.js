let express = require('express')

let app = express();

// 搭建路由  ---建议使用all
app.all('/get',(request,response)=>{
    // 设置响应头
    response.setHeader('Access-Control-Allow-Origin','*')
    // 设置响应头 (给前端人员开设置请求头权限的)
    response.setHeader('Access-Control-Allow-Headers','*')
    
    // 设置响应体
    response.send('ajax发送get请求获取数据')

})
app.all('/post',(request,response)=>{
    // 设置响应头
    response.setHeader('Access-Control-Allow-Origin','*')
    
    // 设置响应体
    response.send('ajax发送post请求获取数据')

})

app.all('/json',(request,response)=>{
    // 设置响应头
    response.set('Access-Control-Allow-Origin','*')

    // 准备数据
    let obj = {
        name : '尚硅谷',
        pos : ['北京','西安','武汉']
    }

    // 设置响应体
    response.end(JSON.stringify(obj))
})

app.all('/jquery',(request,response)=>{
    // 设置响应头
    response.set('Access-Control-Allow-Origin','*')
    // 设置响应头
    response.set('Access-Control-Allow-Headers','*')

    // 准备数据
    let obj = {
        name : '尚硅谷',
        pos : ['北京','西安','武汉']
    }

    // 设置响应体
    response.end(JSON.stringify(obj))
})

// 我们自己封装请求的区域
app.all('/my-jquery',(request,response)=>{
    // 设置响应头
    response.set('Access-Control-Allow-Origin','*')
    // 设置响应头
    response.set('Access-Control-Allow-Headers','*')
    // 设置响应体
    response.end('后端人员准备的数据')
})


app.all('/index.html',(request,response)=>{
    // 设置响应体
    response.sendFile(__dirname+'/10.测试ajax是否是同源.html')
})

// 测试ajax是否是同源
app.all('/testAjax',(request,response)=>{
    // 设置响应体
    response.send('这是后端人员准备的数据')
})

let url = require('url')
// jsonp
app.all('/jsonp',(request,response)=>{
    // 设置响应体
    // response.send('数据')
    // response.send('alert(123)')

     // 准备数据
    let obj = {
        name : '尚硅谷',
        pos : ['北京','西安','武汉']
    }

    // 获取回调函数名：获取查询字符串
    let funName = request.query.callback;
    // url.parse(request.url,true).query.callback

    // 设置响应体
    // 函数名(实参)
    // let data = JSON.stringify(obj)
    // `${funName}(${data})`
    response.end(`${funName}(${JSON.stringify(obj)})`)
    // response.end(`test({name:'尚硅谷',pos:['北京','西安','武汉']})`)

})

// cors
app.all('/cors',(request,response)=>{

    // 设置cors响应头
    response.setHeader('Access-Control-Allow-Origin','*')
    // 允许所有的客户端都可以进行访问

    // 准备
    let obj = {
        name : 'xiaoA',
        age : 18
    }

    // 设置响应体
    response.end(JSON.stringify(obj))

})  

app.listen(8080,()=>{
    console.log('running')
})