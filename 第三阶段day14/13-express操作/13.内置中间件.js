// 静态资源中间件
// 静态资源：相对来说，长时间不改变的资源都是静态资源
    // html  css  js  logo.png  .....
// 动态资源：经常发生改变的资源

let express = require('express')

let app = express();

// 如果静态资源的访问路径 与 路由方法的请求路径 一样：谁写在上边谁生效

app.get('/index.html',(request,response)=>{
    response.send('页面会不会出来呢？？？')
})

// 直接使用静态资源中间件
app.use(express.static('./public'))  //参数是 静态资源所在的文件夹


app.listen(7070,()=>{
    console.log('running')
})