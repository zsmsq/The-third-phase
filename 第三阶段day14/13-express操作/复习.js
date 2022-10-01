// express就是搭建服务器     http封装
// 1.下载 express ： npm i express    yarn add express
// 2.引入 express
let express = require('express')
let url = require('url')
let qs = require('querystring')

// 3.创建应用对象
let app = express();

// 4.搭建路由
// 设置路由参数
app.get('/:index',(request,response)=>{
    // 获取路由参数
    let result = request.params.index;  //值是数字或英文 在浏览器地址栏 127.0.18080/xxx ，index后面的值为xxx
    // 请求报文的获取
    // 请求行
    // 获取请求的类型
    console.log(request.method)
    // 获取请求的url
    console.log(request.url)
    // 获取路径部分
    console.log(url.parse(request.url,true).pathname)
    // 获取查询字符串
    console.log(url.parse(request.url,true).query)
    console.log(request.query)
    // 获取协议的版本号
    console.log(request.httpVersion)
    // 请求头
    console.log(request.headers)
    console.log(request.headers['accept-language'])
    console.log(request.get('accept-language'))
    // 请求体
    // 1.声明变量
    let body = ''
    // 2.绑定 data 事件
    request.on('data',chunk=>{
        body += chunk;
    })
    // 3.绑定end事件
    request.on('end',()=>{
        console.log(body)
        console.log(qs.parse(body))              //查询额字符串，上面
    })

})
app.post('/',(request,response)=>{

})
app.all('/admin',(request,response)=>{

})
app.all('*',(request,response)=>{
    response.send('404页面')
})
// *类似于福利院 如果乱码在end前面加一个s

// 5.设置端口号，启动服务器
app.listen(8080,()=>{
    console.log('启动成功')
})
