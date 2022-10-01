let express = require('express')
// 获取请求体数据：中间件  body-parser
// 1.下载 body-parser ： npm i body-parser
// 2.引入 body-parser
let bodyParser = require('body-parser')

let app = express();

// 3.使用 body-parser中间件  ： npm 官网上去找
app.use(bodyParser.urlencoded({ extended: false }))

// 搭建路由
app.post('/login',(request,response)=>{
    // 4.打印请求体
    console.log(request.body)  //就是请求体  { username: 'xiaoxinyan', psw: '123456789' }

    // 设置响应体
    response.send('获取请求体数据')
})
app.listen(7080)